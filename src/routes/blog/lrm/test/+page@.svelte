<script>
	import { tick } from 'svelte';
	import cascadeLogo from '$lib/images/cc-logo-full.png';
	import {
		calculate,
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
		RESIDENTIAL_CHARGE_CAP_KG
	} from '$lib/lrm/v42/calculate.js';

	let sector = '';
	let pathway = '';
	let filledFromDefaults = false;

	let chargeSizeKg = 100;
	let chargeCappedNote = false;
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
	/** @type {'bars' | 'alt'} */
	let chartView = 'bars';
	let selectedAlt = '';

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

	function pathwayTag(p) {
		if (p === PATHWAY_DESTRUCTION) return 'DE';
		if (p === PATHWAY_RECLAMATION) return 'RC';
		return 'RY';
	}

	$: liveCode = pathwayTag(pathway);
	$: pathwayCode = result ? pathwayTag(result.inputs.pathway) : liveCode;

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

	$: if (residential && Number(chargeSizeKg) > RESIDENTIAL_CHARGE_CAP_KG) {
		chargeSizeKg = RESIDENTIAL_CHARGE_CAP_KG;
		chargeCappedNote = true;
	} else if (!residential || Number(chargeSizeKg) < RESIDENTIAL_CHARGE_CAP_KG) {
		chargeCappedNote = false;
	}

	function formatUsd(n, digits = 2) {
		return n.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
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

	function capexBit(name, item) {
		if (!item || item.hidden) return null;
		return {
			name,
			value: item.na ? 0 : item.cost,
			note: item.na ? item.label : `${item.units} unit${item.units === 1 ? '' : 's'}`
		};
	}

	$: opexCats = result
		? [
				{
					id: 'opex-labour',
					name: 'Recovery labour',
					value: result.opex.labour + result.opex.refillMarkup,
					unit: '/kg',
					tooltip:
						'Labour to recover refrigerant into cylinders, plus the 50% recycling mark-up when that pathway is selected.',
					parts: [
						{ name: 'Recovery labour costs', value: result.opex.labour },
						{ name: 'Mark-up for recycling costs', value: result.opex.refillMarkup }
					]
				},
				{
					id: 'opex-recovery-transport',
					name: 'Recovery transportation',
					value: result.opex.recoveryTransport,
					unit: '/kg',
					tooltip:
						'Fuel to the central facility: distance per team × number of teams × fuel cost per km, divided by kg recovered per day.',
					parts: [
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
					unit: '/kg',
					tooltip: 'Warehouse storage plus central-facility consolidation into large cylinders or ton tanks.',
					parts: [
						{ name: 'Warehouse storage', value: result.opex.warehouse },
						{ name: 'Central facility operational activities', value: result.opex.central }
					]
				},
				{
					id: 'opex-transport',
					name: 'Transport & handling to end-use',
					value: result.opex.transport,
					unit: '/kg',
					tooltip: 'In-country or exported haulage to reclamation or destruction. Zero for Recycling.',
					parts: [{ name: 'Transport & handling to end-use facility', value: result.opex.transport }]
				},
				{
					id: 'opex-enduse',
					name: 'End-use processing',
					value: result.opex.processing,
					unit: '/kg',
					tooltip: 'Reclamation or destruction processing. Zero for Recycling.',
					parts: [{ name: 'End-use processing', value: result.opex.processing }]
				},
				...(result.opex.saleCredit || result.opex.virginSavings
					? [
							{
								id: 'opex-credits',
								name: 'Credits',
								value: -(result.opex.saleCredit + result.opex.virginSavings),
								unit: '/kg',
								tooltip:
									'Sale price of reclaimed refrigerant and avoided virgin purchases are subtracted from gross to give net opex.',
								parts: [
									{ name: 'Sale price of reclaimed refrigerant', value: -result.opex.saleCredit },
									{
										name: 'Virgin refrigerant savings from recycling',
										value: -result.opex.virginSavings
									}
								]
							}
						]
					: [])
			]
		: [];

	$: opexScale = Math.max(...opexCats.filter((r) => !r.mock).map((r) => Math.abs(r.value)), 0.0001);

	$: capexCats = result
		? [
				{
					id: 'capex-recovery',
					name: 'Recovery equipment',
					parts: [
						capexBit('Recovery machines (basic)', result.capex.machinesBasic),
						capexBit('Recovery accessories (basic)', result.capex.accessoriesBasic),
						capexBit('Recovery machines (high capacity)', result.capex.machinesHigh),
						capexBit('Recovery accessories (high capacity)', result.capex.accessoriesHigh),
						capexBit('12L cylinders', result.capex.cylinders12L),
						capexBit('60L cylinders', result.capex.cylinders60L),
						capexBit('Refrigerant identifiers', result.capex.identifiers),
						capexBit('Ton tanks', result.capex.tonTanks)
					].filter(Boolean),
					tooltip: 'Machines, accessories, identifiers, cylinders, and tanks. TMS is a separate bar.'
				},
				{
					id: 'capex-tracking',
					name: 'Tracking & monitoring system',
					parts: [capexBit('Tracking & monitoring system', result.capex.tracking)].filter(Boolean),
					tooltip: 'Manual TMS input from the recovery capex block.'
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

	$: capexScale = Math.max(...capexCats.map((r) => r.value), 0.0001);

	$: waterfallSteps = (() => {
		let running = 0;
		const steps = [];
		for (const row of opexCats) {
			const from = running;
			running += row.value;
			steps.push({
				...row,
				from,
				to: running,
				delta: row.value
			});
		}
		const vals = steps.flatMap((s) => [s.from, s.to]);
		const min = Math.min(0, ...vals);
		const max = Math.max(0, ...vals);
		const span = Math.max(max - min, 0.0001);
		const pct = (v) => ((v - min) / span) * 100;
		return steps.map((s, i) => {
			const lo = Math.min(s.from, s.to);
			const hi = Math.max(s.from, s.to);
			return {
				...s,
				leftPct: pct(lo),
				widthPct: Math.max(pct(hi) - pct(lo), 0.8),
				zeroPct: pct(0),
				connectorPct: i === 0 ? null : pct(steps[i - 1].to),
				negative: s.delta < 0
			};
		});
	})();

	$: selectedOpexAlt =
		selectedAlt && selectedAlt.startsWith('opex-')
			? opexCats.find((row) => row.id === selectedAlt) || null
			: null;
	$: selectedCapexAlt =
		selectedAlt && selectedAlt.startsWith('capex-')
			? capexCats.find((row) => row.id === selectedAlt) || null
			: null;

	$: capexStackTotal = Math.max(
		capexCats.reduce((sum, row) => sum + Math.max(row.value, 0), 0),
		0.0001
	);

	$: sectorBlurb = residential
		? 'Residential recovery can include on-site pump-down when it applies, then recovery at a central facility. The model no longer assumes every unit is pumped down first.'
		: 'Mainly on-site recovery from decommissioned units; refilling is covered under the Recycling pathway.';
</script>

<svelte:head>
	<title>Lifecycle Refrigerant Management Calculator Mock 3.0 — Cascade Climate (unlisted)</title>
	<meta
		name="description"
		content="Unlisted Lifecycle Refrigerant Management Calculator Mock 3.0 using LRM Cost Model V5.0 (SEA)."
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

<div class="lrm-explorer" class:workspace-on={ready}>
	<div class="wrap">
		<div class="chrome">
		<header class="site" class:compact={Boolean(sector)}>
			<div class="site-copy">
				<div class="eyebrow">Unlisted · V5.0 SEA</div>
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
						<span class="title-rest">Calculator</span>
					</span>
				</h1>
				<details class="about">
					<summary>About the calculator</summary>
					<div class="about-body">
						<p>
							The Lifecycle Refrigerant Management (LRM) Cost Calculator is designed for the people
							deciding whether and how to invest in refrigerant recovery — city and state program
							leads, regulators, utilities, and private operators weighing financing options. It
							covers the full post-recovery value chain: on-site recovery and reuse, transport to and
							storage at central facilities, recycling, reclamation, and destruction. Results are
							screening-level estimates based on default assumptions and user inputs, and should be
							used to explore and compare pathways at a planning level — not as final costs,
							investment-grade figures, or the basis for regulatory, procurement, or compliance
							decisions.
						</p>
					</div>
				</details>
			</div>
		</header>

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
					<p class="panel-intro">
						Grouped by the value chain. Amber-style fields are inputs. Bold figures are calculated.
					</p>

					<div class="field-group">
						<div class="group-label">Recovery</div>

						<div class="fields">
						<div class="field">
							<label
								data-tip="Default guidance: Residential AC = 1 kg, Commercial HVAC = 100 kg"
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
								data-tip="Default guidance: Residential AC = 50%, Commercial HVAC = 80%"
								for="recoverablePct">Estimated % of recoverable refrigerant per unit (%)</label
							>
							<input id="recoverablePct" type="number" min="0" max="100" step="1" bind:value={recoverablePct} />
						</div>
						<div class="field">
							<label
								data-tip="For 'Commercial HVAC' sector, only 'High Capacity' can be selected"
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
								step="0.01"
								bind:value={recoveryHoursPerUnit}
							/>
						</div>
						<div class="field">
							<label
								data-tip="Default guidance: Residential AC = USD $10/hour, Commercial HVAC = USD $20/hour (assuming a two-man team)"
								for="labourPerHour">Hourly labor cost rate per unit (USD/hour)</label
							>
							<input id="labourPerHour" type="number" min="0" step="0.01" bind:value={labourPerHour} />
						</div>
						<div class="field">
							<label
								data-tip="Default guidance: Residential AC = 40, Commercial HVAC = 1"
								for="unitsPerDay">Average number of units recovered per day</label
							>
							<input id="unitsPerDay" type="number" min="0" step="1" bind:value={unitsPerDay} />
						</div>
						<div class="field">
							<label data-tip="Default guidance: 8.5 km/L" for="fuelEfficiencyKmPerL"
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
							<label data-tip="Default guidance: USD $1.50/L" for="fuelPricePerL">Fuel price (USD/L)</label>
							<input id="fuelPricePerL" type="number" min="0" step="0.01" bind:value={fuelPricePerL} />
						</div>
						<div class="field">
							<label
								data-tip="Default guidance: Residential AC 1 team for every 10 units recovered per day. For Commercial HVAC, 1 team for every unit recovered from per day"
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
								data-tip="Default guidance: Residential AC = 200, Commercial HVAC = 75"
								for="daysPerYear">Estimated number of recovery days per year</label
							>
							<input id="daysPerYear" type="number" min="0" step="1" bind:value={daysPerYear} />
						</div>
						</div>
						<div class="computed">
							<div>
								<span class="k">Number of units recovered per year</span>
								<span class="v">{formatKg(live.inputs.unitsPerYear, 0)}</span>
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
								data-tip={'This selection will determine the costs for central facility activities & end-use processing, based on the total amount of refrigerant recovered per year. Default guidance: (i) if <5,000 kg/year, select High; (ii) if 5,000 kg - 50,000 kg/year, select Medium; (iii) if > 50,000 kg/year, select Low'}
								for="costScenarioMode">Cost scenario</label
							>
							<select id="costScenarioMode" bind:value={costScenarioMode}>
								<option value="auto">Auto from annual volume ({autoScenario})</option>
								<option value="manual">Override…</option>
							</select>
						</div>
						{#if costScenarioMode === 'manual'}
							<div class="field">
								<label for="costScenarioManual">Override cost scenario</label>
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
								<label
									data-tip="For 'Destruction > Plasma Arc' & 'Reclamation' selections, the 'Retrofit' option is not applicable"
									for="facilityStatus">Facility status</label
								>
								<select id="facilityStatus" bind:value={facilityStatus}>
									<option>Existing</option>
									<option>Retrofit</option>
									<option>New</option>
								</select>
							</div>
							<div class="field">
								<label
									data-tip="In-country: Refrigerant is processed in-country. Exported: Refrigerant is exported overseas for processing"
									for="location">Location</label
								>
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
									data-tip="For 'Destruction > Plasma Arc' & 'Reclamation' selections, the 'Retrofit' option is not applicable"
									for="facilityStatusDest">Facility status</label
								>
								<select id="facilityStatusDest" bind:value={facilityStatus}>
									<option>Existing</option>
									<option>Retrofit</option>
									<option>New</option>
								</select>
							</div>
							<div class="field">
								<label
									data-tip="In-country: Refrigerant is processed in-country. Exported: Refrigerant is exported overseas for processing"
									for="locationDest">Location</label
								>
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

					<div class="run-bar">
						{#if stale}
							<p class="run-note">Inputs have changed. Calculate again to refresh outputs.</p>
						{:else if !result}
							<p class="run-note">When the inputs look right, calculate to produce the cost view.</p>
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
						<div class="model-tag">V5.0 SEA · {pathwayCode}</div>
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

					<div class="metrics three">
						<div class="metric">
							<div class="label">Total amount of refrigerant recovered per year</div>
							<div class="value">{formatKg(result.inputs.annualKg, 0)}</div>
							<span class="unit">kg / year</span>
						</div>
						<div class="metric">
							<div class="label">Total OPEX</div>
							<div class="value">{formatUsd(result.opex.net)}</div>
							<span class="unit">USD / kg · net</span>
						</div>
						<div class="metric">
							<div class="label">Total CAPEX</div>
							<div class="value">{formatUsd(result.capex.total)}</div>
							<span class="unit">USD · one-off</span>
						</div>
					</div>

					<div class="view-tabs" role="tablist" aria-label="Output chart style">
						<button
							type="button"
							role="tab"
							class="view-tab"
							class:active={chartView === 'bars'}
							aria-selected={chartView === 'bars'}
							on:click={() => {
								chartView = 'bars';
								selectedAlt = '';
							}}
						>
							Bars
						</button>
						<button
							type="button"
							role="tab"
							class="view-tab"
							class:active={chartView === 'alt'}
							aria-selected={chartView === 'alt'}
							on:click={() => {
								chartView = 'alt';
								openCats = {};
							}}
						>
							Waterfall + stacked
						</button>
					</div>

					{#if chartView === 'bars'}
					<div class="charts">
					<div class="breakdown">
						<h3>OPEX</h3>
						<p class="opex-thesis">
							Summary thesis of how the user should interpret the end result. Placeholder for two to
							three sentences that explain what these operating costs mean for the selected pathway
							and how to read them against the totals above.
						</p>
						{#each opexCats as row}
							<div class="cat" class:mock={row.mock} class:open={openCats[row.id]}>
								<button type="button" class="cat-toggle" on:click={() => toggleCat(row.id)}>
									<span class="name">{row.name}</span>
									<div class="bar-track">
										<div
											class="bar-fill"
											class:mock-fill={row.mock}
											style="width: {row.mock ? 42 : opexBar(Math.abs(row.value), opexScale)}%"
										></div>
									</div>
									<span class="on-bar">
										{#if row.mock}
											Mock
										{:else}
											{formatUsd(row.value)}{row.unit}
										{/if}
									</span>
								</button>
								{#if openCats[row.id]}
									<ul class="cat-parts">
										{#each row.parts as part}
											<li>
												<span>{part.name}</span>
												<span>
													{#if part.mock || part.value == null}
														Mock — awaiting source
													{:else}
														{formatUsd(part.value)}{row.unit}
													{/if}
												</span>
											</li>
										{/each}
									</ul>
									<p class="cat-tip">{row.tooltip}</p>
								{/if}
							</div>
						{/each}
					</div>

					<div class="breakdown capex-breakdown">
						<h3>CAPEX</h3>
						{#each capexCats as row}
							<div class="cat" class:open={openCats[row.id]}>
								<button type="button" class="cat-toggle" on:click={() => toggleCat(row.id)}>
									<span class="name">{row.name}</span>
									<div class="bar-track">
										<div class="bar-fill" style="width: {opexBar(row.value, capexScale)}%"></div>
									</div>
									<span class="on-bar">{formatUsd(row.value)}</span>
								</button>
								{#if openCats[row.id]}
									<ul class="cat-parts">
										{#each row.parts as part}
											<li>
												<span>{part.name}{#if part.note} · {part.note}{/if}</span>
												<span>{formatUsd(part.value)}</span>
											</li>
										{/each}
									</ul>
									<p class="cat-tip">{row.tooltip}</p>
								{/if}
							</div>
						{/each}
					</div>
					</div>
					{:else}
					<div class="charts alt-charts">
						<div class="breakdown">
							<h3>OPEX waterfall</h3>
							<p class="opex-thesis">
								Each step adds or subtracts from the running total. Click a step for the line-item
								breakdown.
							</p>
							<div class="waterfall">
								{#each waterfallSteps as step}
									<button
										type="button"
										class="wf-row"
										class:selected={selectedAlt === step.id}
										class:negative={step.negative}
										on:click={() => selectAlt(step.id)}
									>
										<span class="wf-label">{step.name}</span>
										<span class="wf-track">
											{#if step.connectorPct != null}
												<span class="wf-connector" style="left: {step.connectorPct}%"></span>
											{/if}
											<span class="wf-zero" style="left: {step.zeroPct}%"></span>
											<span
												class="wf-bar"
												style="left: {step.leftPct}%; width: {step.widthPct}%"
											></span>
										</span>
										<span class="wf-amt">
											{step.delta >= 0 ? '+' : ''}{formatUsd(step.delta)}{step.unit}
										</span>
									</button>
								{/each}
								<div class="wf-net">
									<span class="wf-label">Net opex</span>
									<span class="wf-amt net">{formatUsd(result.opex.net)}/kg</span>
								</div>
							</div>
							{#if selectedOpexAlt}
								<div class="alt-detail">
									<div class="alt-detail-title">{selectedOpexAlt.name}</div>
									<ul class="cat-parts">
										{#each selectedOpexAlt.parts as part}
											<li>
												<span>{part.name}</span>
												<span>{formatUsd(part.value)}/kg</span>
											</li>
										{/each}
									</ul>
									<p class="cat-tip">{selectedOpexAlt.tooltip}</p>
								</div>
							{/if}
						</div>

						<div class="breakdown capex-breakdown">
							<h3>CAPEX stacked</h3>
							<p class="opex-thesis">Click a segment for that category’s breakdown.</p>
							<div class="stack-bar" role="group" aria-label="CAPEX composition">
								{#each capexCats as row, i}
									<button
										type="button"
										class="stack-seg"
										class:selected={selectedAlt === row.id}
										class:tone-a={i % 4 === 0}
										class:tone-b={i % 4 === 1}
										class:tone-c={i % 4 === 2}
										class:tone-d={i % 4 === 3}
										style="flex: {Math.max(row.value, 0)} 1 0"
										title="{row.name}: {formatUsd(row.value)}"
										on:click={() => selectAlt(row.id)}
									>
										{#if row.value / capexStackTotal > 0.12}
											<span class="stack-seg-label">{formatUsd(row.value, 0)}</span>
										{/if}
									</button>
								{/each}
							</div>
							<ul class="stack-legend">
								{#each capexCats as row, i}
									<li>
										<button
											type="button"
											class="stack-legend-btn"
											class:selected={selectedAlt === row.id}
											on:click={() => selectAlt(row.id)}
										>
											<span
												class="swatch"
												class:tone-a={i % 4 === 0}
												class:tone-b={i % 4 === 1}
												class:tone-c={i % 4 === 2}
												class:tone-d={i % 4 === 3}
											></span>
											<span class="stack-name">{row.name}</span>
											<span class="stack-val">{formatUsd(row.value)}</span>
										</button>
									</li>
								{/each}
							</ul>
							{#if selectedCapexAlt}
								<div class="alt-detail">
									<div class="alt-detail-title">{selectedCapexAlt.name}</div>
									<ul class="cat-parts">
										{#each selectedCapexAlt.parts as part}
											<li>
												<span>{part.name}{#if part.note} · {part.note}{/if}</span>
												<span>{formatUsd(part.value)}</span>
											</li>
										{/each}
									</ul>
									<p class="cat-tip">{selectedCapexAlt.tooltip}</p>
								</div>
							{/if}
						</div>
					</div>
					{/if}
				</section>
				{/if}
			</div>
		{/if}

		<p class="page-foot">
			Lifecycle Refrigerant Management Calculator Mock 3.0 · V5.0 SEA · Unlisted
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
		--font: Inter, system-ui, sans-serif;

		min-height: 100vh;
		color: var(--ink);
		font-family: var(--font);
		line-height: 1.5;
		background: var(--bg);
		position: relative;
		-webkit-font-smoothing: antialiased;
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
		letter-spacing: 0.1em;
		text-transform: uppercase;
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
		align-items: center;
		gap: 0.7rem;
	}

	.site h1 .title-text {
		display: flex;
		flex-direction: column;
		max-width: none;
		line-height: 1.15;
	}

	.site h1 .title-lead {
		white-space: nowrap;
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
		max-width: 40rem;
		position: relative;
	}

	.about summary {
		cursor: pointer;
		list-style: none;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--teal);
		width: fit-content;
	}

	.about summary::-webkit-details-marker {
		display: none;
	}

	.about summary::after {
		content: ' +';
		font-weight: 600;
	}

	.about[open] summary::after {
		content: ' −';
	}

	.about-body {
		margin-top: 0.55rem;
		padding: 0.7rem 0.8rem;
		background: var(--card);
		border: 1px solid var(--line);
		border-radius: var(--radius);
	}

	.about-body p {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--ink);
	}

	.site.compact {
		margin-bottom: 0.75rem;
	}

	.site.compact h1 {
		font-size: 0.98rem;
		max-width: none;
		margin: 0;
		line-height: 1.35;
		gap: 0.5rem;
	}

	.site.compact h1 .title-text {
		max-width: none;
	}

	.site.compact .brand {
		width: auto;
		height: 1.85rem;
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
		font-size: 0.75rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--ink);
		font-weight: 600;
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
	label[data-tip]:focus-visible::after {
		content: attr(data-tip);
		position: absolute;
		left: 0;
		bottom: calc(100% + 6px);
		width: max-content;
		max-width: min(22rem, calc(100vw - 2rem));
		padding: 0.35rem 0.5rem;
		background: var(--teal);
		color: var(--on-teal);
		font-size: 0.7rem;
		font-weight: 400;
		line-height: 1.35;
		letter-spacing: 0;
		text-transform: none;
		border-radius: 6px;
		z-index: 40;
		pointer-events: none;
		box-shadow: 0 6px 18px rgba(2, 60, 64, 0.16);
		white-space: normal;
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
		gap: 0.4rem;
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--on-teal);
		background: var(--teal);
		padding: 0.22rem 0.55rem;
		border-radius: 999px;
		margin-bottom: 0.7rem;
	}

	.model-tag::before {
		content: '';
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		background: var(--on-teal);
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
		overflow: hidden;
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
		font-size: 0.68rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--muted);
		margin-bottom: 0.25rem;
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
		display: inline-flex;
		gap: 0;
		margin: 0.55rem 0 0.7rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--card);
	}

	.view-tab {
		appearance: none;
		border: 0;
		background: transparent;
		color: var(--ink-soft);
		font: inherit;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.03em;
		padding: 0.35rem 0.7rem;
		cursor: pointer;
	}

	.view-tab + .view-tab {
		border-left: 1px solid var(--line);
	}

	.view-tab.active {
		background: var(--teal);
		color: var(--on-teal);
	}

	.view-tab:hover:not(.active) {
		background: var(--selected-bg);
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
		background: #046066;
	}
	.stack-seg.tone-c,
	.swatch.tone-c {
		background: #3a6f72;
	}
	.stack-seg.tone-d,
	.swatch.tone-d {
		background: #6a9092;
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
	}

	.alt-detail-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--header);
		margin-bottom: 0.15rem;
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
		margin-top: 1.25rem;
	}

	.compare-table {
		display: grid;
		grid-template-columns: minmax(9rem, 1.1fr) repeat(var(--cols), 1fr);
		gap: 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		font-size: 0.88rem;
	}

	.compare-table > div {
		padding: 0.7rem 0.8rem;
		border-top: 1px solid var(--line);
		font-variant-numeric: tabular-nums;
	}

	.compare-head {
		background: var(--selected-bg);
		font-weight: 600;
		font-size: 0.78rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--teal);
		border-top: none;
	}

	.compare-table > div.current {
		background: var(--selected-bg);
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
		padding-top: 0.75rem;
		border-top: 1px solid var(--line);
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
		grid-template-columns: minmax(13rem, 0.8fr) minmax(16rem, 1fr) minmax(20rem, 1.4fr);
		gap: 0.45rem;
		align-items: stretch;
		overflow: visible;
		z-index: 5;
	}

	.workspace-on .eyebrow {
		display: none;
	}

	.workspace-on .site.compact {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		overflow: visible;
		position: relative;
	}

	.workspace-on .about {
		margin: 0.12rem 0 0;
		max-width: none;
	}

	.workspace-on .about summary {
		font-size: 0.58rem;
	}

	.workspace-on .about[open] .about-body {
		position: absolute;
		z-index: 60;
		top: calc(100% + 0.35rem);
		left: 0;
		width: min(34rem, 72vw);
		margin: 0;
		box-shadow: 0 10px 28px rgba(2, 60, 64, 0.16);
	}

	.workspace-on .site.compact h1 {
		font-size: 0.92rem;
	}

	.workspace-on .branch {
		margin: 0;
		padding: 0.35rem 0.55rem 0.4rem;
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
		font-size: 0.8rem;
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-content: start;
		column-gap: 0.65rem;
		row-gap: 0;
		overflow: visible;
	}

	.workspace-on .controls > h2,
	.workspace-on .controls > .panel-intro,
	.workspace-on .controls > .field-group:not(.option-idle),
	.workspace-on .controls > .run-bar {
		grid-column: 1 / -1;
	}

	.workspace-on .option-idle {
		display: none;
	}

	.workspace-on .page-foot {
		display: none;
	}

	.workspace-on .panel h2 {
		font-size: 0.72rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		margin: 0 0 0.35rem;
	}

	.workspace-on .panel-intro {
		display: none;
	}

	.workspace-on .field-group + .field-group {
		margin-top: 0.22rem;
		padding-top: 0.22rem;
	}

	.workspace-on .group-label {
		margin-bottom: 0.16rem;
		font-size: 0.6rem;
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
		font-size: 0.65rem;
		margin-bottom: 0.06rem;
		line-height: 1.2;
	}

	.workspace-on select,
	.workspace-on input[type='number'] {
		min-height: 1.45rem;
		height: 1.45rem;
		padding: 0 0.35rem;
		font-size: 0.75rem;
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
		align-items: baseline;
		gap: 0.25rem 0.65rem;
		margin-bottom: 0.35rem;
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
	}

	.workspace-on .metrics.three {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.workspace-on .metrics.three .metric + .metric {
		border-top: 0;
		border-left: 1px solid var(--line);
	}

	.workspace-on .metric {
		padding: 0.35rem 0.5rem;
	}

	.workspace-on .metric .label {
		font-size: 0.58rem;
		margin-bottom: 0.1rem;
	}

	.workspace-on .metric .value {
		font-size: 1rem;
	}

	.workspace-on .metric .unit {
		font-size: 0.65rem;
		margin-top: 0;
	}

	.workspace-on .view-tabs {
		margin: 0.2rem 0 0.4rem;
	}

	.workspace-on .view-tab {
		font-size: 0.62rem;
		padding: 0.22rem 0.55rem;
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
		flex: 1 1 auto;
		min-height: 0;
	}

	.workspace-on .run-bar {
		margin-top: 0.35rem;
		padding-top: 0.35rem;
	}

	.workspace-on .run-note {
		font-size: 0.68rem;
	}

	.workspace-on .run {
		font-size: 0.78rem;
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
		line-height: 1.35;
	}

	.workspace-on .results.has-open {
		overflow: auto;
	}

	@media (max-width: 860px) {
		.site h1 {
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
		.compare-table {
			grid-template-columns: minmax(7rem, 0.9fr) repeat(var(--cols), 1fr);
			font-size: 0.78rem;
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
		.workspace-on .metrics.three {
			grid-template-columns: 1fr;
		}
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
