<script>
	import { onMount, tick } from 'svelte';
	import cascadeLogo from '$lib/images/cc-logo-full.png';
	import {
		calculate,
		comparePathways,
		excelDefaults,
		defaultChargeKg,
		defaultMix,
		defaultCostScenario,
		defaultRecoverablePct,
		defaultRecoveryHours,
		defaultLabourPerHour,
		defaultUnitsPerDay,
		defaultDaysPerYear,
		defaultTeams,
		mixTotal,
		SECTOR_RESIDENTIAL,
		SECTOR_COMMERCIAL,
		PATHWAY_DESTRUCTION,
		PATHWAY_RECLAMATION,
		PATHWAY_RECYCLING,
		MACHINE_BASIC,
		MACHINE_HIGH,
		RESIDENTIAL_CHARGE_CAP_KG,
		maxRecoveryHoursPerUnit
	} from '$lib/lrm/v42/calculate.js';

	let sector = '';
	let pathway = '';
	let filledFromDefaults = false;
	let aboutOpen = false;

	function openAbout(host) {
		const rect = host.getBoundingClientRect();
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
		const width = Math.min(34 * rem, window.innerWidth - 24);
		let left = rect.left;
		if (left + width > window.innerWidth - 12) left = Math.max(12, window.innerWidth - 12 - width);
		host.style.setProperty('--about-x', `${left}px`);
		host.style.setProperty('--about-y', `${rect.bottom}px`);
		host.style.setProperty('--about-w', `${width}px`);
		aboutOpen = true;
	}

	let chargeSizeKg = 100;
	let chargeCappedNote = false;
	let recoveryHoursCappedNote = false;
	let recoverablePct = 80;
	let recoveryHoursPerUnit = 0.5;
	let labourPerHour = 20;
	let fuelEfficiencyKmPerL = 8.5;
	let fuelPricePerL = 1.5;
	let travelKmPerTeam = 100;
	let unitsPerDay = 1;
	let daysPerYear = 75;
	let teams = 1;
	let warehousePerMonth = 1000;
	let tmsCost = 50000;
	let machineType = MACHINE_HIGH;
	let destructionTech = 'Rotary';
	let facilityStatus = 'Retrofit';
	let location = 'In-country';
	let salePrice = 5;
	let virginPrice = 5;
	let mixR32 = 5;
	let mixR410a = 65;
	let mixR22 = 30;
	let costScenarioMode = 'auto';
	let costScenarioManual = 'Medium';
	let openCats = {};
	let result = null;
	let publishedKey = '';
	/** @type {'opex2' | 'capex'} */
	let chartView = 'opex2';
	const CARBON_TIP =
		'For reference, Singapore’s carbon tax, for 2026-2027, is S$45/tCO2e (~US$35), and Japan’s GX-ETS, mandatory since 2026, operates within a price corridor of ¥1,700-¥4,300/tCO2e (~US$11-27)';
	let selectedAlt = '';
	/** @type {HTMLElement | null} */
	let tipHost = null;
	/** @type {HTMLDivElement | null} */
	let tipProbe = null;

	function positionTip(host) {
		if (!(host instanceof HTMLElement) || !host.dataset.tip) return;
		const rect = host.getBoundingClientRect();
		const margin = 8;
		const gap = 6;
		if (
			rect.bottom < margin ||
			rect.top > window.innerHeight - margin ||
			rect.right < margin ||
			rect.left > window.innerWidth - margin
		) {
			host.style.setProperty('--tip-x', '-9999px');
			host.style.setProperty('--tip-y', '0px');
			return;
		}
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
		const maxWidth = Math.min(22 * rem, window.innerWidth - margin * 2);
		if (!tipProbe) {
			tipProbe = document.createElement('div');
			tipProbe.setAttribute('aria-hidden', 'true');
			tipProbe.style.cssText =
				'position:fixed;left:-9999px;top:0;visibility:hidden;pointer-events:none;white-space:pre-line;box-sizing:border-box;';
			document.body.appendChild(tipProbe);
		}
		tipProbe.style.font = `400 0.75rem/1.4 ${getComputedStyle(host).fontFamily}`;
		tipProbe.style.padding = '0.45rem 0.6rem';
		tipProbe.style.width = 'max-content';
		tipProbe.style.maxWidth = `${maxWidth}px`;
		tipProbe.textContent = host.dataset.tip;
		const tipW = tipProbe.offsetWidth;
		const tipH = tipProbe.offsetHeight;
		let left = rect.left;
		if (left + tipW > window.innerWidth - margin) left = window.innerWidth - margin - tipW;
		if (left < margin) left = margin;
		let top = rect.top - gap - tipH;
		if (top < margin) top = rect.bottom + gap;
		if (top + tipH > window.innerHeight - margin) {
			top = Math.max(margin, window.innerHeight - margin - tipH);
		}
		host.style.setProperty('--tip-x', `${Math.round(left)}px`);
		host.style.setProperty('--tip-y', `${Math.round(top)}px`);
		tipHost = host;
	}

	function placeTip(event) {
		const node = event.target;
		const host = node instanceof Element ? node.closest('[data-tip]') : null;
		if (host instanceof HTMLElement && host.dataset.tip) positionTip(host);
	}

	function followTip() {
		if (tipHost) positionTip(tipHost);
	}

	onMount(() => {
		window.addEventListener('scroll', followTip, true);
		window.addEventListener('resize', followTip);
		return () => {
			window.removeEventListener('scroll', followTip, true);
			window.removeEventListener('resize', followTip);
			tipProbe?.remove();
			tipProbe = null;
		};
	});

	$: residential = sector === SECTOR_RESIDENTIAL;
	$: commercial = sector === SECTOR_COMMERCIAL;
	$: ready = Boolean(sector && pathway);
	$: pathways = residential
		? [
				{
					id: PATHWAY_DESTRUCTION,
					title: 'Destruction',
					body: 'Permanent destruction of refrigerant at a destruction facility'
				},
				{
					id: PATHWAY_RECLAMATION,
					title: 'Reclamation',
					body: 'Reprocessing of recovered refrigerant to meet the purity specifications of AHRI Standard 700'
				}
			]
		: [
				{
					id: PATHWAY_DESTRUCTION,
					title: 'Destruction',
					body: 'Permanent destruction of refrigerant at a destruction facility'
				},
				{
					id: PATHWAY_RECLAMATION,
					title: 'Reclamation',
					body: 'Reprocessing of recovered refrigerant to meet the purity specifications of AHRI Standard 700'
				},
				{
					id: PATHWAY_RECYCLING,
					title: 'Recycling',
					body: 'Extracting and cleaning refrigerant for direct reuse on-site, without meeting all of the requirements for reclamation'
				}
			];

	$: mixSum = mixTotal({ r32: mixR32, r410a: mixR410a, r22: mixR22 });
	$: mixOk = Math.round(mixSum * 1e6) / 1e6 === 100;

	$: inputSnapshot = {
		sector,
		pathway,
		chargeSizeKg,
		recoverablePct,
		recoveryHoursPerUnit,
		labourPerHour,
		fuelEfficiencyKmPerL,
		fuelPricePerL,
		travelKmPerTeam,
		unitsPerDay,
		daysPerYear,
		teams,
		warehousePerMonth,
		tmsCost,
		machineType: commercial ? MACHINE_HIGH : machineType,
		destructionTech,
		facilityStatus,
		location: pathway === PATHWAY_RECYCLING ? 'In-country' : location,
		salePrice,
		virginPrice,
		mix: { r32: mixR32, r410a: mixR410a, r22: mixR22 },
		costScenarioOverride: costScenarioMode === 'auto' ? null : costScenarioManual
	};

	$: live = ready ? calculate(inputSnapshot) : null;
	$: vis = live?.visibility;
	$: autoScenario = live ? defaultCostScenario(live.inputs.annualKg) : 'Medium';
	$: liveKey = JSON.stringify(inputSnapshot);
	$: stale = Boolean(result) && publishedKey !== liveKey;

	function toggleCat(id) {
		openCats = { ...openCats, [id]: !openCats[id] };
	}

	function selectAlt(id) {
		selectedAlt = selectedAlt === id ? '' : id;
	}

	function clearOutputs() {
		result = null;
		publishedKey = '';
		openCats = {};
		selectedAlt = '';
	}

	function produceOutputs() {
		if (!ready || !mixOk || !live) return;
		result = live;
		publishedKey = liveKey;
		openCats = {};
		selectedAlt = '';
	}

	function applyDefaults(nextSector, nextPathway) {
		const d = excelDefaults(nextSector, nextPathway);
		chargeSizeKg = d.chargeSizeKg;
		chargeCappedNote = false;
		recoverablePct = d.recoverablePct;
		recoveryHoursPerUnit = d.recoveryHoursPerUnit;
		labourPerHour = d.labourPerHour;
		fuelEfficiencyKmPerL = d.fuelEfficiencyKmPerL;
		fuelPricePerL = d.fuelPricePerL;
		travelKmPerTeam = d.travelKmPerTeam;
		unitsPerDay = d.unitsPerDay;
		daysPerYear = d.daysPerYear;
		teams = d.teams;
		warehousePerMonth = d.warehousePerMonth;
		tmsCost = d.tmsCost;
		machineType = d.machineType;
		destructionTech = d.destructionTech;
		facilityStatus = d.facilityStatus;
		location = d.location;
		salePrice = d.salePrice;
		virginPrice = d.virginPrice;
		mixR32 = d.mix.r32;
		mixR410a = d.mix.r410a;
		mixR22 = d.mix.r22;
		costScenarioMode = 'auto';
		filledFromDefaults = true;
	}

	async function bumpTo(id) {
		await tick();
		if (id === 'workspace') {
			window.scrollTo({ top: 0, behavior: 'auto' });
			return;
		}
		const el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: 'auto', block: 'start' });
	}

	function chooseSector(next) {
		const sectorChanged = sector !== next;
		sector = next;
		if (next === SECTOR_RESIDENTIAL && pathway === PATHWAY_RECYCLING) pathway = '';
		if (next === SECTOR_COMMERCIAL) machineType = MACHINE_HIGH;
		if (sectorChanged) {
			chargeSizeKg = defaultChargeKg(next);
			chargeCappedNote = false;
			recoverablePct = defaultRecoverablePct(next);
			recoveryHoursPerUnit = defaultRecoveryHours(next);
			labourPerHour = defaultLabourPerHour(next);
			unitsPerDay = defaultUnitsPerDay(next);
			daysPerYear = defaultDaysPerYear(next);
			teams = defaultTeams(next);
			const mix = defaultMix(next);
			mixR32 = mix.r32;
			mixR410a = mix.r410a;
			mixR22 = mix.r22;
			machineType = next === SECTOR_COMMERCIAL ? MACHINE_HIGH : MACHINE_BASIC;
		}
		if (pathway && !filledFromDefaults) applyDefaults(next, pathway);
		else if (pathway && sectorChanged && filledFromDefaults) {
			chargeSizeKg = defaultChargeKg(next);
			recoverablePct = defaultRecoverablePct(next);
			recoveryHoursPerUnit = defaultRecoveryHours(next);
			labourPerHour = defaultLabourPerHour(next);
			unitsPerDay = defaultUnitsPerDay(next);
			daysPerYear = defaultDaysPerYear(next);
			teams = defaultTeams(next);
			const mix = defaultMix(next);
			mixR32 = mix.r32;
			mixR410a = mix.r410a;
			mixR22 = mix.r22;
			machineType = next === SECTOR_COMMERCIAL ? MACHINE_HIGH : machineType;
		}
		if (sectorChanged) clearOutputs();
		if (pathway) bumpTo('workspace');
		else bumpTo('enduse-panel');
	}

	function choosePathway(next) {
		const pathwayChanged = pathway !== next;
		pathway = next;
		if (next === PATHWAY_RECYCLING) location = 'In-country';
		if (!filledFromDefaults && sector) applyDefaults(sector, next);
		if (pathwayChanged) clearOutputs();
		bumpTo('workspace');
	}

	$: retrofitUnavailable =
		pathway === PATHWAY_RECLAMATION ||
		(pathway === PATHWAY_DESTRUCTION && destructionTech === 'Plasma Arc');
	$: if (retrofitUnavailable && facilityStatus === 'Retrofit') facilityStatus = 'New';

	$: if (residential && Number(chargeSizeKg) > RESIDENTIAL_CHARGE_CAP_KG) {
		chargeSizeKg = RESIDENTIAL_CHARGE_CAP_KG;
		chargeCappedNote = true;
	} else if (!residential || Number(chargeSizeKg) < RESIDENTIAL_CHARGE_CAP_KG) {
		chargeCappedNote = false;
	}

	$: recoveryHoursMax = maxRecoveryHoursPerUnit(
		sector || SECTOR_COMMERCIAL,
		commercial || !sector ? MACHINE_HIGH : machineType
	);
	$: if (Number(recoveryHoursPerUnit) > recoveryHoursMax) {
		recoveryHoursPerUnit = recoveryHoursMax;
		recoveryHoursCappedNote = true;
	} else if (Number(recoveryHoursPerUnit) < recoveryHoursMax) {
		recoveryHoursCappedNote = false;
	}

	function formatUsd(n, digits = 2) {
		const value = Number(n);
		const amount = Number.isFinite(value) ? value : 0;
		const cents = Math.round(Math.abs(amount) * 100);
		const places = digits === 0 || cents % 100 === 0 ? 0 : digits;
		return amount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: places,
			maximumFractionDigits: places
		});
	}

	function formatKg(n, digits = 2) {
		return n.toLocaleString('en-US', {
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
		});
	}

	function opexBar(value, scale) {
		if (!scale || value <= 0) return 0;
		return Math.min(100, (value / scale) * 100);
	}

	function layoutWaterfall(steps, credit) {
		let running = 0;
		const bars = [];
		for (const step of steps) {
			const from = running;
			running += step.value;
			bars.push({ ...step, from, to: running, drop: false, tone: bars.length });
		}
		const gross = running;
		let net = gross;
		if (credit) {
			const to = gross + credit.value;
			bars.push({ ...credit, from: gross, to, drop: true });
			net = to;
		}
		const min = Math.min(0, net);
		const max = Math.max(gross, 0);
		const span = Math.max(max - min, 0.0001);
		const pct = (v) => ((v - min) / span) * 100;
		return {
			net,
			bars: bars.map((step) => {
				const lo = Math.min(step.from, step.to);
				const hi = Math.max(step.from, step.to);
				const heightPct = pct(hi) - pct(lo);
				return {
					...step,
					bottomPct: pct(lo),
					heightPct: step.value === 0 ? 0 : Math.max(heightPct, 1.5),
					toPct: pct(step.to)
				};
			})
		};
	}

	function layoutStack(rows) {
		const total = rows.reduce((sum, row) => sum + Math.max(row.value, 0), 0);
		const span = Math.max(total, 0.0001);
		let running = 0;
		return rows.map((row, i) => {
			const from = running;
			running += Math.max(row.value, 0);
			const heightPct = (Math.max(row.value, 0) / span) * 100;
			return {
				...row,
				tone: i % 4,
				bottomPct: (from / span) * 100,
				heightPct: row.value === 0 ? 0 : Math.max(heightPct, 1.5)
			};
		});
	}

	function capexBit(name, item, { showHidden = false } = {}) {
		if (!item || (item.hidden && !showHidden)) return null;
		return {
			name,
			value: item.na ? 0 : item.cost,
			note: item.na ? item.label : `${item.units} unit${item.units === 1 ? '' : 's'}`
		};
	}

	$: opexSteps = result
		? [
				{
					id: 'opex-recovery',
					name: 'Recovery',
					value: result.opex.labour + result.opex.refillMarkup + result.opex.recoveryTransport,
					tooltip:
						'Labour to recover refrigerant, the recycling mark-up when that pathway is selected, and fuel from the site to the central facility.',
					parts: [
						{ name: 'Recovery labour costs', value: result.opex.labour },
						...(result.inputs.pathway === PATHWAY_RECYCLING
							? [{ name: 'Additional costs for recycling', value: result.opex.refillMarkup }]
							: []),
						{
							name: 'Recovery transportation (on-site to central facility)',
							value: result.opex.recoveryTransport
						}
					]
				},
				{
					id: 'opex-central',
					name: 'Central facility',
					value: result.opex.warehouse + result.opex.central,
					tooltip:
						'Warehouse storage plus central-facility consolidation into large cylinders or ton tanks. Zero for Recycling.',
					parts: [
						{ name: 'Warehouse storage', value: result.opex.warehouse },
						{ name: 'Central facility operational activities', value: result.opex.central }
					]
				},
				{
					id: 'opex-transport',
					name: 'Transport & handling to end-use',
					value: result.opex.transport,
					tooltip: 'In-country or exported haulage to reclamation or destruction. Zero for Recycling.',
					parts: [{ name: 'Transport & handling to end-use facility', value: result.opex.transport }]
				},
				{
					id: 'opex-enduse',
					name: 'End-use processing',
					value: result.opex.processing,
					tooltip: 'Reclamation or destruction processing. Zero for Recycling.',
					parts: [{ name: 'End-use processing', value: result.opex.processing }]
				}
			]
		: [];

	$: opexCredit = !result
		? null
		: result.inputs.pathway === PATHWAY_RECLAMATION
			? {
					id: 'opex-sale',
					name: 'Sale price of reclaimed refrigerant',
					value: -result.opex.saleCredit,
					tooltip: 'Subtracted from gross operating cost. This is the blended sale price input.',
					parts: [{ name: 'Sale price of reclaimed refrigerant', value: -result.opex.saleCredit }]
				}
			: result.inputs.pathway === PATHWAY_RECYCLING
				? {
						id: 'opex-virgin',
						name: 'Price of virgin refrigerant avoided',
						value: -result.opex.virginSavings,
						tooltip: 'Subtracted from gross operating cost. This is the virgin-refrigerant price input.',
						parts: [{ name: 'Price of virgin refrigerant avoided', value: -result.opex.virginSavings }]
					}
				: null;

	$: opexChart = layoutWaterfall(opexSteps, opexCredit);

	$: capexCats = result
		? [
				{
					id: 'capex-recovery',
					name: 'Recovery equipment',
					parts: [
						capexBit('Recovery machines (basic)', result.capex.machinesBasic, { showHidden: true }),
						capexBit('Recovery accessories (basic)', result.capex.accessoriesBasic, { showHidden: true }),
						capexBit(
							result.inputs.pathway === PATHWAY_RECYCLING
								? 'Recovery + Recycling Machine'
								: 'Recovery machines (high capacity)',
							result.capex.machinesHigh,
							{ showHidden: true }
						),
						capexBit('Recovery accessories (high capacity)', result.capex.accessoriesHigh, { showHidden: true }),
						capexBit('12L cylinders', result.capex.cylinders12L, { showHidden: true }),
						capexBit('60L cylinders', result.capex.cylinders60L, { showHidden: true }),
						capexBit('Refrigerant identifiers', result.capex.identifiers, { showHidden: true }),
						capexBit('Ton tanks', result.capex.tonTanks, { showHidden: true })
					].filter(Boolean),
					tooltip: 'Machines, accessories, identifiers, cylinders, and tanks. TMS is a separate bar.'
				},
				{
					id: 'capex-tracking',
					name: 'Tracking & monitoring system',
					parts: [capexBit('Tracking & monitoring system', result.capex.tracking)].filter(Boolean),
					tooltip: 'Manual TMS input from the recovery capital costs block.'
				},
				{
					id: 'capex-facility',
					name:
						result.inputs.pathway === PATHWAY_RECLAMATION
							? 'Reclamation facility'
							: 'Destruction facility',
					hidden: result.capex.facility.hidden,
					parts: [
						capexBit(
							result.inputs.pathway === PATHWAY_RECLAMATION
								? 'Reclamation facility'
								: 'Destruction facility',
							result.capex.facility
						),
						capexBit('Reclamation operators (training)', result.capex.operators),
						capexBit('Gas chromatography lab', result.capex.gcLab)
					].filter(Boolean),
					tooltip:
						'End-use plant. Plasma Arc + Retrofit and Reclamation + Retrofit show as NA. Operators and GC apply to reclamation only.'
				},
				{
					id: 'capex-admin',
					name: 'Admin & licensing',
					hidden: result.capex.admin.hidden,
					parts: [capexBit('Admin & licensing', result.capex.admin)].filter(Boolean),
					tooltip: 'Admin & licensing on a new or retrofit end-use facility. Zero for Recycling and Existing.'
				}
			]
				.filter((row) => !row.hidden)
				.map((row) => ({
					...row,
					value: row.parts.reduce((sum, part) => sum + part.value, 0)
				}))
		: [];

	$: capexChart = layoutStack(capexCats);

	$: selectedDetail = [...opexChart.bars, ...capexChart].find((row) => row.id === selectedAlt) || null;

	$: comparison = result ? comparePathways(result.inputs) : null;
	$: compareCols = [
		{ id: PATHWAY_DESTRUCTION, name: 'Destruction' },
		{ id: PATHWAY_RECLAMATION, name: 'Reclamation' },
		{ id: PATHWAY_RECYCLING, name: 'Recycling' }
	].filter((col) => comparison?.[col.id]);
	$: compareMetrics = [
		{ id: 'opex', label: 'Total net operational costs', unit: 'USD / kg', key: 'netOpex' },
		{ id: 'capex', label: 'Total capital costs', unit: 'USD / kg', key: 'capexPerKg' }
	].map((metric) => ({
		...metric,
		scale: Math.max(
			0.0001,
			...compareCols.map((col) => {
				const row = comparison?.[col.id];
				if (!row) return 0;
				const amount =
					metric.key === 'capexPerKg'
						? result.inputs.annualKg
							? row.capex / result.inputs.annualKg
							: 0
						: row[metric.key];
				return Math.abs(amount || 0);
			})
		)
	}));
	$: compareAssumedNew = compareCols.some((col) => comparison?.[col.id]?.facilityAssumedNew);

	$: sectorBlurb = residential
		? 'Residential recovery can include on-site pump-down when it applies, then recovery at a central facility. The model no longer assumes every unit is pumped down first.'
		: 'Mainly on-site recovery from decommissioned units; refilling is covered under the Recycling pathway.';
