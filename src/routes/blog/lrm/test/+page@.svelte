<script>
	import {
		calculate,
		comparePathways,
		excelDefaults,
		defaultChargeKg,
		defaultMix,
		defaultCostScenario,
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
	let unitsPerSite = 2;
	let sitesPerDay = 1;
	let teams = 3;
	let daysPerYear = 100;
	let labourPerUnit = 300;
	let markupPct = 10;
	let distanceBand = '>90%';
	let warehousePerMonth = 1000;
	let machineType = MACHINE_HIGH;
	let destructionTech = 'Rotary';
	let facilityStatus = 'New';
	let location = 'In-country';
	let salePrice = 5;
	let refillMode = 'Refilling';
	let virginPrice = 0;
	let mixR32 = 5;
	let mixR410a = 65;
	let mixR22 = 30;
	let costScenarioMode = 'auto';
	let costScenarioManual = 'Medium';

	$: residential = sector === SECTOR_RESIDENTIAL;
	$: commercial = sector === SECTOR_COMMERCIAL;
	$: ready = Boolean(sector && pathway);
	$: pathways = residential
		? [
				{ id: PATHWAY_DESTRUCTION, title: 'Destruction', body: 'Destroy recovered refrigerant at an end-use facility.' },
				{ id: PATHWAY_RECLAMATION, title: 'Reclamation', body: 'Reclaim to specification and return gas to the market.' }
			]
		: [
				{ id: PATHWAY_DESTRUCTION, title: 'Destruction', body: 'Destroy recovered refrigerant at an end-use facility.' },
				{ id: PATHWAY_RECLAMATION, title: 'Reclamation', body: 'Reclaim to specification and return gas to the market.' },
				{ id: PATHWAY_RECYCLING, title: 'Recycling', body: 'Recover and refill — with or without additional recycling.' }
			];

	$: mixSum = mixTotal({ r32: mixR32, r410a: mixR410a, r22: mixR22 });
	$: mixOk = Math.round(mixSum * 1e6) / 1e6 === 100;

	$: inputSnapshot = {
		sector,
		pathway,
		chargeSizeKg,
		recoverablePct,
		unitsPerSite,
		sitesPerDay,
		teams,
		daysPerYear,
		labourPerUnit,
		markupPct,
		distanceBand,
		warehousePerMonth,
		machineType: commercial ? MACHINE_HIGH : machineType,
		destructionTech,
		facilityStatus,
		location: pathway === PATHWAY_RECYCLING ? 'In-country' : location,
		salePrice,
		refillMode,
		virginPrice,
		mix: { r32: mixR32, r410a: mixR410a, r22: mixR22 },
		costScenarioOverride: costScenarioMode === 'auto' ? null : costScenarioManual
	};

	$: result = ready ? calculate(inputSnapshot) : null;
	$: comparison = ready ? comparePathways(inputSnapshot) : null;
	$: vis = result?.visibility;
	$: autoScenario = result ? defaultCostScenario(result.inputs.annualKg) : 'Medium';

	function applyDefaults(nextSector, nextPathway) {
		const d = excelDefaults(nextSector, nextPathway);
		chargeSizeKg = d.chargeSizeKg;
		chargeCappedNote = false;
		recoverablePct = d.recoverablePct;
		unitsPerSite = d.unitsPerSite;
		sitesPerDay = d.sitesPerDay;
		teams = d.teams;
		daysPerYear = d.daysPerYear;
		labourPerUnit = d.labourPerUnit;
		markupPct = d.markupPct;
		distanceBand = d.distanceBand;
		warehousePerMonth = d.warehousePerMonth;
		machineType = d.machineType;
		destructionTech = d.destructionTech;
		facilityStatus = d.facilityStatus;
		location = d.location;
		salePrice = d.salePrice;
		refillMode = d.refillMode;
		virginPrice = d.virginPrice;
		mixR32 = d.mix.r32;
		mixR410a = d.mix.r410a;
		mixR22 = d.mix.r22;
		costScenarioMode = 'auto';
		filledFromDefaults = true;
	}

	function chooseSector(next) {
		const sectorChanged = sector !== next;
		sector = next;
		if (next === SECTOR_RESIDENTIAL && pathway === PATHWAY_RECYCLING) pathway = '';
		if (next === SECTOR_COMMERCIAL) machineType = MACHINE_HIGH;
		if (sectorChanged) {
			chargeSizeKg = defaultChargeKg(next);
			chargeCappedNote = false;
			const mix = defaultMix(next);
			mixR32 = mix.r32;
			mixR410a = mix.r410a;
			mixR22 = mix.r22;
			machineType = next === SECTOR_COMMERCIAL ? MACHINE_HIGH : MACHINE_BASIC;
		}
		if (pathway && !filledFromDefaults) applyDefaults(next, pathway);
		else if (pathway && sectorChanged && filledFromDefaults) {
			chargeSizeKg = defaultChargeKg(next);
			const mix = defaultMix(next);
			mixR32 = mix.r32;
			mixR410a = mix.r410a;
			mixR22 = mix.r22;
			machineType = next === SECTOR_COMMERCIAL ? MACHINE_HIGH : machineType;
		}
	}

	function choosePathway(next) {
		pathway = next;
		if (next === PATHWAY_RECYCLING) location = 'In-country';
		if (!filledFromDefaults && sector) applyDefaults(sector, next);
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

	$: opexRows = result
		? [
				{ name: 'On-site recovery', value: result.opex.onSite, hide: false },
				{ name: 'Mark-up for refilling / recycling', value: result.opex.refillMarkup, hide: vis.hideRefill },
				{ name: 'Virgin refrigerant for refilling', value: result.opex.virgin, hide: vis.hideRefill },
				{ name: 'Central facility recovery', value: result.opex.central, hide: false },
				{ name: 'Warehouse storage', value: result.opex.warehouse, hide: false },
				{ name: 'Transport & handling to end-use', value: result.opex.transport, hide: pathway === PATHWAY_RECYCLING },
				{ name: 'End-use processing', value: result.opex.processing, hide: pathway === PATHWAY_RECYCLING },
				{ name: 'Sale price credit', value: -result.opex.saleCredit, hide: vis.hideSale, credit: true }
			].filter((row) => !row.hide)
		: [];

	$: opexScale = Math.max(...opexRows.map((r) => Math.abs(r.value)), 0.0001);

	$: capexRows = result
		? [
				{ name: 'Recovery machines (basic)', item: result.capex.machinesBasic },
				{ name: 'Recovery accessories (basic)', item: result.capex.accessoriesBasic },
				{ name: 'Recovery accessories (AC pump-down)', item: result.capex.accessoriesPumpdown },
				{ name: 'Recovery machines (high capacity)', item: result.capex.machinesHigh },
				{ name: 'Recovery accessories (high capacity)', item: result.capex.accessoriesHigh },
				{ name: '12L cylinders (small, ~10 kg)', item: result.capex.cylinders12L },
				{ name: '60L cylinders (large, ~50 kg)', item: result.capex.cylinders60L },
				{ name: 'Refrigerant identifiers', item: result.capex.identifiers },
				{ name: 'Ton tanks', item: result.capex.tonTanks },
				{ name: 'Trucks / lorries', item: result.capex.trucks },
				{ name: 'Tracking & monitoring system', item: result.capex.tracking },
				{ name: 'Destruction / reclamation facility', item: result.capex.facility },
				{ name: 'Admin & licensing', item: result.capex.admin },
				{ name: 'Reclamation operators (training)', item: result.capex.operators },
				{ name: 'Full gas chromatography lab', item: result.capex.gcLab }
			].filter((row) => !row.item.hidden)
		: [];

	$: capexScale = Math.max(...capexRows.map((r) => r.item.cost), 0.0001);

	$: compareCols = comparison
		? [PATHWAY_DESTRUCTION, PATHWAY_RECLAMATION, PATHWAY_RECYCLING].filter((p) => comparison[p])
		: [];

	$: sectorBlurb = residential
		? 'Units are pumped down on-site and aggregated at a central facility for refrigerant recovery.'
		: 'Mainly on-site recovery from decommissioned units; refilling is covered under the Recycling pathway.';
</script>

<svelte:head>
	<title>Refrigerant Lifecycle Explorer — Cascade Climate (unlisted test)</title>
	<meta
		name="description"
		content="Unlisted prototype of the Refrigerant Lifecycle Explorer using LRM Cost Model V4.2 (SEA)."
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

<div class="lrm-explorer">
	<div class="wrap">
		<header class="site">
			<div class="eyebrow">Lifecycle refrigerant management · Prototype</div>
			<h1>Refrigerant Lifecycle Explorer</h1>
			<p class="lede">
				This tool lays bare the end-to-end refrigerant value chain — from recovery through
				reclamation, recycling, or destruction — and the costs that sit in each step. Built from LRM
				Cost Model V4.2 (Southeast Asia).
			</p>
			<div class="prototype-banner">
				Unlisted prototype. Cost figures follow the V4.2 workbook (opex USD/kg shown to two decimals;
				engine uses full precision). For exploration, not formal decision-making.
			</div>
		</header>

		<section class="panel branch" aria-labelledby="branch-heading">
			<h2 id="branch-heading">1. Choose a sector</h2>
			<p class="panel-intro">This is the main branch. Everything downstream follows from it.</p>
			<div class="choice-grid two">
				<button
					type="button"
					class="choice"
					class:selected={sector === SECTOR_RESIDENTIAL}
					on:click={() => chooseSector(SECTOR_RESIDENTIAL)}
				>
					<span class="choice-kicker">Small capacity</span>
					<span class="choice-title">Residential AC</span>
					<span class="choice-body">Pump-down on-site, recovery at a central facility.</span>
				</button>
				<button
					type="button"
					class="choice"
					class:selected={sector === SECTOR_COMMERCIAL}
					on:click={() => chooseSector(SECTOR_COMMERCIAL)}
				>
					<span class="choice-kicker">Large capacity</span>
					<span class="choice-title">Commercial HVAC</span>
					<span class="choice-body">On-site recovery from decommissioned units.</span>
				</button>
			</div>
			{#if sector}
				<p class="assumption">{sectorBlurb}</p>
			{/if}
		</section>

		{#if sector}
			<section class="panel branch" aria-labelledby="pathway-heading">
				<h2 id="pathway-heading">2. Choose the end-use of recovered refrigerant</h2>
				<p class="panel-intro">
					The second branch. After you choose, only the inputs that apply to this pathway appear.
				</p>
				<div class="choice-grid" class:three={!residential} class:two={residential}>
					{#each pathways as p}
						<button
							type="button"
							class="choice"
							class:selected={pathway === p.id}
							on:click={() => choosePathway(p.id)}
						>
							<span class="choice-title">{p.title}</span>
							<span class="choice-body">{p.body}</span>
						</button>
					{/each}
				</div>
			</section>
		{/if}

		{#if ready && result}
			<div class="layout">
				<section class="panel controls" aria-labelledby="build-heading">
					<h2 id="build-heading">Build the value chain</h2>
					<p class="panel-intro">
						Amber-style fields are inputs. Bold figures are calculated from the V4.2 model.
					</p>

					<div class="field-group">
						<div class="group-label">On-site recovery</div>

						<div class="field">
							<label for="chargeSizeKg">Average charge size per unit (kg)</label>
							<input
								id="chargeSizeKg"
								type="number"
								min="0"
								step="0.01"
								bind:value={chargeSizeKg}
							/>
							{#if chargeCappedNote}
								<p class="field-note warn">
									Residential charge size is capped at {RESIDENTIAL_CHARGE_CAP_KG} kg.
								</p>
							{:else}
								<p class="field-hint">
									Default {residential ? '0.75 kg' : '100 kg'} for this sector.
									{#if residential}Maximum {RESIDENTIAL_CHARGE_CAP_KG} kg.{/if}
								</p>
							{/if}
						</div>

						<div class="field">
							<label for="recoverablePct">Recoverable refrigerant per unit (%)</label>
							<input id="recoverablePct" type="number" min="0" max="100" step="1" bind:value={recoverablePct} />
						</div>

						<div class="computed">
							<div>
								<span class="k">Available per unit</span>
								<span class="v">{formatKg(result.inputs.availablePerUnit, 2)} kg</span>
							</div>
						</div>

						<div class="field">
							<label for="unitsPerSite">Units recovered per site per team</label>
							<input id="unitsPerSite" type="number" min="0" step="1" bind:value={unitsPerSite} />
						</div>
						<div class="field">
							<label for="sitesPerDay">Recovery sites per day per team</label>
							<input id="sitesPerDay" type="number" min="0" step="1" bind:value={sitesPerDay} />
						</div>
						<div class="field">
							<label for="teams">Recovery teams per recovery day</label>
							<input id="teams" type="number" min="0" step="1" bind:value={teams} />
						</div>
						<div class="field">
							<label for="daysPerYear">Recovery days per year</label>
							<input id="daysPerYear" type="number" min="0" step="1" bind:value={daysPerYear} />
						</div>

						<div class="computed three">
							<div>
								<span class="k">Units / day</span>
								<span class="v">{formatKg(result.inputs.unitsPerDay, 0)}</span>
							</div>
							<div>
								<span class="k">kg / day</span>
								<span class="v">{formatKg(result.inputs.kgPerDay, 2)}</span>
							</div>
							<div>
								<span class="k">kg / year</span>
								<span class="v">{formatKg(result.inputs.annualKg, 0)}</span>
							</div>
						</div>

						<div class="field">
							<label for="labourPerUnit">Recovery labour cost per unit (USD)</label>
							<input id="labourPerUnit" type="number" min="0" step="1" bind:value={labourPerUnit} />
						</div>
						<div class="field">
							<label for="markupPct">Mark-up % per extra unit at a location</label>
							<input id="markupPct" type="number" min="0" step="0.1" bind:value={markupPct} />
						</div>
						<div class="field">
							<label for="distanceBand">Share of refrigerant sourced within 50 km</label>
							<select id="distanceBand" bind:value={distanceBand}>
								<option value=">90%">&gt;90%</option>
								<option value="50%-90%">50%–90%</option>
								<option value="<50%">&lt;50%</option>
							</select>
						</div>

						<div class="computed">
							<div>
								<span class="k">Labour per location / team</span>
								<span class="v">{formatUsd(result.inputs.labourPerLocation)}</span>
							</div>
							<div>
								<span class="k">On-site cost / day</span>
								<span class="v">{formatUsd(result.inputs.onSitePerDay)}</span>
							</div>
						</div>
					</div>

					<div class="field-group">
						<div class="group-label">Central facility</div>
						<div class="field">
							<label for="warehousePerMonth">Warehouse storage (USD / month)</label>
							<input id="warehousePerMonth" type="number" min="0" step="1" bind:value={warehousePerMonth} />
						</div>
						{#if commercial}
							<p class="field-hint">Recovery machines are high-capacity only in commercial HVAC.</p>
						{:else}
							<div class="field">
								<label for="machineType">Recovery machine type</label>
								<select id="machineType" bind:value={machineType}>
									<option value={MACHINE_BASIC}>Basic</option>
									<option value={MACHINE_HIGH}>High Capacity</option>
								</select>
							</div>
						{/if}
						<div class="field">
							<label for="costScenarioMode">Cost scenario (end-use, transport, central facility)</label>
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
						<p class="field-hint">
							Volume rule: &lt;10,000 kg/yr High · 10,000–50,000 Medium · &gt;50,000 Low. Currently
							{formatKg(result.inputs.annualKg, 0)} kg/yr → {autoScenario}.
						</p>
					</div>

					<div class="field-group">
						<div class="group-label">End-use · {pathway}</div>
						{#if !vis.hideTech}
							<div class="field">
								<label for="destructionTech">Destruction technology</label>
								<select id="destructionTech" bind:value={destructionTech}>
									<option>Rotary</option>
									<option>Cement</option>
									<option>Plasma Arc</option>
								</select>
							</div>
						{/if}
						{#if !vis.hideFacility}
							<div class="field">
								<label for="facilityStatus">Facility status</label>
								<select id="facilityStatus" bind:value={facilityStatus}>
									<option>Existing</option>
									<option>Retrofit</option>
									<option>New</option>
								</select>
							</div>
						{/if}
						{#if vis.hideLocationChoice}
							<p class="field-hint">Recycling is modelled as in-country only.</p>
						{:else}
							<div class="field">
								<label for="location">End-use location</label>
								<select id="location" bind:value={location}>
									<option>In-country</option>
									<option>Exported</option>
								</select>
							</div>
						{/if}
						{#if !vis.hideSale}
							<div class="field">
								<label for="salePrice">Blended sale price of reclaimed refrigerant (USD/kg)</label>
								<input id="salePrice" type="number" min="0" step="0.01" bind:value={salePrice} />
							</div>
						{/if}
						{#if !vis.hideRefill}
							<div class="field">
								<label for="refillMode">Refilling or recycling + refilling</label>
								<select id="refillMode" bind:value={refillMode}>
									<option>Refilling</option>
									<option>Recycling + Refilling</option>
								</select>
							</div>
							<div class="field">
								<label for="virginPrice">Price of virgin refrigerant for refilling (USD/kg)</label>
								<input id="virginPrice" type="number" min="0" step="0.01" bind:value={virginPrice} />
							</div>
						{/if}
					</div>

					<div class="field-group">
						<div class="group-label">Refrigerant mix</div>
						<p class="field-hint">Must total 100% of recovered volume.</p>
						<div class="field">
							<label for="mixR32">R-32 share (%)</label>
							<input id="mixR32" type="number" min="0" max="100" step="1" bind:value={mixR32} />
						</div>
						<div class="field">
							<label for="mixR410a">R-410A share (%)</label>
							<input id="mixR410a" type="number" min="0" max="100" step="1" bind:value={mixR410a} />
						</div>
						<div class="field">
							<label for="mixR22">R-22 share (%)</label>
							<input id="mixR22" type="number" min="0" max="100" step="1" bind:value={mixR22} />
						</div>
						<div class="computed" class:bad={!mixOk}>
							<div>
								<span class="k">Total mix</span>
								<span class="v">{formatKg(mixSum, 0)}%</span>
							</div>
						</div>
						{#if !mixOk}
							<p class="field-note warn">
								Refrigerant mix must total 100%. Adjust R-32, R-410A, and R-22 until the total is
								100%.
							</p>
						{/if}
					</div>
				</section>

				<section class="panel results" aria-labelledby="results-heading">
					<div class="model-tag">V4.2 SEA model outputs</div>
					<h2 id="results-heading">See the cost stack</h2>
					<p class="summary">
						{residential ? 'Residential AC' : 'Commercial HVAC'}
						· {pathway}
						{#if pathway === PATHWAY_DESTRUCTION}
							· {destructionTech}
						{/if}
						· {result.inputs.location}
						· {result.inputs.costScenario} cost case
						· {formatKg(result.inputs.annualKg, 0)} kg/year
					</p>

					<div class="chain" aria-hidden="true">
						<span>Recovery</span>
						<span class="arrow">→</span>
						<span>Central facility</span>
						<span class="arrow">→</span>
						<span>{pathway === PATHWAY_RECYCLING ? 'Recycling / refill' : 'Transport'}</span>
						{#if pathway !== PATHWAY_RECYCLING}
							<span class="arrow">→</span>
							<span>{pathway}</span>
						{/if}
					</div>

					<div class="metrics">
						<div class="metric">
							<div class="label">Total gross opex</div>
							<div class="value">{formatUsd(result.opex.gross)}</div>
							<span class="unit">USD / kg</span>
						</div>
						<div class="metric">
							<div class="label">Total net opex</div>
							<div class="value">{formatUsd(result.opex.net)}</div>
							<span class="unit">USD / kg · {formatUsd(result.opex.netPerYear)} / year</span>
						</div>
						<div class="metric wide">
							<div class="label">Total capex</div>
							<div class="value">{formatUsd(result.capex.total)}</div>
							<span class="unit">USD · one-off</span>
						</div>
					</div>

					<div class="breakdown">
						<h3>Operational cost breakdown</h3>
						{#each opexRows as row}
							<div class="bar-row" class:credit={row.credit}>
								<span class="name">{row.name}</span>
								<div class="bar-track">
									<div class="bar-fill" style="width: {opexBar(Math.abs(row.value), opexScale)}%" />
								</div>
								<span class="amt">{row.credit ? '−' + formatUsd(Math.abs(row.value)) : formatUsd(row.value)}/kg</span>
							</div>
						{/each}
					</div>

					<div class="breakdown capex-breakdown">
						<h3>Capital cost breakdown</h3>
						{#each capexRows as row}
							<div class="bar-row" class:na={row.item.na}>
								<span class="name">{row.name}</span>
								<div class="bar-track">
									<div class="bar-fill" style="width: {row.item.na ? 0 : opexBar(row.item.cost, capexScale)}%" />
								</div>
								<span class="amt">
									{#if row.item.na}
										{row.item.label}
									{:else}
										<span class="units">{row.item.units}</span>
										{formatUsd(row.item.cost)}
									{/if}
								</span>
							</div>
						{/each}
						<p class="subtotal">
							Recovery capex {formatUsd(result.capex.recoveryTotal)}
							{#if !vis.hideEndUseCapex}
								· Destruction/reclamation capex {formatUsd(result.capex.drTotal)}
							{/if}
						</p>
					</div>
				</section>
			</div>

			{#if compareCols.length}
				<section class="panel compare" aria-labelledby="compare-heading">
					<h2 id="compare-heading">Same recovery chain, different end-use</h2>
					<p class="panel-intro">
						Holds your on-site and central-facility inputs fixed, then runs each available pathway on
						those parameters.
					</p>
					<div class="compare-table" style="--cols: {compareCols.length}">
						<div class="compare-head sticky-col">Metric</div>
						{#each compareCols as p}
							<div class="compare-head" class:current={p === pathway}>{p}</div>
						{/each}
						<div class="sticky-col">Net opex (USD/kg)</div>
						{#each compareCols as p}
							<div class:current={p === pathway}>{formatUsd(comparison[p].netOpex)}</div>
						{/each}
						<div class="sticky-col">Net opex / year</div>
						{#each compareCols as p}
							<div class:current={p === pathway}>{formatUsd(comparison[p].netOpexPerYear)}</div>
						{/each}
						<div class="sticky-col">Total capex</div>
						{#each compareCols as p}
							<div class:current={p === pathway}>{formatUsd(comparison[p].capex)}</div>
						{/each}
						<div class="sticky-col">Grand total</div>
						{#each compareCols as p}
							<div class:current={p === pathway}>{formatUsd(comparison[p].grandTotal)}</div>
						{/each}
					</div>
				</section>
			{/if}
		{/if}

		<p class="page-foot">
			LRM Cost Model V4.2 (SEA) · Unlisted prototype · Costs for exploration, not formal
			decision-making
		</p>
	</div>
</div>

<style>
	.lrm-explorer {
		--bg: #023c40;
		--header: #e1fcf7;
		--ink: #e1fcf7;
		--ink-soft: #b7ddd6;
		--muted: #8fb8b1;
		--line: rgba(225, 252, 247, 0.18);
		--panel: rgba(225, 252, 247, 0.07);
		--panel-solid: rgba(225, 252, 247, 0.1);
		--accent: #7fd6c5;
		--accent-deep: #e1fcf7;
		--warn: #f0d7a0;
		--warn-bg: rgba(240, 215, 160, 0.14);
		--dummy: #f0d7a0;
		--dummy-bg: rgba(240, 215, 160, 0.12);
		--shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
		--radius: 4px;
		--font: Inter, sans-serif;

		min-height: 100vh;
		color: var(--ink);
		font-family: var(--font);
		line-height: 1.5;
		background: var(--bg);
		position: relative;
	}

	.lrm-explorer::before {
		content: '';
		position: fixed;
		inset: 0;
		pointer-events: none;
		opacity: 0.22;
		background-image:
			linear-gradient(rgba(225, 252, 247, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(225, 252, 247, 0.06) 1px, transparent 1px);
		background-size: 48px 48px;
		mask-image: linear-gradient(180deg, black, transparent 85%);
	}

	.wrap {
		width: min(1120px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 2.25rem 0 4rem;
		position: relative;
		z-index: 1;
	}

	.site {
		margin-bottom: 2rem;
		color: var(--header);
	}

	.eyebrow {
		display: inline-block;
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--header);
		font-weight: 600;
		margin-bottom: 0.65rem;
	}

	.site h1 {
		font-family: var(--font);
		font-weight: 600;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.12;
		margin: 0 0 0.65rem;
		letter-spacing: -0.02em;
		color: var(--header);
	}

	.lede {
		max-width: 46rem;
		color: var(--header);
		opacity: 0.88;
		font-size: 1.05rem;
		margin: 0;
		line-height: 1.5;
	}

	.prototype-banner {
		margin-top: 1.25rem;
		padding: 0.75rem 1rem;
		background: var(--dummy-bg);
		border-left: 3px solid #c9a45a;
		color: var(--dummy);
		font-size: 0.92rem;
		max-width: 46rem;
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(280px, 0.95fr) minmax(300px, 1.05fr);
		gap: 1.25rem;
		align-items: start;
		margin-top: 1.25rem;
	}

	.panel {
		background: var(--panel);
		backdrop-filter: blur(10px);
		border: 1px solid var(--line);
		box-shadow: var(--shadow);
		border-radius: var(--radius);
		padding: 1.35rem 1.35rem 1.5rem;
	}

	.branch {
		margin-bottom: 1.25rem;
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
		background: rgba(2, 60, 64, 0.35);
		border: 1px solid rgba(225, 252, 247, 0.28);
		border-radius: var(--radius);
		padding: 1rem 1.05rem 1.05rem;
		font: inherit;
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			box-shadow 0.2s ease;
	}

	.choice:hover {
		border-color: rgba(225, 252, 247, 0.5);
	}

	.choice.selected {
		border-color: var(--accent);
		background: rgba(127, 214, 197, 0.16);
		box-shadow: 0 0 0 3px rgba(127, 214, 197, 0.16);
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
		margin-bottom: 0.3rem;
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

	.group-label {
		font-size: 0.75rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: var(--accent-deep);
		font-weight: 600;
		margin-bottom: 0.85rem;
	}

	.field {
		margin-bottom: 0.85rem;
	}

	label {
		display: block;
		font-size: 0.88rem;
		font-weight: 500;
		margin-bottom: 0.35rem;
		color: var(--header);
	}

	select,
	input[type='number'] {
		width: 100%;
		appearance: none;
		background: rgba(2, 60, 64, 0.55);
		border: 1px solid rgba(225, 252, 247, 0.28);
		border-radius: var(--radius);
		padding: 0.65rem 0.75rem;
		font: inherit;
		color: var(--header);
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	select {
		background:
			linear-gradient(45deg, transparent 50%, var(--header) 50%) right 14px top 16px / 6px 6px
				no-repeat,
			linear-gradient(135deg, var(--header) 50%, transparent 50%) right 9px top 16px / 6px 6px
				no-repeat,
			rgba(2, 60, 64, 0.55);
		padding-right: 2.2rem;
	}

	select:hover,
	input[type='number']:hover {
		border-color: rgba(225, 252, 247, 0.5);
	}

	select:focus,
	input[type='number']:focus {
		outline: none;
		border-color: var(--accent);
		box-shadow: 0 0 0 3px rgba(127, 214, 197, 0.2);
	}

	.field-hint,
	.field-note {
		margin: 0.4rem 0 0;
		font-size: 0.8rem;
		color: var(--muted);
		line-height: 1.4;
	}

	.field-note.warn {
		color: var(--warn);
		background: var(--warn-bg);
		padding: 0.45rem 0.6rem;
		border-left: 3px solid #c9a45a;
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
		border-color: #c9a45a;
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
		position: sticky;
		top: 1rem;
		max-height: calc(100vh - 2rem);
		overflow: auto;
	}

	.model-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--accent);
		background: rgba(127, 214, 197, 0.12);
		padding: 0.28rem 0.55rem;
		border-radius: 2px;
		margin-bottom: 0.85rem;
	}

	.model-tag::before {
		content: '';
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		background: var(--accent);
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
		gap: 0.75rem;
		margin-bottom: 1.25rem;
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
		font-size: 0.78rem;
		color: var(--muted);
		margin-bottom: 0.3rem;
	}

	.metric .value {
		font-size: 1.55rem;
		font-weight: 600;
		letter-spacing: -0.02em;
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

	.capex-breakdown {
		margin-top: 1.15rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
	}

	.bar-row {
		display: grid;
		grid-template-columns: 9.5rem 1fr auto;
		gap: 0.65rem;
		align-items: center;
		margin-bottom: 0.55rem;
		font-size: 0.88rem;
	}

	.bar-row .name {
		color: var(--ink-soft);
	}

	.bar-row .amt {
		color: var(--ink);
		font-variant-numeric: tabular-nums;
		min-width: 7.5rem;
		text-align: right;
	}

	.bar-row .units {
		color: var(--muted);
		margin-right: 0.4rem;
		font-size: 0.78rem;
	}

	.bar-row.na .name,
	.bar-row.na .amt {
		color: var(--muted);
		font-style: italic;
	}

	.bar-track {
		height: 0.45rem;
		background: rgba(225, 252, 247, 0.14);
		border-radius: 99px;
		overflow: hidden;
	}

	.bar-fill {
		height: 100%;
		background: linear-gradient(90deg, #3d9a82, #7fd6c5);
		border-radius: 99px;
		transition: width 0.45s ease;
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
		background: rgba(127, 214, 197, 0.1);
		font-weight: 600;
		font-size: 0.78rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--accent-deep);
		border-top: none;
	}

	.compare-table > div.current {
		background: rgba(127, 214, 197, 0.12);
	}

	.page-foot {
		margin-top: 2rem;
		color: var(--muted);
		font-size: 0.82rem;
	}

	@media (max-width: 860px) {
		.layout,
		.choice-grid.two,
		.choice-grid.three,
		.computed,
		.computed.three,
		.metrics {
			grid-template-columns: 1fr;
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
	}
</style>
