<script>
	import { calculateCosts } from '$lib/lrm/calculate.js';

	/** Prefix form ids when more than one instance could theoretically exist. */
	export let idPrefix = 'lrm';

	let geography = 'Southeast Asia';
	let refrigerantClass = 'Both';
	let sector = 'Commercial Refrigeration';
	let endUse = 'Recycling';
	let technology = 'Rotary/Cement Kiln';
	let location = 'In-country';
	let effort = 'Rural';
	let costScenario = 'Medium';
	let recoveryEquipment = 'High Capacity';
	let facilityType = 'New Facility';

	let scenarioSummary = '';
	let opexValue = '—';
	let capexValue = '—';
	let opexRows = [];
	let capexRows = [];

	$: showTech = endUse === 'Destruction';
	$: showFacility = endUse === 'Destruction' || endUse === 'Reclamation';
	$: selections = {
		geography,
		refrigerantClass,
		sector,
		endUse,
		technology,
		location,
		effort,
		costScenario,
		recoveryEquipment,
		facilityType
	};

	function formatMoney(n, digits = 2) {
		return n.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
		});
	}

	function formatCompact(n) {
		if (n >= 1000000) return '$' + (n / 1000000).toFixed(2) + 'M';
		if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'k';
		return formatMoney(n, 0);
	}

	function formatOpexLine(line) {
		if (!line.available) return line.label;
		return formatMoney(line.value) + '/kg';
	}

	function formatCapexLine(line) {
		if (!line.available) return line.label;
		return formatCompact(line.value);
	}

	function articleFor(s) {
		return /^[AEIOU]/i.test(s) ? 'an' : 'a';
	}

	function buildSummary(sel) {
		const techBit =
			sel.endUse === 'Destruction' ? ` using ${sel.technology.toLowerCase()} technology` : '';
		const facilityBit =
			sel.endUse === 'Recycling' ? '' : ` via a ${sel.facilityType.toLowerCase()}`;

		return `In ${sel.geography}, ${articleFor(sel.sector)} ${sel.sector.toLowerCase()} pathway recovers ${sel.refrigerantClass} for ${sel.endUse.toLowerCase()}${techBit}, handled ${sel.location.toLowerCase()} under ${sel.effort.toLowerCase()} conditions (${sel.costScenario.toLowerCase()} cost case${facilityBit}).`;
	}

	function barWidth(line, scale) {
		if (!line.available || !scale) return 0;
		return Math.min(100, (line.value / scale) * 100);
	}

	function render() {
		const sel = selections;
		const costs = calculateCosts(sel);

		const opexNumeric = [costs.recovery, costs.transport, costs.processing]
			.filter((l) => l.available)
			.map((l) => l.value);
		const opexScale = Math.max(...opexNumeric, 0.0001);

		const capexLines = [
			{ name: 'Recovery equipment', line: costs.recoveryEquip },
			{ name: 'Recovery + recycling machine', line: costs.recyclingMachine },
			{ name: 'Refrigerant identifiers', line: costs.identifiers },
			{ name: 'Recovery cylinders', line: costs.cylinders },
			{ name: 'Destruction / reclamation facility', line: costs.facility },
			{ name: 'Reclamation training', line: costs.training },
			{ name: 'GC — per analysis', line: costs.gcAnalysis },
			{ name: 'GC — equipment', line: costs.gcEquip }
		];
		const capexNumeric = capexLines.filter((r) => r.line.available).map((r) => r.line.value);
		const capexScale = Math.max(...capexNumeric, 0.0001);

		scenarioSummary = buildSummary(sel);
		opexValue = formatMoney(costs.opexTotal);
		capexValue = formatCompact(costs.capexTotal);

		opexRows = [
			{ name: 'Recovery', line: costs.recovery, bar: barWidth(costs.recovery, opexScale) },
			{
				name: 'Transport & handling',
				line: costs.transport,
				bar: barWidth(costs.transport, opexScale)
			},
			{
				name: 'Post-recovery processing',
				line: costs.processing,
				bar: barWidth(costs.processing, opexScale)
			}
		].map((row) => ({
			...row,
			amt: formatOpexLine(row.line),
			na: !row.line.available
		}));

		capexRows = capexLines.map((row) => ({
			name: row.name,
			amt: formatCapexLine(row.line),
			bar: barWidth(row.line, capexScale),
			na: !row.line.available
		}));
	}

	$: {
		selections;
		render();
	}
</script>