</script>

<svelte:head>
	<title>Lifecycle Refrigerant Management Explorer — Cascade Climate (unlisted)</title>
	<meta
		name="description"
		content="Unlisted Lifecycle Refrigerant Management Explorer. Version Oct 16 5pm ET."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="lrm-explorer" class:workspace-on={ready} on:mouseover={placeTip} on:focusin={placeTip}>
	<div class="wrap">
		<div class="chrome">
		<header class="site" class:compact={Boolean(sector)}>
			<div class="site-copy">
				<div class="eyebrow">V. Oct 16 5pm ET</div>
				<h1>
					<img
						class="brand"
						src={cascadeLogo}
						alt="Cascade Climate"
						width="190"
						height="69"
					/>
					<span class="title-text">
						<span class="title-lead">Lifecycle Refrigerant Management</span>
						<span class="title-rest">Explorer</span>
					</span>
				</h1>
			</div>
		</header>

		<div
			class="about"
			class:about-open={aboutOpen}
			on:mouseenter={(e) => openAbout(e.currentTarget)}
			on:mouseleave={() => (aboutOpen = false)}
		>
			<p
				class="about-label"
				tabindex={ready ? 0 : undefined}
				on:focus={(e) => openAbout(e.currentTarget.closest('.about'))}
				on:blur={() => (aboutOpen = false)}
			>
				About the Explorer
			</p>
			<a
				class="manual-link"
				href="/our-work/refrigerant-management-and-transition/explorer/user-manual"
				target="_blank"
				rel="noopener noreferrer"
				>User Manual</a
			>
			<div class="about-body">
				<p>
					The LRM Cost Explorer is an interactive tool that estimates the capital and operational
					costs of LRM activities from a set of user inputs. Results are intended to provide a
					high-level estimate to support prioritization and planning of LRM activities. The
					Explorer is not meant to serve as a comprehensive financial model.
				</p>
			</div>
		</div>

		<section class="panel branch" class:settled={Boolean(sector)} aria-labelledby="branch-heading">
			<h2 id="branch-heading">1. Choose a sector</h2>
			<div class="choice-grid two">
				<button
					type="button"
					class="choice"
					class:selected={sector === SECTOR_RESIDENTIAL}
					on:click={() => chooseSector(SECTOR_RESIDENTIAL)}
				>
					<span class="choice-title">Residential AC</span>
				</button>
				<button
					type="button"
					class="choice"
					class:selected={sector === SECTOR_COMMERCIAL}
					on:click={() => chooseSector(SECTOR_COMMERCIAL)}
				>
					<span class="choice-title">Commercial HVAC</span>
				</button>
			</div>
			{#if sector}
				<p class="assumption">{sectorBlurb}</p>
			{/if}
		</section>

		{#if sector}
			<section class="panel branch" id="enduse-panel" class:settled={Boolean(pathway)} aria-labelledby="pathway-heading">
				<h2 id="pathway-heading">2. Choose the end-use of recovered refrigerant</h2>
				<div class="choice-grid" class:three={!residential} class:two={residential}>
					{#each pathways as p}
						<button
							type="button"
							class="choice"
							class:selected={pathway === p.id}
							data-tip={p.body}
							on:click={() => choosePathway(p.id)}
						>
							<span class="choice-title">{p.title}</span>
						</button>
					{/each}
				</div>
			</section>
		{/if}
		</div>

		{#if ready && live}
			<div class="layout" id="workspace" class:has-results={Boolean(result)} class:awaiting={!result}>
				<section class="panel controls" aria-labelledby="build-heading">
					<h2 id="build-heading">Inputs</h2>
					<p class="inputs-tip">Enter the inputs below. For guidance, hover over an input.</p>
					<p class="panel-intro">
						Grouped by the value chain. Amber-style fields are inputs. Bold figures are calculated.
					</p>

					<div class="inputs-scroll">
					<div class="field-group">
						<div class="group-label">Recovery</div>

						<div class="fields">
						<div class="field">
							<label
								data-tip="Default: Residential AC = 1 kg, Commercial HVAC = 100 kg"
								for="chargeSizeKg">Average equipment charge size per unit (kg)</label
							>
							<input
								id="chargeSizeKg"
								type="number"
								min="0"
								step="0.01"
								bind:value={chargeSizeKg}
							/>
							{#if chargeCappedNote}
								<p class="field-note warn">
									Residential AC charge size cannot exceed {RESIDENTIAL_CHARGE_CAP_KG} kg. Please
									update this field.
								</p>
							{/if}
						</div>

						<div class="field">
							<label
								data-tip="Default: Residential AC = 50%, Commercial HVAC = 80%"
								for="recoverablePct">Estimated % of recoverable refrigerant per unit (%)</label
							>
							<input id="recoverablePct" type="number" min="0" max="100" step="1" bind:value={recoverablePct} />
						</div>
						<div class="field">
							<label
								data-tip={commercial
									? 'For Commercial HVAC, default is High Capacity'
									: undefined}
								for="machineType">Recovery machine type</label
							>
							{#if commercial}
								<select id="machineType" disabled>
									<option value={MACHINE_HIGH}>High Capacity</option>
								</select>
							{:else}
								<select id="machineType" bind:value={machineType}>
									<option value={MACHINE_BASIC}>Basic</option>
									<option value={MACHINE_HIGH}>High Capacity</option>
								</select>
							{/if}
						</div>
						<div class="field">
							<label
								data-tip="For Residential AC, consider the time needed for AC pump down as well (if applicable). For Commercial HVAC, consider the time needed from set up to completion."
								for="recoveryHoursPerUnit">Recovery time needed per unit (hours)</label
							>
							<input
								id="recoveryHoursPerUnit"
								type="number"
								min="0"
								max={recoveryHoursMax}
								step="0.01"
								bind:value={recoveryHoursPerUnit}
							/>
							{#if recoveryHoursCappedNote}
								<p class="field-note warn">
									Recovery time cannot exceed {recoveryHoursMax} hours per unit for this sector and
									machine. Please update this field.
								</p>
							{/if}
						</div>
						<div class="field">
							<label
								data-tip="Default: Residential AC = USD 10/hour, Commercial HVAC = USD 20/hour (assuming a two-man team)"
								for="labourPerHour">Hourly labor rate (USD/hr)</label
							>
							<input id="labourPerHour" type="number" min="0" step="0.01" bind:value={labourPerHour} />
						</div>
						<div class="field">
							<label
								data-tip="Default: Residential AC = 40, Commercial HVAC = 1"
								for="unitsPerDay">Average number of units recovered per day</label
							>
							<input id="unitsPerDay" type="number" min="0" step="1" bind:value={unitsPerDay} />
						</div>
						<div class="field">
							<label data-tip="Default: 8.5 km/L" for="fuelEfficiencyKmPerL"
								>Fuel efficiency of vehicle used (km/L)</label
							>
							<input
								id="fuelEfficiencyKmPerL"
								type="number"
								min="0"
								step="0.1"
								bind:value={fuelEfficiencyKmPerL}
							/>
						</div>
						<div class="field">
							<label data-tip="Default: USD 1.50/L" for="fuelPricePerL">Fuel price (USD/L)</label>
							<input id="fuelPricePerL" type="number" min="0" step="0.01" bind:value={fuelPricePerL} />
						</div>
						<div class="field">
							<label
								data-tip="Default: Residential AC = 1 team for every 10 units recovered per day, Commercial HVAC = 1 team for every unit recovered per day"
								for="teams">Number of recovery teams mobilized per day</label
							>
							<input id="teams" type="number" min="0" step="1" bind:value={teams} />
						</div>
						<div class="field">
							<label
								data-tip="Covers transportation to recovery site until central facility. Default = 100 km per team"
								for="travelKmPerTeam">Average distance travelled per team (km/day)</label
							>
							<input id="travelKmPerTeam" type="number" min="0" step="1" bind:value={travelKmPerTeam} />
						</div>
						<div class="field">
							<label
								data-tip="Default: Residential AC = 200, Commercial HVAC = 75"
								for="daysPerYear">Estimated number of recovery days per year</label
							>
							<input id="daysPerYear" type="number" min="0" step="1" bind:value={daysPerYear} />
						</div>
						</div>
						<div class="computed computed-sum">
							<div>
								<span class="k">Labor cost for traveling time per day (USD/day)</span>
								<span class="v">{formatUsd(live.inputs.travelLaborPerDay)}</span>
							</div>
						</div>
						<div class="snapshot">
							<div class="snapshot-label">Recovery snapshot</div>
							<div>
								<span class="k">Total labor cost per day (USD/day)</span>
								<span class="v">{formatUsd(live.inputs.labourCostPerDay)}</span>
							</div>
							<div>
								<span class="k">Total transport cost per day (USD/day)</span>
								<span class="v">{formatUsd(live.inputs.recoveryTransportPerDay)}</span>
							</div>
							<div>
								<span class="k">Total refrigerant recovered per day (kg/day)</span>
								<span class="v">{formatKg(live.inputs.kgPerDay, 2)}</span>
							</div>
						</div>
					</div>

					<div class="field-group">
						<div class="group-label">Central facility</div>
						<div class="fields">
						<div class="field">
							<label data-tip="Default: USD 1,000/month" for="warehousePerMonth"
								>Central facility warehouse storage (USD per month)</label
							>
							<input id="warehousePerMonth" type="number" min="0" step="1" bind:value={warehousePerMonth} />
						</div>
						<div class="field">
							<label
								data-tip="Cost to establish system for chain of custody tracking and monitoring"
								for="tmsCost">Tracking & monitoring system (USD)</label
							>
							<input id="tmsCost" type="number" min="0" step="1" bind:value={tmsCost} />
						</div>
						<div class="field">
							<label
								data-tip="Default determined by annual volume. To change, select 'override.'"
								for="costScenarioMode">Cost scenario</label
							>
							<select id="costScenarioMode" bind:value={costScenarioMode}>
								<option value="auto">Auto from annual volume ({autoScenario})</option>
								<option value="manual">Override…</option>
							</select>
						</div>
						{#if costScenarioMode === 'manual'}
							<div class="field">
								<label
									data-tip={'High represents <10,000 kg/year, Medium represents 10,000 - 50,000 kg per year, Low represents > 50,000 kg per year'}
									for="costScenarioManual">Override cost scenario</label
								>
								<select id="costScenarioManual" bind:value={costScenarioManual}>
									<option>Low</option>
									<option>Medium</option>
									<option>High</option>
								</select>
							</div>
						{/if}
						</div>
					</div>

					<div class="field-group" class:option-idle={pathway !== PATHWAY_RECYCLING}>
						<div class="group-label">Recycling</div>
						{#if vis.recyclingOffered && pathway === PATHWAY_RECYCLING}
							<div class="fields">
							<div class="field">
								<label for="virginPrice"
									>(For Recycling only) Price of virgin refrigerant avoided (USD/kg)</label
								>
								<input id="virginPrice" type="number" min="0" step="0.01" bind:value={virginPrice} />
							</div>
							</div>
						{:else if !vis.recyclingOffered}
							<p class="field-hint">Recycling is not offered for Residential AC.</p>
						{:else}
							<p class="field-hint">Select Recycling above to edit these inputs.</p>
						{/if}
					</div>

					<div class="field-group" class:option-idle={pathway !== PATHWAY_RECLAMATION}>
						<div class="group-label">Reclamation</div>
						{#if pathway === PATHWAY_RECLAMATION}
							<div class="fields three">
							<div class="field">
								<label for="facilityStatus">Facility status</label>
								<select id="facilityStatus" bind:value={facilityStatus}>
									<option>Existing</option>
									<option>New</option>
								</select>
							</div>
							<div class="field">
								<label
									data-tip={'In-country: Refrigerant is processed in-country\nExported: Refrigerant is exported overseas for processing'}
									for="location">Location</label>
								<select id="location" bind:value={location}>
									<option>In-country</option>
									<option>Exported</option>
								</select>
							</div>
							<div class="field">
								<label for="salePrice"
									>Blended sale price of reclaimed refrigerants (incl. profit margin) (USD/kg)</label
								>
								<input id="salePrice" type="number" min="0" step="0.01" bind:value={salePrice} />
							</div>
							</div>
						{:else}
							<p class="field-hint">Select Reclamation above to edit these inputs.</p>
						{/if}
					</div>

					<div class="field-group" class:option-idle={pathway !== PATHWAY_DESTRUCTION}>
						<div class="group-label">Destruction</div>
						{#if pathway === PATHWAY_DESTRUCTION}
							<div class="fields three">
							<div class="field">
								<label for="destructionTech">Destruction technology</label>
								<select id="destructionTech" bind:value={destructionTech}>
									<option>Rotary</option>
									<option>Cement</option>
									<option>Plasma Arc</option>
								</select>
							</div>
							<div class="field">
								<label
									data-tip="Select ‘New facility’ if a brand new facility will be constructed, ‘Retrofit’ if an existing facility will be retrofitted for refrigerant processing, and ‘Existing’ if refrigerant will be sent to an existing facility for processing, without the need for additional retrofitting."
									for="facilityStatusDest">Facility status</label
								>
								<select id="facilityStatusDest" bind:value={facilityStatus}>
									<option>Existing</option>
									{#if destructionTech !== 'Plasma Arc'}
										<option>Retrofit</option>
									{/if}
									<option>New</option>
								</select>
							</div>
							<div class="field">
								<label
									data-tip={'In-country: Refrigerant is processed in-country\nExported: Refrigerant is exported overseas for processing'}
									for="locationDest">Location</label>
								<select id="locationDest" bind:value={location}>
									<option>In-country</option>
									<option>Exported</option>
								</select>
							</div>
							</div>
						{:else}
							<p class="field-hint">Select Destruction above to edit these inputs.</p>
						{/if}
					</div>

					<div class="field-group">
						<div class="group-label">Refrigerant mix</div>
						<div class="fields mix">
						<div class="field">
							<label data-tip="GWP-100 of R-32 (kgCO2e/kg) = 771 (Reference: IPCC AR6)" for="mixR32"
								>R-32 share of recovered volume (%)</label
							>
							<input id="mixR32" type="number" min="0" max="100" step="1" bind:value={mixR32} />
						</div>
						<div class="field">
							<label
								data-tip="GWP-100 of R-410A (kgCO2e/kg) = 2256 (Reference: IPCC AR6)"
								for="mixR410a">R-410A share of recovered volume (%)</label
							>
							<input id="mixR410a" type="number" min="0" max="100" step="1" bind:value={mixR410a} />
						</div>
						<div class="field">
							<label data-tip="GWP-100 of R-22 (kgCO2e/kg) = 1960 (Reference: IPCC AR6)" for="mixR22"
								>R-22 share of recovered volume (%)</label
							>
							<input id="mixR22" type="number" min="0" max="100" step="1" bind:value={mixR22} />
						</div>
						<div class="computed" class:bad={!mixOk}>
							<div>
								<span class="k">Total refrigerant mix (%)</span>
								<span class="v">{formatKg(mixSum, 0)}%</span>
							</div>
						</div>
						</div>
						{#if !mixOk}
							<p class="field-note warn">
								Total refrigerant mix must always equal 100%. Adjust R-32, R-410A, and R-22 until the
								total is 100%.
							</p>
						{/if}
					</div>
					</div>

					<div class="run-bar">
						{#if stale}
							<p class="run-note">Inputs have changed. Calculate again to refresh outputs.</p>
						{:else if !result}
							<p class="run-note">When you're ready, calculate the costs.</p>
						{:else}
							<p class="run-note">Outputs match the current inputs.</p>
						{/if}
						<button
							type="button"
							class="run"
							disabled={!mixOk}
							on:click={produceOutputs}
						>
							{#if !result}
								Calculate costs
							{:else if stale}
								Update results
							{:else}
								Recalculate
							{/if}
						</button>
					</div>
				</section>

				{#if result}
				<section class="panel results" class:has-open={Object.values(openCats).some(Boolean)} class:stale aria-labelledby="results-heading">
					<div class="results-head">
						<div class="results-head-copy">
							<div class="model-tag">Updated Oct 16 5pm ET</div>
							<h2 id="results-heading">Outputs</h2>
							<p class="summary">
								{result.inputs.sector === SECTOR_RESIDENTIAL ? 'Residential AC' : 'Commercial HVAC'}
								· {result.inputs.pathway}
								{#if result.inputs.pathway === PATHWAY_RECYCLING}
									· cleaning + refill (RY)
								{/if}
								{#if result.inputs.pathway === PATHWAY_DESTRUCTION}
									· {result.inputs.destructionTech}
								{/if}
							</p>
						</div>
						<div class="results-year">
							<span class="results-year-label">Total Net Operational Costs per year (USD)</span>
							<span class="results-year-value">{formatUsd(result.opex.netPerYear)}</span>
						</div>
					</div>

					<div class="metrics" class:four={result.inputs.pathway === PATHWAY_DESTRUCTION}>
						<div class="metric">
							<div class="label">
								Total refrigerant recovered
								<span class="label-note">per year</span>
							</div>
							<div class="value">{formatKg(result.inputs.annualKg, 0)}</div>
							<span class="unit">kg / year</span>
						</div>
						{#if result.inputs.pathway === PATHWAY_DESTRUCTION}
							<div class="metric">
								<div class="label">Operational Costs</div>
								<div class="value">{formatUsd(result.opex.net)}</div>
								<span class="unit">USD / kg</span>
							</div>
							<div class="metric" data-tip={CARBON_TIP}>
								<div class="label">Operational Costs</div>
								<div class="value">{formatUsd(result.climate.costPerTco2e)}</div>
								<span class="unit">USD / tCO2e</span>
							</div>
						{:else if result.inputs.pathway === PATHWAY_RECLAMATION}
							<div class="metric">
								<div class="label">
									Operational Costs
									<span class="label-note">net of reclaimed refrigerant sales</span>
								</div>
								<div class="value">{formatUsd(result.opex.net)}</div>
								<span class="unit">USD / kg</span>
							</div>
						{:else}
							<div class="metric">
								<div class="label">
									Operational Costs
									<span class="label-note">net of virgin refrigerant avoided</span>
								</div>
								<div class="value">{formatUsd(result.opex.net)}</div>
								<span class="unit">USD / kg</span>
							</div>
						{/if}
						<div class="metric">
							<div class="label">Capital Costs</div>
							<div class="value">{formatUsd(result.capex.total)}</div>
							<span class="unit">USD · one-off</span>
						</div>
					</div>

					<div class="view-tabs" role="tablist" aria-label="Output charts">
						<button
							type="button"
							role="tab"
							class="view-tab"
							class:active={chartView === 'opex2'}
							aria-selected={chartView === 'opex2'}
							on:click={() => {
								chartView = 'opex2';
								selectedAlt = '';
							}}
						>
							Operational Costs
						</button>
						<button
							type="button"
							role="tab"
							class="view-tab"
							class:active={chartView === 'capex'}
							aria-selected={chartView === 'capex'}
							on:click={() => {
								chartView = 'capex';
								selectedAlt = '';
							}}
						>
							Capital Costs
						</button>
					</div>
					<p class="inputs-tip">For a detailed breakdown, click any cost.</p>

					{#if chartView === 'opex2'}
						<div class="vchart">
							<div class="vplot vplot-fall" aria-label="Operational costs">
								{#each opexChart.bars as bar, i}
									<div
										class="wf-col"
										style="left: {(i / opexChart.bars.length) * 100}%; width: {100 / opexChart.bars.length}%"
									>
										<button
											type="button"
											class="vseg"
											class:drop={bar.drop}
											class:tone-a={!bar.drop && bar.tone === 0}
											class:tone-b={!bar.drop && bar.tone === 1}
											class:tone-c={!bar.drop && bar.tone === 2}
											class:tone-d={!bar.drop && bar.tone === 3}
											class:selected={selectedAlt === bar.id}
											style="bottom: {bar.bottomPct}%; height: {bar.heightPct}%"
											title="{bar.name}: {formatUsd(bar.value)}/kg"
											aria-pressed={selectedAlt === bar.id}
											on:click={() => selectAlt(bar.id)}
										></button>
									</div>
									{#if i < opexChart.bars.length - 1}
										<span
											class="wf-link"
											style="left: {((i + 0.78) / opexChart.bars.length) * 100}%; width: {(0.44 / opexChart.bars.length) * 100}%; bottom: {bar.toPct}%"
										></span>
									{/if}
								{/each}
							</div>
							<ul class="vlegend">
								{#each [...opexChart.bars].reverse() as bar}
									<li>
										<button
											type="button"
											class="vlegend-btn"
											class:selected={selectedAlt === bar.id}
											class:drop={bar.drop}
											class:tone-a={!bar.drop && bar.tone === 0}
											class:tone-b={!bar.drop && bar.tone === 1}
											class:tone-c={!bar.drop && bar.tone === 2}
											class:tone-d={!bar.drop && bar.tone === 3}
											aria-pressed={selectedAlt === bar.id}
											on:click={() => selectAlt(bar.id)}
										>
											<span
												class="swatch"
												class:drop={bar.drop}
												class:tone-a={!bar.drop && bar.tone === 0}
												class:tone-b={!bar.drop && bar.tone === 1}
												class:tone-c={!bar.drop && bar.tone === 2}
												class:tone-d={!bar.drop && bar.tone === 3}
											></span>
											<span class="stack-name">{bar.name}</span>
											<span class="stack-val">{formatUsd(bar.value)}/kg</span>
										</button>
									</li>
								{/each}
							</ul>
						</div>
						<p class="vnet">Net operational costs {formatUsd(opexChart.net)}/kg</p>
					{:else}
						<div class="vchart">
							<div class="vplot" aria-label="Capital costs">
								{#each capexChart as bar}
									<button
										type="button"
										class="vseg"
										class:tone-a={bar.tone === 0}
										class:tone-b={bar.tone === 1}
										class:tone-c={bar.tone === 2}
										class:tone-d={bar.tone === 3}
										class:selected={selectedAlt === bar.id}
										style="bottom: {bar.bottomPct}%; height: {bar.heightPct}%"
										title="{bar.name}: {formatUsd(bar.value)}"
										aria-pressed={selectedAlt === bar.id}
										on:click={() => selectAlt(bar.id)}
									></button>
								{/each}
							</div>
							<ul class="vlegend">
								{#each [...capexChart].reverse() as bar}
									<li>
										<button
											type="button"
											class="vlegend-btn"
											class:selected={selectedAlt === bar.id}
											class:tone-a={bar.tone === 0}
											class:tone-b={bar.tone === 1}
											class:tone-c={bar.tone === 2}
											class:tone-d={bar.tone === 3}
											aria-pressed={selectedAlt === bar.id}
											on:click={() => selectAlt(bar.id)}
										>
											<span
												class="swatch"
												class:tone-a={bar.tone === 0}
												class:tone-b={bar.tone === 1}
												class:tone-c={bar.tone === 2}
												class:tone-d={bar.tone === 3}
											></span>
											<span class="stack-name">{bar.name}</span>
											<span class="stack-val">{formatUsd(bar.value)}</span>
										</button>
									</li>
								{/each}
							</ul>
						</div>
						<p class="vnet">Total capital costs {formatUsd(result.capex.total)}</p>
					{/if}

					{#if selectedDetail}
						<div
							class="alt-detail"
							class:drop={selectedDetail.drop}
							class:tone-a={!selectedDetail.drop && selectedDetail.tone === 0}
							class:tone-b={!selectedDetail.drop && selectedDetail.tone === 1}
							class:tone-c={!selectedDetail.drop && selectedDetail.tone === 2}
							class:tone-d={!selectedDetail.drop && selectedDetail.tone === 3}
						>
							<div class="alt-detail-title">{selectedDetail.name}</div>
							<ul class="cat-parts">
								{#each selectedDetail.parts as part}
									<li>
										<span>{part.name}{#if part.note} · {part.note}{/if}</span>
										<span>{formatUsd(part.value)}{chartView === 'capex' ? '' : '/kg'}</span>
									</li>
								{/each}
							</ul>
							{#if selectedDetail.tooltip}
								<p class="cat-tip">{selectedDetail.tooltip}</p>
							{/if}
						</div>
					{/if}

					{#if comparison}
						<div class="compare">
							<h3>Pathway comparison</h3>
							<p class="opex-thesis">
								Same recovery setup, compared across end-uses. Recycling is commercial HVAC only.
							</p>
							{#if compareAssumedNew}
								<p class="opex-thesis compare-caveat">
									Retrofit is not available for that pathway, so the comparison is costed as a new
									facility.
								</p>
							{/if}
							{#each compareMetrics as metric}
								<div class="compare-metric">
									<div class="compare-metric-label">
										{metric.label}
										<span class="compare-unit">{metric.unit}</span>
									</div>
									{#each compareCols as col, i}
										{@const amount =
											metric.key === 'capexPerKg'
												? result.inputs.annualKg
													? comparison[col.id].capex / result.inputs.annualKg
													: 0
												: comparison[col.id][metric.key]}
										<div
											class="compare-row"
											class:current={result.inputs.pathway === col.id}
											class:negative={amount < 0}
											class:tone-a={i % 3 === 0}
											class:tone-b={i % 3 === 1}
											class:tone-c={i % 3 === 2}
										>
											<span class="name">
												{col.name}
												{#if result.inputs.pathway === col.id}
													<span class="current-mark">Selected</span>
												{/if}
												{#if comparison[col.id].facilityNa && metric.id === 'capex'}
													<span class="na-mark">Facility N/A</span>
												{:else if comparison[col.id].facilityAssumedNew && metric.id === 'capex'}
													<span class="na-mark">Costed as new</span>
												{/if}
											</span>
											<div
												class="bar-track"
												title="{col.name}: {formatUsd(amount)}"
												aria-label="{col.name} {metric.label} {formatUsd(amount)}"
											>
												<div
													class="bar-fill"
													style="width: {opexBar(Math.abs(amount), metric.scale)}%"
												></div>
											</div>
											<span class="on-bar">{formatUsd(amount)}</span>
										</div>
									{/each}
								</div>
							{/each}
						</div>
					{/if}
				</section>
				{/if}
			</div>
		{/if}

		<p class="page-foot">
			V. Oct 16 5pm ET
		</p>
	</div>
</div>

<style>
	.lrm-explorer {
		--bg: #f4f3ed;
		--teal: #023c40;
		--teal-hover: #012f32;
		--teal-muted: rgba(2, 60, 64, 0.55);
		--selected-bg: rgba(2, 60, 64, 0.08);
		--header: #000000;
		--ink: #000000;
		--ink-soft: rgba(0, 0, 0, 0.72);
		--muted: rgba(2, 60, 64, 0.62);
		--line: rgba(2, 60, 64, 0.18);
		--panel: #fafafa;
		--panel-solid: #fafafa;
		--card: #fafafa;
		--on-teal: #fafafa;
		--accent: #023c40;
		--accent-deep: #023c40;
		--chart: #023c40;
		--chart-secondary: rgba(2, 60, 64, 0.35);
		--warn: #023c40;
		--warn-bg: rgba(2, 60, 64, 0.08);
		--dummy: #023c40;
		--dummy-bg: rgba(2, 60, 64, 0.08);
		--radius: 8px;
		--font: 'Inter', sans-serif;

		min-height: 100vh;
		color: var(--ink);
		font-family: var(--font);
		line-height: 1.5;
		background: var(--bg);
		position: relative;
		-webkit-font-smoothing: antialiased;
	}

	.lrm-explorer button,
	.lrm-explorer input,
	.lrm-explorer select,
	.lrm-explorer textarea {
		font-family: var(--font);
	}

	.wrap {
		width: min(1160px, calc(100% - 2.5rem));
		margin: 0 auto;
		padding: 2rem 0 3.5rem;
		position: relative;
		z-index: 1;
	}

	.site {
		margin-bottom: 1.75rem;
		color: var(--header);
	}

	.eyebrow {
		display: inline-block;
		font-size: 0.72rem;
		letter-spacing: 0.02em;
		text-transform: none;
		color: var(--accent);
		font-weight: 600;
		margin-bottom: 0.55rem;
	}

	.site h1 {
		font-family: var(--font);
		font-weight: 600;
		font-size: clamp(1.45rem, 2.8vw, 2rem);
		line-height: 1.2;
		margin: 0 0 0.7rem;
		letter-spacing: -0.025em;
		color: var(--header);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.65rem;
	}

	.site h1 .title-text {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: baseline;
		gap: 0.3em;
		max-width: none;
		line-height: 1.15;
		white-space: nowrap;
	}

	.site h1 .title-lead,
	.site h1 .title-rest {
		white-space: nowrap;
	}

	.site.compact h1 .title-text {
		flex-direction: column;
		gap: 0;
	}

	.brand {
		width: auto;
		height: 2.6rem;
		padding: 0;
		background: none;
		border-radius: 0;
		object-fit: contain;
		flex-shrink: 0;
	}

	.about {
		margin: 0 0 0.85rem;
		max-width: 42rem;
	}

	.about-label {
		margin: 0 0 0.2rem;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: var(--teal);
		width: fit-content;
	}

	.manual-link {
		display: inline-block;
		margin: 0 0 0.45rem;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--teal);
		text-decoration: none;
	}

	.manual-link:hover {
		opacity: 0.88;
	}

	.about-body {
		margin: 0;
	}

	.about-body p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.site.compact {
		margin-bottom: 0.75rem;
	}

	.site.compact h1 {
		font-size: 0.98rem;
		max-width: none;
		margin: 0;
		line-height: 1.25;
		gap: 0.45rem;
	}

	.site.compact h1 .title-text {
		max-width: none;
	}

	.site.compact .brand {
		width: auto;
		height: 2.6rem;
		padding: 0;
	}

	#enduse-panel,
	#workspace {
		scroll-margin-top: 0.75rem;
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(280px, 0.95fr) minmax(300px, 1.05fr);
		gap: 1.25rem;
		align-items: stretch;
		margin-top: 1.25rem;
		height: calc(100vh - 1.25rem);
		min-height: 28rem;
	}

	.layout > .panel {
		min-height: 0;
		overflow: auto;
	}

	.panel {
		background: var(--panel);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.2rem 1.3rem 1.35rem;
	}

	.branch {
		margin-bottom: 1.25rem;
	}

	.branch.settled {
		padding: 0.85rem 1.1rem 1rem;
		margin-bottom: 0.85rem;
	}

	.branch.settled h2 {
		font-size: 1.05rem;
		margin-bottom: 0.55rem;
	}

	.branch.settled .panel-intro,
	.branch.settled .choice-body,
	.branch.settled .assumption {
		display: none;
	}

	.branch.settled .choice {
		padding: 0.55rem 0.75rem;
	}

	.panel h2 {
		font-family: var(--font);
		font-size: 1.45rem;
		font-weight: 600;
		margin: 0 0 0.35rem;
		color: var(--header);
		line-height: 1.25;
	}

	.inputs-tip {
		color: var(--muted);
		font-size: 0.82rem;
		line-height: 1.4;
		margin: -0.05rem 0 0.85rem;
	}

	.panel-intro {
		color: var(--muted);
		font-size: 0.92rem;
		margin: 0 0 1.15rem;
		line-height: 1.45;
	}

	.choice-grid {
		display: grid;
		gap: 0.75rem;
	}

	.choice-grid.two {
		grid-template-columns: 1fr 1fr;
	}

	.choice-grid.three {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.choice {
		position: relative;
		text-align: left;
		cursor: pointer;
		color: var(--header);
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 0.9rem 1rem;
		font: inherit;
		transition:
			border-color 0.15s ease,
			background 0.15s ease;
	}

	.choice:hover {
		border-color: var(--teal-hover);
		background: var(--selected-bg);
	}

	.choice:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.choice.selected {
		border-color: var(--teal);
		background: var(--selected-bg);
		box-shadow: inset 3px 0 0 var(--teal);
	}

	.choice-kicker {
		display: block;
		font-size: 0.72rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--accent);
		font-weight: 600;
		margin-bottom: 0.3rem;
	}

	.choice-title {
		display: block;
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0;
	}

	.choice-body {
		display: block;
		font-size: 0.88rem;
		color: var(--ink-soft);
		line-height: 1.4;
	}

	.assumption {
		margin: 0.9rem 0 0;
		color: var(--ink-soft);
		font-size: 0.9rem;
	}

	.field-group + .field-group {
		margin-top: 1.15rem;
		padding-top: 1.15rem;
		border-top: 1px solid var(--line);
	}

	.fields {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.55rem 0.75rem;
	}

	.fields.three {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.fields.mix {
		grid-template-columns: 1fr 1fr 1fr minmax(6.5rem, 0.85fr);
		align-items: end;
	}

	.fields.mix .computed {
		margin: 0;
	}

	.fields .field {
		margin-bottom: 0;
	}

	.group-label {
		font-size: 1rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--header);
		font-weight: 700;
		margin-bottom: 0.85rem;
	}

	.field {
		margin-bottom: 0.85rem;
		overflow: visible;
	}

	label {
		display: block;
		font-size: 0.88rem;
		font-weight: 500;
		margin-bottom: 0.35rem;
		color: var(--header);
		position: relative;
	}

	label[data-tip] {
		cursor: help;
	}

	label[data-tip]:hover::after,
	label[data-tip]:focus-visible::after,
	.metric[data-tip]:hover::after,
	.metric[data-tip]:focus-visible::after,
	.choice[data-tip]:hover::after,
	.choice[data-tip]:focus-visible::after {
		content: attr(data-tip);
		position: fixed;
		left: var(--tip-x, 8px);
		top: var(--tip-y, 8px);
		bottom: auto;
		width: max-content;
		max-width: min(22rem, calc(100vw - 1rem));
		padding: 0.45rem 0.6rem;
		background: var(--teal);
		color: var(--on-teal);
		font-size: 0.75rem;
		font-weight: 400;
		line-height: 1.4;
		letter-spacing: 0;
		text-transform: none;
		border-radius: 6px;
		z-index: 80;
		pointer-events: none;
		box-shadow: 0 6px 18px rgba(2, 60, 64, 0.16);
		white-space: pre-line;
	}

	.field:focus-within label[data-tip]::after {
		content: none;
	}

	select,
	input[type='number'] {
		width: 100%;
		appearance: none;
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: 6px;
		padding: 0.62rem 0.75rem;
		min-height: 2.5rem;
		font: inherit;
		color: var(--ink);
		transition: border-color 0.15s ease, background 0.15s ease;
	}

	select {
		background:
			linear-gradient(45deg, transparent 50%, var(--ink) 50%) right 14px top 18px / 6px 6px
				no-repeat,
			linear-gradient(135deg, var(--ink) 50%, transparent 50%) right 9px top 18px / 6px 6px
				no-repeat,
			var(--card);
		padding-right: 2.2rem;
	}

	select:disabled,
	input[type='number']:disabled,
	input[type='number']:read-only {
		opacity: 1;
		color: var(--ink);
		background: var(--panel-solid);
		font-weight: 700;
		cursor: not-allowed;
	}

	select:hover,
	input[type='number']:hover {
		border-color: var(--teal-hover);
	}

	select:focus,
	input[type='number']:focus {
		outline: none;
		border-color: var(--teal);
		background-color: var(--selected-bg);
		box-shadow: 0 0 0 3px var(--selected-bg);
	}

	.field-hint,
	.field-note {
		margin: 0.4rem 0 0;
		font-size: 0.8rem;
		color: var(--muted);
		line-height: 1.4;
	}

	.field-note.warn {
		color: var(--ink);
		background: var(--warn-bg);
		padding: 0.45rem 0.6rem;
		border-left: 3px solid var(--teal);
	}

	.computed {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.55rem;
		margin: 0.35rem 0 1rem;
		padding: 0.7rem 0.8rem;
		background: var(--panel-solid);
		border: 1px solid var(--line);
		border-radius: var(--radius);
	}

	.computed.three {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.computed.computed-sum {
		grid-template-columns: 1fr;
	}

	.snapshot {
		display: grid;
		gap: 0.4rem;
		margin: 0 0 1rem;
		padding: 0.65rem 0.8rem;
		background: #f4efe4;
		border: 1px solid #c4a574;
		border-radius: var(--radius);
	}

	.snapshot-label {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8a5a12;
	}

	.snapshot > div:not(.snapshot-label) {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.75rem;
	}

	.snapshot .k {
		display: block;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0;
		text-transform: none;
		color: #8a5a12;
	}

	.snapshot .v {
		display: block;
		font-size: 0.95rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
		color: #6b3f0a;
		white-space: nowrap;
	}

	.computed.bad {
		border-color: var(--teal);
	}

	.computed .k {
		display: block;
		font-size: 0.72rem;
		color: var(--muted);
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.computed .v {
		display: block;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		color: var(--header);
	}

	.results {
		position: relative;
		max-height: none;
		overflow: auto;
	}

	.model-tag {
		display: inline-flex;
		align-items: center;
		font-size: 0.68rem;
		letter-spacing: 0.04em;
		font-weight: 600;
		color: var(--header);
		background: var(--card);
		border: 1px solid var(--line);
		padding: 0.22rem 0.5rem;
		border-radius: 4px;
		margin-bottom: 0.7rem;
	}

	.summary {
		font-size: 1.05rem;
		line-height: 1.45;
		margin: 0 0 1rem;
		color: var(--header);
	}

	.chain {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0.45rem;
		align-items: center;
		font-size: 0.78rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent);
		font-weight: 600;
		margin-bottom: 1.15rem;
	}

	.chain .arrow {
		color: var(--muted);
		letter-spacing: 0;
	}

	.metrics {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		margin-bottom: 1.15rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: visible;
		background: var(--panel-solid);
	}

	.metrics.three {
		grid-template-columns: 1fr;
	}

	.metrics .metric {
		padding: 0.85rem 1rem;
		background: transparent;
		border: 0;
		border-radius: 0;
		position: relative;
	}

	.metric[data-tip] {
		cursor: help;
	}

	.metrics.three .metric + .metric {
		border-top: 1px solid var(--line);
	}

	.option-idle {
		opacity: 0.55;
	}

	.open-q {
		margin: 0 0 0.5rem;
		padding: 0.5rem 0.7rem;
		background: var(--warn-bg);
		border-left: 2px solid var(--teal);
		color: var(--ink);
		font-size: 0.75rem;
		line-height: 1.4;
		border-radius: 0 6px 6px 0;
	}

	.open-q strong {
		display: block;
		margin-bottom: 0.2rem;
	}

	.cat {
		margin-bottom: 0.55rem;
	}

	.cat-toggle {
		display: grid;
		grid-template-columns: minmax(7.5rem, 0.9fr) minmax(6rem, 1.4fr) auto;
		gap: 0.45rem;
		align-items: center;
		width: 100%;
		padding: 0.15rem 0;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
		border-radius: 4px;
	}

	.cat-toggle:hover .name {
		color: var(--accent);
	}

	.cat-toggle:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.cat-toggle .name {
		font-size: 0.82rem;
		line-height: 1.3;
	}

	.bar-track {
		position: relative;
		height: 1.5rem;
		background: rgba(2, 60, 64, 0.08);
		border-radius: 4px;
		overflow: hidden;
	}

	.bar-fill {
		position: relative;
		height: 100%;
		min-width: 0;
		background: var(--chart);
		border-radius: 4px;
	}

	.bar-fill.mock-fill {
		min-width: 2.4rem;
		background: repeating-linear-gradient(
			-45deg,
			rgba(2, 60, 64, 0.18),
			rgba(2, 60, 64, 0.18) 6px,
			rgba(2, 60, 64, 0.06) 6px,
			rgba(2, 60, 64, 0.06) 12px
		);
		border: 1px dashed var(--teal-muted);
	}

	.on-bar {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		min-width: 4.6rem;
		font-size: 0.72rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		color: var(--header);
		white-space: nowrap;
	}

	.cat-parts {
		list-style: none;
		margin: 0.4rem 0 0;
		padding: 0.15rem 0 0 0.2rem;
		font-size: 0.78rem;
		color: var(--ink-soft);
	}

	.cat-parts li {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.2rem 0;
		border-top: 1px solid var(--line);
	}

	.cat-tip {
		margin: 0.25rem 0 0.55rem;
		font-size: 0.75rem;
		color: var(--muted);
		line-height: 1.4;
	}

	.metric {
		padding: 0.9rem 0.95rem;
		background: var(--panel-solid);
		border: 1px solid var(--line);
		border-radius: var(--radius);
	}

	.metric.wide {
		grid-column: 1 / -1;
	}

	.metric .label {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 2.4rem;
		font-size: 0.92rem;
		font-weight: 700;
		letter-spacing: 0;
		text-transform: none;
		color: var(--header);
		line-height: 1.2;
		margin-bottom: 0.28rem;
	}

	.metric .label-note {
		display: block;
		margin-top: 0.12rem;
		font-size: 0.72rem;
		font-weight: 600;
		line-height: 1.25;
		color: var(--ink-soft);
	}

	.metric .value {
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: -0.03em;
		font-variant-numeric: tabular-nums;
		color: var(--header);
		line-height: 1.2;
	}

	.metric .unit {
		display: block;
		font-size: 0.75rem;
		color: var(--muted);
		margin-top: 0.15rem;
	}

	.breakdown h3 {
		font-size: 0.78rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 600;
		margin: 0 0 0.75rem;
	}

	.opex-thesis {
		margin: -0.35rem 0 0.75rem;
		font-size: 0.82rem;
		line-height: 1.45;
		color: var(--ink-soft);
	}

	.view-tabs {
		display: flex;
		width: 100%;
		flex: 0 0 auto;
		gap: 0.55rem;
		margin: 0.55rem 0 0.7rem;
	}

	.view-tab {
		appearance: none;
		flex: 1 1 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--card);
		color: var(--ink-soft);
		font: inherit;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0;
		line-height: 1.25;
		text-align: center;
		padding: 0.45rem 0.7rem;
		cursor: pointer;
	}

	.view-tab.active {
		background: var(--teal);
		color: var(--on-teal);
	}

	.view-tab:hover:not(.active) {
		background: var(--selected-bg);
		color: var(--header);
	}

	.vchart {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(6.5rem, 0.72fr);
		gap: 0.65rem;
		align-items: stretch;
	}

	.vchart .vlegend {
		order: -1;
	}

	.vplot {
		position: relative;
		height: 16rem;
	}

	.vseg {
		position: absolute;
		left: 18%;
		right: 18%;
		border: 0;
		padding: 0;
		background: var(--teal);
		cursor: pointer;
		box-shadow: inset 0 2px 0 var(--panel);
	}

	.vseg.drop {
		background: #e0b84a;
		box-shadow: inset 0 1px 0 var(--panel);
	}

	.vseg.tone-a {
		background: #023c40;
	}
	.vseg.tone-b {
		background: #2f6f4e;
	}
	.vseg.tone-c {
		background: #3d6e99;
	}
	.vseg.tone-d {
		background: #b85c38;
	}

	.vseg.selected {
		z-index: 3;
		box-shadow: 0 0 0 2px var(--panel), 0 0 0 5px var(--teal);
	}

	.wf-col {
		position: absolute;
		top: 0;
		bottom: 0;
	}

	.wf-col .vseg {
		left: 22%;
		right: 22%;
		box-shadow: none;
	}

	.wf-col .vseg.selected {
		z-index: 3;
		box-shadow: 0 0 0 2px var(--panel), 0 0 0 5px var(--teal);
	}

	.wf-link {
		position: absolute;
		height: 1px;
		transform: translateY(1px);
		background: rgba(2, 60, 64, 0.28);
		pointer-events: none;
		z-index: 1;
	}

	.vlegend {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.2rem;
	}

	.vlegend-btn {
		appearance: none;
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 0.35rem;
		align-items: center;
		text-align: left;
		border: 1px solid transparent;
		background: transparent;
		border-radius: 6px;
		padding: 0.28rem 0.35rem;
		font: inherit;
		color: var(--header);
		cursor: pointer;
	}

	.vlegend-btn:hover {
		border-color: var(--line);
		background: var(--selected-bg);
	}

	.vlegend-btn.selected {
		box-shadow: inset 3px 0 0 var(--teal);
	}

	.vlegend-btn.selected.tone-a {
		background: rgba(2, 60, 64, 0.08);
		border-color: rgba(2, 60, 64, 0.28);
		box-shadow: inset 3px 0 0 #023c40;
	}

	.vlegend-btn.selected.tone-b {
		background: rgba(47, 111, 78, 0.1);
		border-color: rgba(47, 111, 78, 0.28);
		box-shadow: inset 3px 0 0 #2f6f4e;
	}

	.vlegend-btn.selected.tone-c {
		background: rgba(61, 110, 153, 0.1);
		border-color: rgba(61, 110, 153, 0.3);
		box-shadow: inset 3px 0 0 #3d6e99;
	}

	.vlegend-btn.selected.tone-d {
		background: rgba(184, 92, 56, 0.1);
		border-color: rgba(184, 92, 56, 0.3);
		box-shadow: inset 3px 0 0 #b85c38;
	}

	.vlegend-btn.selected.drop {
		background: rgba(224, 184, 74, 0.22);
		border-color: rgba(176, 132, 32, 0.4);
		box-shadow: inset 3px 0 0 #e0b84a;
	}

	.vlegend-btn.selected .stack-name {
		font-weight: 600;
	}

	.vlegend .swatch {
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 2px;
		background: var(--teal);
	}

	.vlegend .swatch.drop {
		background: #e0b84a;
		box-shadow: none;
	}

	.vnet {
		margin: 0.45rem 0 0;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--header);
	}

	.waterfall {
		display: flex;
		flex-direction: column;
		gap: 0.28rem;
	}

	.wf-row {
		appearance: none;
		border: 1px solid transparent;
		background: transparent;
		display: grid;
		grid-template-columns: minmax(5.5rem, 0.85fr) minmax(4rem, 1.4fr) auto;
		gap: 0.4rem;
		align-items: center;
		width: 100%;
		padding: 0.2rem 0.25rem;
		border-radius: 6px;
		cursor: pointer;
		text-align: left;
		font: inherit;
		color: inherit;
	}

	.wf-row:hover,
	.wf-row.selected {
		background: var(--selected-bg);
		border-color: var(--line);
	}

	.wf-label {
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--header);
		line-height: 1.2;
	}

	.wf-track {
		position: relative;
		height: 1.15rem;
		background: rgba(2, 60, 64, 0.06);
		border-radius: 3px;
		overflow: hidden;
	}

	.wf-zero {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background: rgba(0, 0, 0, 0.28);
		transform: translateX(-50%);
		z-index: 1;
	}

	.wf-connector {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		border-left: 1px dashed rgba(2, 60, 64, 0.35);
		transform: translateX(-50%);
		z-index: 1;
	}

	.wf-bar {
		position: absolute;
		top: 2px;
		bottom: 2px;
		background: var(--chart);
		border-radius: 2px;
	}

	.wf-row.negative .wf-bar {
		background: rgba(2, 60, 64, 0.38);
	}

	.wf-amt {
		font-size: 0.7rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
		color: var(--header);
		justify-self: end;
	}

	.wf-net {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.35rem;
		padding: 0.35rem 0.25rem 0;
		border-top: 1px solid var(--line);
	}

	.wf-amt.net {
		color: var(--teal);
	}

	.stack-bar {
		display: flex;
		width: 100%;
		height: 2rem;
		border-radius: var(--radius);
		overflow: hidden;
		border: 1px solid var(--line);
		background: rgba(2, 60, 64, 0.06);
	}

	.stack-seg {
		appearance: none;
		border: 0;
		border-right: 1px solid rgba(250, 250, 250, 0.55);
		min-width: 0;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--on-teal);
		position: relative;
	}

	.stack-seg:last-child {
		border-right: 0;
	}

	.stack-seg.tone-a,
	.swatch.tone-a {
		background: #023c40;
	}
	.stack-seg.tone-b,
	.swatch.tone-b {
		background: #2f6f4e;
	}
	.stack-seg.tone-c,
	.swatch.tone-c {
		background: #3d6e99;
	}
	.stack-seg.tone-d,
	.swatch.tone-d {
		background: #b85c38;
	}

	.stack-seg.selected {
		outline: 2px solid #000;
		outline-offset: -2px;
		z-index: 1;
	}

	.stack-seg-label {
		font-size: 0.62rem;
		font-weight: 600;
		white-space: nowrap;
		pointer-events: none;
	}

	.stack-legend {
		list-style: none;
		margin: 0.55rem 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.stack-legend-btn {
		appearance: none;
		border: 1px solid transparent;
		background: transparent;
		width: 100%;
		display: grid;
		grid-template-columns: 0.7rem minmax(0, 1fr) auto;
		gap: 0.4rem;
		align-items: center;
		padding: 0.22rem 0.3rem;
		border-radius: 6px;
		cursor: pointer;
		font: inherit;
		color: inherit;
		text-align: left;
	}

	.stack-legend-btn:hover,
	.stack-legend-btn.selected {
		background: var(--selected-bg);
		border-color: var(--line);
	}

	.swatch {
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 2px;
		display: block;
	}

	.stack-name {
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--header);
	}

	.stack-val {
		font-size: 0.7rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		color: var(--ink-soft);
	}

	.alt-detail {
		margin-top: 0.55rem;
		padding: 0.45rem 0.5rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--card);
		box-shadow: inset 3px 0 0 var(--teal);
	}

	.alt-detail.tone-a {
		background: rgba(2, 60, 64, 0.06);
		border-color: rgba(2, 60, 64, 0.28);
		box-shadow: inset 3px 0 0 #023c40;
	}

	.alt-detail.tone-b {
		background: rgba(47, 111, 78, 0.07);
		border-color: rgba(47, 111, 78, 0.28);
		box-shadow: inset 3px 0 0 #2f6f4e;
	}

	.alt-detail.tone-c {
		background: rgba(61, 110, 153, 0.07);
		border-color: rgba(61, 110, 153, 0.3);
		box-shadow: inset 3px 0 0 #3d6e99;
	}

	.alt-detail.tone-d {
		background: rgba(184, 92, 56, 0.07);
		border-color: rgba(184, 92, 56, 0.3);
		box-shadow: inset 3px 0 0 #b85c38;
	}

	.alt-detail.drop {
		background: rgba(224, 184, 74, 0.16);
		border-color: rgba(176, 132, 32, 0.4);
		box-shadow: inset 3px 0 0 #e0b84a;
	}

	.alt-detail-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--header);
		margin-bottom: 0.15rem;
	}

	.alt-detail.tone-a .alt-detail-title {
		color: #023c40;
	}

	.alt-detail.tone-b .alt-detail-title {
		color: #2f6f4e;
	}

	.alt-detail.tone-c .alt-detail-title {
		color: #3d6e99;
	}

	.alt-detail.tone-d .alt-detail-title {
		color: #b85c38;
	}

	.alt-detail.drop .alt-detail-title {
		color: #8a6414;
	}

	.capex-breakdown {
		margin-top: 1.15rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
	}

	.subtotal {
		margin: 0.85rem 0 0;
		font-size: 0.82rem;
		color: var(--muted);
	}

	.compare {
		margin-top: 1.15rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
		flex: 0 0 auto;
	}

	.compare h3 {
		font-size: 0.78rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--muted);
		font-weight: 600;
		margin: 0 0 0.45rem;
	}

	.compare-caveat {
		margin-top: -0.15rem;
	}

	.compare-metric {
		margin-bottom: 0.75rem;
	}

	.compare-metric:last-child {
		margin-bottom: 0;
	}

	.compare-metric-label {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 0.55rem;
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--header);
		margin-bottom: 0.28rem;
	}

	.compare-unit {
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.compare-row {
		display: grid;
		grid-template-columns: minmax(7.5rem, 0.9fr) minmax(6rem, 1.4fr) auto;
		gap: 0.45rem;
		align-items: center;
		width: 100%;
		padding: 0.12rem 0.2rem;
		border-radius: 4px;
	}

	.compare-row .on-bar {
		min-width: 6.4rem;
	}

	.compare-row.current {
		background: var(--selected-bg);
	}

	.compare-row .name {
		font-size: 0.82rem;
		line-height: 1.3;
	}

	.compare-row.tone-b .bar-fill {
		background: rgba(2, 60, 64, 0.62);
	}

	.compare-row.tone-c .bar-fill {
		background: rgba(2, 60, 64, 0.38);
	}

	.compare-row.negative .bar-fill {
		background: repeating-linear-gradient(
			-45deg,
			rgba(2, 60, 64, 0.55),
			rgba(2, 60, 64, 0.55) 6px,
			rgba(2, 60, 64, 0.22) 6px,
			rgba(2, 60, 64, 0.22) 12px
		);
	}

	.current-mark,
	.na-mark {
		display: inline-block;
		margin-left: 0.3rem;
		font-size: 0.58rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-weight: 700;
		white-space: nowrap;
	}

	.current-mark {
		color: var(--teal);
	}

	.na-mark {
		color: var(--muted);
	}

	.page-foot {
		margin-top: 2rem;
		color: var(--muted);
		font-size: 0.82rem;
	}

	.run-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.55rem 1rem;
		margin-top: 0.85rem;
		padding: 0.75rem 0 0.15rem;
		border-top: 1px solid var(--line);
		position: sticky;
		bottom: 0;
		z-index: 3;
		background: var(--panel);
	}

	.run-note {
		margin: 0;
		font-size: 0.8rem;
		color: var(--muted);
		line-height: 1.35;
		flex: 1 1 12rem;
	}

	.run {
		appearance: none;
		border: 0;
		background: var(--teal);
		color: var(--on-teal);
		font: inherit;
		font-weight: 600;
		font-size: 0.88rem;
		padding: 0.55rem 1.05rem;
		border-radius: var(--radius);
		cursor: pointer;
		white-space: nowrap;
	}

	.run:hover {
		background: var(--teal-hover);
	}

	.run:disabled {
		opacity: 0.45;
		cursor: not-allowed;
		background: var(--teal);
	}

	.run:focus-visible {
		outline: 2px solid var(--teal);
		outline-offset: 2px;
	}

	.results.stale {
		box-shadow: inset 0 0 0 1px rgba(2, 60, 64, 0.28);
	}

	.results-head .summary {
		margin: 0 0 1rem;
	}

	.results-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 0.75rem 1.25rem;
	}

	.results-head-copy {
		min-width: 0;
	}

	.results-year {
		margin-left: auto;
		text-align: right;
		flex: 0 0 auto;
	}

	.results-year-label {
		display: block;
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--muted);
	}

	.results-year-value {
		display: block;
		margin-top: 0.15rem;
		font-size: 1.35rem;
		font-weight: 700;
		line-height: 1.15;
		font-variant-numeric: tabular-nums;
		color: var(--header);
	}

	.open-qs {
		margin-bottom: 1rem;
	}

	.workspace-on {
		height: 100vh;
		height: 100dvh;
		max-height: 100vh;
		max-height: 100dvh;
		overflow: hidden;
		line-height: 1.3;
	}

	.workspace-on .wrap {
		width: min(1680px, calc(100% - 1.25rem));
		height: 100%;
		margin: 0 auto;
		padding: 0.45rem 0 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.workspace-on .chrome {
		flex: 0 0 auto;
		display: grid;
		grid-template-columns: auto max-content max-content minmax(0, 1fr);
		grid-template-areas: 'title sector enduse links';
		gap: 0.45rem;
		align-items: stretch;
		overflow: visible;
		z-index: 5;
	}

	.workspace-on .eyebrow {
		display: none;
	}

	.workspace-on .site.compact {
		grid-area: title;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		overflow: visible;
		position: relative;
		min-width: 0;
	}

	.workspace-on .about {
		grid-area: links;
		align-self: center;
		justify-self: start;
		margin: 0;
		max-width: none;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.28rem;
		padding-left: 0.2rem;
	}

	.workspace-on .about-label {
		margin: 0;
		font-size: 0.72rem;
		cursor: default;
		text-decoration: underline;
		text-decoration-style: dotted;
		text-underline-offset: 0.18em;
	}

	.workspace-on .manual-link {
		margin: 0;
		font-size: 0.72rem;
	}

	.workspace-on .about-label:focus {
		outline: none;
	}

	.workspace-on .about-label:focus-visible {
		outline: 2px solid var(--teal);
		outline-offset: 2px;
	}

	.workspace-on .about-body {
		display: none;
		position: fixed;
		z-index: 60;
		top: var(--about-y, 0px);
		left: var(--about-x, 12px);
		width: var(--about-w, min(34rem, calc(100vw - 1.5rem)));
		margin: 0;
		padding-top: 0.4rem;
	}

	.workspace-on .about.about-open .about-body {
		display: block;
	}

	.workspace-on .about-body p {
		padding: 0.7rem 0.8rem;
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: 0 10px 28px rgba(2, 60, 64, 0.16);
		font-size: 0.82rem;
		line-height: 1.5;
		color: var(--ink);
	}

	.workspace-on .site.compact h1 {
		font-size: 1.15rem;
		font-weight: 600;
		min-width: 0;
		gap: 1.05rem;
	}

	.workspace-on .site.compact .brand {
		height: 2.6rem;
	}

	.workspace-on .site.compact h1 .title-text,
	.workspace-on .site.compact h1 .title-lead,
	.workspace-on .site.compact h1 .title-rest {
		white-space: normal;
	}

	.workspace-on .branch {
		grid-area: sector;
		margin: 0;
		padding: 0.35rem 0.55rem 0.4rem;
		width: max-content;
		max-width: 20rem;
	}

	.workspace-on #enduse-panel {
		grid-area: enduse;
		max-width: 26rem;
	}

	.workspace-on .choice-grid {
		width: max-content;
		max-width: 100%;
	}

	.workspace-on .choice-grid.two {
		grid-template-columns: max-content max-content;
	}

	.workspace-on .choice-grid.three {
		grid-template-columns: max-content max-content max-content;
	}

	.workspace-on .choice {
		white-space: nowrap;
	}

	.workspace-on .branch.settled h2 {
		font-size: 0.62rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--muted);
		margin: 0 0 0.25rem;
		font-weight: 600;
	}

	.workspace-on .branch.settled .choice {
		padding: 0.28rem 0.5rem;
	}

	.workspace-on .choice-kicker {
		display: none;
	}

	.workspace-on .choice-title {
		font-size: 0.78rem;
		font-weight: 600;
		margin: 0;
	}

	.workspace-on .layout {
		flex: 1 1 auto;
		min-height: 0;
		height: auto;
		margin: 0;
		overflow: hidden;
		gap: 0.55rem;
		grid-template-columns: minmax(280px, 1.05fr) minmax(300px, 1fr);
	}

	.workspace-on .layout.awaiting {
		grid-template-columns: minmax(0, 56rem);
		justify-content: start;
	}

	.workspace-on .layout > .panel {
		overflow: hidden;
		padding: 0.55rem 0.7rem 0.6rem;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	.workspace-on .layout > .controls {
		display: flex;
		flex-direction: column;
		align-content: start;
		overflow: hidden;
		min-height: 0;
	}

	.workspace-on .inputs-scroll {
		flex: 1 1 auto;
		min-height: 0;
		overflow: auto;
	}

	.workspace-on .controls > .run-bar {
		flex: 0 0 auto;
		background: var(--panel);
		position: relative;
		z-index: 2;
	}

	.workspace-on .option-idle {
		display: none;
	}

	.workspace-on .page-foot {
		display: none;
	}

	.workspace-on .panel h2 {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		margin: 0 0 0.15rem;
	}

	.workspace-on .inputs-tip {
		font-size: 0.78rem;
		font-weight: 600;
		line-height: 1.35;
		color: var(--muted);
		background: var(--selected-bg);
		border-radius: 4px;
		padding: 0.32rem 0.5rem;
		margin: 0 0 0.4rem;
	}

	.workspace-on .panel-intro {
		display: none;
	}

	.workspace-on .field-group + .field-group {
		margin-top: 0.22rem;
		padding-top: 0.22rem;
	}

	.workspace-on .group-label {
		margin: 0.12rem 0 0.28rem;
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		color: var(--header);
	}

	.workspace-on .option-idle {
		opacity: 0.42;
		margin-top: 0.08rem;
		padding-top: 0.08rem;
	}

	.workspace-on .fields.mix {
		grid-template-columns: 1fr 1fr 1fr minmax(5.5rem, 0.7fr);
		align-items: end;
	}

	.workspace-on .fields.mix .computed {
		margin: 0;
		padding: 0.2rem 0.4rem;
	}

	.workspace-on .option-idle .group-label {
		margin: 0;
	}

	.workspace-on .fields {
		gap: 0.18rem 0.55rem;
	}

	.workspace-on .fields:not(.three) .field {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(5.6rem, 1fr);
		align-items: center;
		column-gap: 0.4rem;
	}

	.workspace-on .fields:not(.three) label {
		margin-bottom: 0;
	}

	.workspace-on .fields:not(.three) .field-note,
	.workspace-on .fields:not(.three) .field-hint {
		grid-column: 1 / -1;
	}

	.workspace-on .fields:not(.three) .field:has(#costScenarioMode),
	.workspace-on .fields:not(.three) .field:has(#costScenarioManual) {
		grid-column: 1 / -1;
		grid-template-columns: minmax(0, 1fr) minmax(12rem, 1.35fr);
	}

	.workspace-on label {
		font-size: 0.72rem;
		font-weight: 500;
		margin-bottom: 0.06rem;
		line-height: 1.2;
	}

	.workspace-on select,
	.workspace-on input[type='number'] {
		min-height: 1.45rem;
		height: 1.45rem;
		padding: 0 0.35rem;
		font-size: 0.78rem;
		font-weight: 400;
		border-radius: 4px;
		line-height: 1.2;
	}

	.workspace-on select {
		background:
			linear-gradient(45deg, transparent 50%, var(--ink) 50%) right 10px top 11px / 5px 5px
				no-repeat,
			linear-gradient(135deg, var(--ink) 50%, transparent 50%) right 6px top 11px / 5px 5px
				no-repeat,
			var(--card);
		padding-right: 1.55rem;
	}

	.workspace-on .computed {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		margin: 0.16rem 0 0.04rem;
		padding: 0.12rem 0.4rem;
		gap: 0.15rem 0.85rem;
		min-height: 0;
	}

	.workspace-on .computed > div {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		min-width: 0;
	}

	.workspace-on .computed .k,
	.workspace-on .computed .v {
		display: inline;
		line-height: 1.2;
	}

	.workspace-on .computed .k {
		font-size: 0.55rem;
	}

	.workspace-on .computed .v {
		font-size: 0.72rem;
	}

	.workspace-on .computed.computed-sum {
		width: 100%;
		flex-direction: column;
		align-items: stretch;
		margin: 0.28rem 0 0.08rem;
		padding: 0.32rem 0 0.06rem;
		border: none;
		border-top: 1px solid var(--line);
		border-radius: 0;
		background: transparent;
		cursor: default;
	}

	.workspace-on .computed.computed-sum > div {
		gap: 0.55rem;
	}

	.workspace-on .computed.computed-sum .k {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0;
		text-transform: none;
		color: var(--header);
	}

	.workspace-on .computed.computed-sum .v {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--header);
	}

	.workspace-on .snapshot {
		margin: 0.28rem 0 0.12rem;
		padding: 0.38rem 0.45rem;
		gap: 0.18rem;
	}

	.workspace-on .snapshot-label {
		font-size: 0.62rem;
	}

	.workspace-on .snapshot .k {
		font-size: 0.72rem;
	}

	.workspace-on .snapshot .v {
		font-size: 0.8rem;
	}

	.workspace-on .field-hint {
		display: none;
	}

	.workspace-on .field-note.warn {
		font-size: 0.65rem;
		padding: 0.18rem 0.35rem;
		margin: 0.18rem 0 0;
		line-height: 1.25;
	}

	.workspace-on .option-idle {
		opacity: 0.42;
	}

	.workspace-on .option-idle > :not(.group-label) {
		display: none;
	}

	.workspace-on .results-head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 0.25rem 0.65rem;
		margin-bottom: 0.35rem;
	}

	.workspace-on .results-year-label {
		font-size: 0.62rem;
	}

	.workspace-on .results-year-value {
		margin-top: 0.05rem;
		font-size: 1.02rem;
	}

	.workspace-on .results-head h2,
	.workspace-on .results-head .summary,
	.workspace-on .model-tag {
		margin: 0;
	}

	.workspace-on .summary {
		font-size: 0.78rem;
	}

	.workspace-on .metrics {
		margin-bottom: 0.35rem;
		grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
	}

	.workspace-on .metrics.three .metric + .metric {
		border-top: 0;
		border-left: 1px solid var(--line);
	}

	.workspace-on .metric {
		padding: 0.35rem 0.5rem;
	}

	.workspace-on .metric .label {
		min-height: 3.15rem;
		font-size: 0.78rem;
		margin-bottom: 0.12rem;
		justify-content: flex-start;
	}

	.workspace-on .metric .label-note {
		font-size: 0.62rem;
		font-weight: 500;
		margin-top: 0.08rem;
	}

	.workspace-on .metric .value {
		font-size: 1rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.workspace-on .metric .unit {
		font-size: 0.65rem;
		font-weight: 400;
		margin-top: 0;
	}

	.workspace-on .view-tabs {
		margin: 0.28rem 0 0.28rem;
		gap: 0.5rem;
	}

	.workspace-on .results > .inputs-tip {
		flex: 0 0 auto;
	}

	.workspace-on .view-tab {
		font-size: 0.78rem;
		font-weight: 600;
		padding: 0.4rem 0.65rem;
	}

	.workspace-on .vplot {
		height: 13rem;
	}

	.workspace-on .vlegend-btn {
		padding: 0.12rem 0.2rem;
	}

	.workspace-on .vlegend-btn,
	.workspace-on .stack-name,
	.workspace-on .stack-val,
	.workspace-on .vnet {
		font-family: var(--font);
		font-size: 0.65rem;
		font-weight: 400;
	}

	.workspace-on .stack-val,
	.workspace-on .vnet {
		font-weight: 500;
		font-variant-numeric: tabular-nums;
	}

	.workspace-on .vnet {
		margin-top: 0.25rem;
	}

	.workspace-on .waterfall {
		gap: 0.15rem;
	}

	.workspace-on .wf-row {
		grid-template-columns: minmax(4.8rem, 0.8fr) minmax(3rem, 1.3fr) auto;
		gap: 0.28rem;
		padding: 0.1rem 0.15rem;
	}

	.workspace-on .wf-label,
	.workspace-on .stack-name {
		font-size: 0.62rem;
	}

	.workspace-on .wf-track {
		height: 0.95rem;
	}

	.workspace-on .wf-amt,
	.workspace-on .stack-val {
		font-size: 0.62rem;
	}

	.workspace-on .stack-bar {
		height: 1.55rem;
	}

	.workspace-on .alt-detail {
		margin-top: 0.35rem;
		padding: 0.3rem 0.4rem;
	}

	.workspace-on .open-qs {
		display: grid;
		gap: 0.2rem;
		margin-bottom: 0.4rem;
	}

	.workspace-on .open-q {
		margin: 0;
		padding: 0.22rem 0.4rem;
		font-size: 0.62rem;
		line-height: 1.3;
	}

	.workspace-on .open-q strong {
		display: inline;
		margin: 0 0.2rem 0 0;
	}

	.workspace-on .charts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.65rem;
		flex: 0 0 auto;
		min-height: 0;
	}

	.workspace-on .run-bar {
		margin-top: 0.35rem;
		padding-top: 0.35rem;
	}

	.workspace-on .run-note {
		font-size: 0.78rem;
		font-weight: 600;
		line-height: 1.35;
		color: var(--muted);
		background: var(--selected-bg);
		border-radius: 4px;
		padding: 0.32rem 0.5rem;
	}

	.workspace-on .run {
		font-size: 0.78rem;
		font-weight: 600;
		padding: 0.32rem 0.85rem;
	}

	.workspace-on .bar-track {
		height: 1.15rem;
	}

	.workspace-on .cat {
		margin-bottom: 0.22rem;
	}

	.workspace-on .cat-toggle {
		grid-template-columns: minmax(5.2rem, 0.85fr) minmax(3.5rem, 1fr) auto;
		gap: 0.3rem;
	}

	.workspace-on .cat-toggle .name {
		font-size: 0.72rem;
	}

	.workspace-on .on-bar {
		position: static;
		inset: auto;
		font-size: 0.62rem;
		min-width: 4.2rem;
	}

	.workspace-on .capex-breakdown {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.workspace-on .breakdown h3 {
		margin: 0 0 0.3rem;
		font-size: 0.62rem;
	}

	.workspace-on .opex-thesis {
		margin: 0 0 0.4rem;
		font-size: 0.65rem;
		font-weight: 400;
		line-height: 1.35;
	}

	.workspace-on .model-tag {
		font-size: 0.65rem;
		font-weight: 400;
	}

	.workspace-on .layout > .results {
		overflow: auto;
		min-height: 0;
	}

	.workspace-on .compare {
		margin-top: 0.45rem;
		padding-top: 0.45rem;
	}

	.workspace-on .compare h3 {
		font-size: 0.78rem;
		font-weight: 700;
		margin-bottom: 0.22rem;
	}

	.workspace-on .compare-metric-label {
		font-size: 0.72rem;
		font-weight: 600;
		margin-bottom: 0.22rem;
	}

	.workspace-on .compare-unit {
		font-size: 0.65rem;
		font-weight: 400;
	}

	.workspace-on .compare-metric {
		margin-bottom: 0.4rem;
	}

	.workspace-on .compare-row {
		grid-template-columns: minmax(5.2rem, 0.85fr) minmax(3.5rem, 1fr) auto;
		gap: 0.3rem;
		padding: 0.08rem 0.12rem;
	}

	.workspace-on .compare-row .name {
		font-size: 0.72rem;
	}

	.workspace-on .compare-row .on-bar {
		min-width: 5.8rem;
	}

	.workspace-on .current-mark,
	.workspace-on .na-mark {
		font-size: 0.5rem;
		margin-left: 0.2rem;
	}

	@media (max-width: 860px) {
		.site:not(.compact) h1 {
			flex-wrap: wrap;
			font-size: clamp(0.92rem, 4.1vw, 1.2rem);
		}
		.site.compact h1 {
			font-size: 1.2rem;
		}
		.layout,
		.choice-grid.two,
		.choice-grid.three,
		.computed,
		.computed.three,
		.metrics,
		.fields,
		.fields.three,
		.fields.mix {
			grid-template-columns: 1fr;
		}
		.layout {
			height: auto;
			min-height: 0;
		}
		.layout > .panel {
			overflow: visible;
		}
		.results {
			position: static;
			max-height: none;
		}
		.bar-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
		.bar-row .amt {
			text-align: left;
			min-width: 0;
		}
		.compare-row,
		.workspace-on .compare-row {
			grid-template-columns: 1fr;
			gap: 0.2rem;
			padding: 0.28rem 0;
		}
		.compare-row .on-bar,
		.workspace-on .compare-row .on-bar {
			justify-content: flex-start;
			min-width: 0;
		}
		.workspace-on {
			height: auto;
			max-height: none;
			overflow: visible;
		}
		.workspace-on .wrap {
			height: auto;
			display: block;
			padding: 1rem 0 2rem;
		}
		.workspace-on .chrome {
			display: block;
		}
		.workspace-on .layout {
			display: grid;
			overflow: visible;
		}
		.workspace-on .layout > .panel {
			overflow: visible;
		}
		.workspace-on .layout > .controls {
			display: flex;
			flex-direction: column;
		}
		.workspace-on .charts {
			grid-template-columns: 1fr;
		}
		.workspace-on .metrics,
		.workspace-on .metrics.three {
			grid-template-columns: 1fr 1fr;
		}
		.workspace-on .metrics .metric + .metric,
		.workspace-on .metrics.three .metric + .metric {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
		.workspace-on .page-foot {
			display: block;
		}
		.workspace-on .field-hint,
		.workspace-on .option-idle > :not(.group-label) {
			display: block;
		}
	}
</style>