<div class="cost-model">
	<div class="layout">
		<section class="controls" aria-labelledby="{idPrefix}-build-heading">
			<p class="kind">Model input</p>
			<h2 id="{idPrefix}-build-heading">Build a scenario</h2>
			<p class="panel-intro">
				Choose the same major inputs used in the LRM Cost Model V2.3 workbook.
			</p>

			<div class="field-group">
				<div class="group-label">Operational expenditure</div>

				<div class="field">
					<label for="{idPrefix}-geography">Geography</label>
					<select id="{idPrefix}-geography" bind:value={geography}>
						<option value="Global" selected={geography === 'Global'}>Global</option>
						<option value="Southeast Asia" selected={geography === 'Southeast Asia'}>Southeast Asia</option>
					</select>
				</div>

				<div class="field">
					<label for="{idPrefix}-refrigerantClass">Refrigerant class</label>
					<select id="{idPrefix}-refrigerantClass" bind:value={refrigerantClass}>
						<option value="ODS" selected={refrigerantClass === 'ODS'}>ODS</option>
						<option value="HFCs" selected={refrigerantClass === 'HFCs'}>HFCs</option>
						<option value="Both" selected={refrigerantClass === 'Both'}>Both</option>
					</select>
				</div>

				<div class="field">
					<label for="{idPrefix}-sector">Sector / system type</label>
					<select id="{idPrefix}-sector" bind:value={sector}>
						<option value="Domestic Refrigeration" selected={sector === 'Domestic Refrigeration'}>Domestic Refrigeration</option>
						<option value="Domestic HVAC" selected={sector === 'Domestic HVAC'}>Domestic HVAC</option>
						<option value="Commercial Refrigeration" selected={sector === 'Commercial Refrigeration'}>Commercial Refrigeration</option>
						<option value="Commercial HVAC" selected={sector === 'Commercial HVAC'}>Commercial HVAC</option>
						<option value="Transport Refrigeration" selected={sector === 'Transport Refrigeration'}>Transport Refrigeration</option>
						<option value="Mobile AC" selected={sector === 'Mobile AC'}>Mobile AC</option>
						<option value="Industrial Refrigeration" selected={sector === 'Industrial Refrigeration'}>Industrial Refrigeration</option>
					</select>
				</div>

				<div class="field">
					<label for="{idPrefix}-endUse">End-use of recovered refrigerant</label>
					<select id="{idPrefix}-endUse" bind:value={endUse}>
						<option value="Destruction" selected={endUse === 'Destruction'}>Destruction</option>
						<option value="Reclamation" selected={endUse === 'Reclamation'}>Reclamation</option>
						<option value="Recycling" selected={endUse === 'Recycling'}>Recycling</option>
					</select>
				</div>

				{#if showTech}
					<div class="field">
						<label for="{idPrefix}-technology">Destruction technology</label>
						<select id="{idPrefix}-technology" bind:value={technology}>
							<option value="Rotary/Cement Kiln" selected={technology === 'Rotary/Cement Kiln'}>Rotary/Cement Kiln</option>
							<option value="Plasma Arc" selected={technology === 'Plasma Arc'}>Plasma Arc</option>
						</select>
					</div>
				{/if}

				<div class="field">
					<label for="{idPrefix}-location">In-country or exported</label>
					<select id="{idPrefix}-location" bind:value={location}>
						<option value="In-country" selected={location === 'In-country'}>In-country</option>
						<option value="Exported" selected={location === 'Exported'}>Exported</option>
					</select>
				</div>

				<div class="field">
					<label for="{idPrefix}-effort">Effort level</label>
					<select id="{idPrefix}-effort" bind:value={effort}>
						<option value="Urban" selected={effort === 'Urban'}>Urban</option>
						<option value="Rural" selected={effort === 'Rural'}>Rural</option>
					</select>
				</div>

				<div class="field">
					<label for="{idPrefix}-costScenario">Cost scenario</label>
					<select id="{idPrefix}-costScenario" bind:value={costScenario}>
						<option value="Low" selected={costScenario === 'Low'}>Low</option>
						<option value="Medium" selected={costScenario === 'Medium'}>Medium</option>
						<option value="High" selected={costScenario === 'High'}>High</option>
					</select>
				</div>
			</div>

			<div class="field-group">
				<div class="group-label">Capital expenditure</div>

				<div class="field">
					<label for="{idPrefix}-recoveryEquipment">Recovery equipment</label>
					<select id="{idPrefix}-recoveryEquipment" bind:value={recoveryEquipment}>
						<option value="Basic" selected={recoveryEquipment === 'Basic'}>Basic</option>
						<option value="High Capacity" selected={recoveryEquipment === 'High Capacity'}>High Capacity</option>
					</select>
				</div>

				{#if showFacility}
					<div class="field">
						<label for="{idPrefix}-facilityType">Destruction / reclamation facility</label>
						<select id="{idPrefix}-facilityType" bind:value={facilityType}>
							<option value="New Facility" selected={facilityType === 'New Facility'}>New Facility</option>
							<option value="Retrofit" selected={facilityType === 'Retrofit'}>Retrofit</option>
						</select>
					</div>
				{/if}
			</div>
		</section>

		<section class="results" aria-labelledby="{idPrefix}-results-heading">
			<p class="kind">Model output</p>
			<h2 id="{idPrefix}-results-heading">See your scenario</h2>
			<p class="summary">{scenarioSummary}</p>

			<div class="figures">
				<div class="figure">
					<div class="label">Operational cost</div>
					<div class="value">{opexValue}</div>
					<span class="unit">USD / kg</span>
				</div>
				<div class="figure">
					<div class="label">Capital cost</div>
					<div class="value">{capexValue}</div>
					<span class="unit">USD</span>
				</div>
			</div>

			<div class="breakdown">
				<h3>Operational cost breakdown</h3>
				{#each opexRows as row}
					<div class="bar-row" class:na={row.na}>
						<span class="name">{row.name}</span>
						<div class="bar-track"><div class="bar-fill" style="width: {row.bar}%" /></div>
						<span class="amt">{row.amt}</span>
					</div>
				{/each}
			</div>

			<div class="breakdown capex-breakdown">
				<h3>Capital cost breakdown</h3>
				{#each capexRows as row}
					<div class="bar-row" class:na={row.na}>
						<span class="name">{row.name}</span>
						<div class="bar-track"><div class="bar-fill" style="width: {row.bar}%" /></div>
						<span class="amt">{row.amt}</span>
					</div>
				{/each}
			</div>

			<p class="note">
				NA / Not Available means the workbook has no figure for that combination; those lines are
				excluded from totals (same as the Excel model). Refrigerant class does not change costs in
				V2.3 — source data is classified as Both.
			</p>
		</section>
	</div>
</div>

<style>
	.cost-model {
		color: var(--ink);
	}

	.kind {
		margin: 0 0 0.45rem;
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--muted);
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(280px, 0.95fr) minmax(300px, 1.05fr);
		gap: 2rem 2.5rem;
		align-items: start;
	}

	.controls,
	.results {
		min-width: 0;
	}

	h2 {
		font-family: var(--font);
		font-size: 1.35rem;
		font-weight: 600;
		margin: 0 0 0.4rem;
		color: var(--header);
		line-height: 1.25;
	}

	.panel-intro {
		color: var(--muted);
		font-size: 0.92rem;
		margin: 0 0 1.15rem;
		line-height: 1.45;
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
		color: var(--muted);
		font-weight: 600;
		margin-bottom: 0.85rem;
	}

	.field {
		margin-bottom: 0.85rem;
	}

	.field:last-child {
		margin-bottom: 0;
	}

	label {
		display: block;
		font-size: 0.88rem;
		font-weight: 500;
		margin-bottom: 0.35rem;
		color: var(--header);
	}

	select {
		width: 100%;
		appearance: none;
		background:
			linear-gradient(45deg, transparent 50%, var(--header) 50%) right 14px top 16px / 6px 6px
				no-repeat,
			linear-gradient(135deg, var(--header) 50%, transparent 50%) right 9px top 16px / 6px 6px
				no-repeat,
			transparent;
		border: 0;
		border-bottom: 1px solid rgba(225, 252, 247, 0.28);
		border-radius: 0;
		padding: 0.55rem 2.2rem 0.55rem 0;
		font: inherit;
		color: var(--header);
	}

	select:hover {
		border-bottom-color: rgba(225, 252, 247, 0.5);
	}

	select:focus {
		outline: none;
		border-bottom-color: var(--accent);
	}

	.results {
		position: sticky;
		top: 1.25rem;
	}

	.summary {
		font-size: 1.02rem;
		line-height: 1.5;
		margin: 0 0 1.35rem;
		color: var(--ink-soft);
	}

	.figures {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--line);
	}

	.figure .label {
		font-size: 0.78rem;
		color: var(--muted);
		margin-bottom: 0.2rem;
	}

	.figure .value {
		font-family: var(--font);
		font-size: 1.85rem;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--header);
		line-height: 1.15;
		font-variant-numeric: tabular-nums;
	}

	.figure .unit {
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
		min-width: 4.5rem;
		text-align: right;
	}

	.bar-row.na .name,
	.bar-row.na .amt {
		color: var(--muted);
		font-style: italic;
	}

	.bar-row.na .bar-fill {
		opacity: 0;
	}

	.bar-track {
		height: 0.28rem;
		background: rgba(225, 252, 247, 0.12);
		overflow: hidden;
	}

	.bar-fill {
		height: 100%;
		background: var(--accent);
		opacity: 0.75;
		transition: width 0.35s ease;
	}

	.note {
		margin-top: 1.1rem;
		font-size: 0.82rem;
		color: var(--muted);
		border-top: 1px solid var(--line);
		padding-top: 0.85rem;
		line-height: 1.4;
	}

	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.results {
			position: static;
		}
		.bar-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
		.bar-row .amt {
			text-align: left;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bar-fill {
			transition: none;
		}
	}
</style>
