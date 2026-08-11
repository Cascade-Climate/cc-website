<script>
	import { calculateCosts } from '$lib/lrm/calculate.js';

	const recommendationPools = {
		Destruction: [
			{
				title: 'Strengthen refrigerant recovery infrastructure',
				body: 'Prioritize collection points and certified recovery capacity where destruction volumes are expected to grow.'
			},
			{
				title: 'Expand technician training',
				body: 'Build local skills for safe recovery, cylinder handling, and chain-of-custody before destruction.'
			},
			{
				title: 'Explore producer responsibility mechanisms',
				body: 'Test financing models that help cover destruction costs without shifting burden onto informal actors.'
			},
			{
				title: 'Map cross-border destruction options',
				body: 'Where domestic capacity is limited, assess export pathways against transport risk and cost.'
			},
			{
				title: 'Pilot high-integrity destruction tracking',
				body: 'Use simple verification protocols so destroyed volumes can support credible reporting.'
			}
		],
		Reclamation: [
			{
				title: 'Build reclamation quality assurance',
				body: 'Invest in testing capacity and standards so reclaimed refrigerant meets market specifications.'
			},
			{
				title: 'Expand technician training',
				body: 'Train reclamation operators and field technicians on contamination control and cylinder hygiene.'
			},
			{
				title: 'Explore producer responsibility mechanisms',
				body: 'Link equipment producers to take-back and reclamation incentives across the value chain.'
			},
			{
				title: 'Strengthen refrigerant recovery infrastructure',
				body: 'Ensure recovered gas reaches reclamation facilities with minimal leakage and mixing.'
			},
			{
				title: 'Create offtake partnerships',
				body: 'Connect reclaimers with distributors and service firms that can absorb certified reclaimed product.'
			}
		],
		Recycling: [
			{
				title: 'Strengthen refrigerant recovery infrastructure',
				body: 'Focus first on recovery and on-site recycling readiness in high-turnover service networks.'
			},
			{
				title: 'Expand technician training',
				body: 'Scale practical training on recovery machines, leak checks, and responsible top-up practices.'
			},
			{
				title: 'Explore producer responsibility mechanisms',
				body: 'Encourage equipment makers to support recycling tooling and technician certification.'
			},
			{
				title: 'Support mobile recovery equipment access',
				body: 'Make basic and high-capacity recovery kits available to independent service providers.'
			},
			{
				title: 'Improve cylinder logistics',
				body: 'Reduce barriers to returning and exchanging cylinders in rural and peri-urban markets.'
			}
		]
	};

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
	let recommendations = [];
	let pulseMetrics = false;

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

	function hashString(str) {
		let h = 2166136261;
		for (let i = 0; i < str.length; i++) {
			h ^= str.charCodeAt(i);
			h = Math.imul(h, 16777619);
		}
		return h >>> 0;
	}

	function mulberry32(seed) {
		return function () {
			let t = (seed += 0x6d2b79f5);
			t = Math.imul(t ^ (t >>> 15), t | 1);
			t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

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

	function pickRecommendations(sel) {
		const pool = recommendationPools[sel.endUse];
		const seed = hashString(
			[sel.geography, sel.sector, sel.effort, sel.location, sel.endUse].join('|')
		);
		const rand = mulberry32(seed);
		const shuffled = [...pool].sort(() => rand() - 0.5);
		return shuffled.slice(0, 3);
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

		recommendations = pickRecommendations(sel);

		pulseMetrics = false;
		if (typeof requestAnimationFrame !== 'undefined') {
			requestAnimationFrame(() => {
				pulseMetrics = true;
			});
		}
	}

	$: {
		selections;
		render();
	}
</script>

<svelte:head>
	<title>Refrigerant Lifecycle Explorer — Cascade Climate (unlisted test)</title>
	<meta
		name="description"
		content="Unlisted prototype of the Refrigerant Lifecycle Explorer using LRM Cost Model V2.3 calculations."
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
				Explore how geography, end-use pathway, and system type shape operational and capital costs
				for refrigerant recovery and management, using LRM Cost Model V2.3.
			</p>
			<div class="prototype-banner">
				Unlisted prototype. Cost figures below follow the V2.3 workbook logic (opex USD/kg, capex
				USD). Policy pathway cards remain
				<strong>illustrative placeholders</strong> — not model outputs.
			</div>
		</header>

		<div class="layout">
			<section class="panel controls" aria-labelledby="build-heading">
				<h2 id="build-heading">Build your scenario</h2>
				<p class="panel-intro">
					Choose the same major inputs used in the LRM Cost Model V2.3 workbook.
				</p>

				<div class="field-group">
					<div class="group-label">Operational expenditure</div>

					<div class="field">
						<label for="geography">Geography</label>
						<select id="geography" bind:value={geography}>
							<option>Global</option>
							<option>Southeast Asia</option>
						</select>
					</div>

					<div class="field">
						<label for="refrigerantClass">Refrigerant class</label>
						<select id="refrigerantClass" bind:value={refrigerantClass}>
							<option>ODS</option>
							<option>HFCs</option>
							<option>Both</option>
						</select>
					</div>

					<div class="field">
						<label for="sector">Sector / system type</label>
						<select id="sector" bind:value={sector}>
							<option>Domestic Refrigeration</option>
							<option>Domestic HVAC</option>
							<option>Commercial Refrigeration</option>
							<option>Commercial HVAC</option>
							<option>Transport Refrigeration</option>
							<option>Mobile AC</option>
							<option>Industrial Refrigeration</option>
						</select>
					</div>

					<div class="field">
						<label for="endUse">End-use of recovered refrigerant</label>
						<select id="endUse" bind:value={endUse}>
							<option>Destruction</option>
							<option>Reclamation</option>
							<option>Recycling</option>
						</select>
					</div>

					{#if showTech}
						<div class="field">
							<label for="technology">Destruction technology</label>
							<select id="technology" bind:value={technology}>
								<option>Rotary/Cement Kiln</option>
								<option>Plasma Arc</option>
							</select>
						</div>
					{/if}

					<div class="field">
						<label for="location">In-country or exported</label>
						<select id="location" bind:value={location}>
							<option>In-country</option>
							<option>Exported</option>
						</select>
					</div>

					<div class="field">
						<label for="effort">Effort level</label>
						<select id="effort" bind:value={effort}>
							<option>Urban</option>
							<option>Rural</option>
						</select>
					</div>

					<div class="field">
						<label for="costScenario">Cost scenario</label>
						<select id="costScenario" bind:value={costScenario}>
							<option>Low</option>
							<option>Medium</option>
							<option>High</option>
						</select>
					</div>
				</div>

				<div class="field-group">
					<div class="group-label">Capital expenditure</div>

					<div class="field">
						<label for="recoveryEquipment">Recovery equipment</label>
						<select id="recoveryEquipment" bind:value={recoveryEquipment}>
							<option>Basic</option>
							<option>High Capacity</option>
						</select>
					</div>

					{#if showFacility}
						<div class="field">
							<label for="facilityType">Destruction / reclamation facility</label>
							<select id="facilityType" bind:value={facilityType}>
								<option>New Facility</option>
								<option>Retrofit</option>
							</select>
						</div>
					{/if}
				</div>
			</section>

			<section class="panel results" aria-labelledby="results-heading">
				<div class="model-tag">V2.3 model outputs</div>
				<h2 id="results-heading">See your scenario</h2>
				<p class="summary">{scenarioSummary}</p>

				<div class="metrics">
					<div class="metric" class:pulse={pulseMetrics}>
						<div class="label">Estimated operational cost</div>
						<div class="value">{opexValue}</div>
						<span class="unit">USD / kg · Total Opex</span>
					</div>
					<div class="metric" class:pulse={pulseMetrics}>
						<div class="label">Estimated capital cost</div>
						<div class="value">{capexValue}</div>
						<span class="unit">USD · Total Capex</span>
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

		<section class="panel pathways" aria-labelledby="pathways-heading">
			<div class="pathways-header">
				<h2 id="pathways-heading">Potential pathways</h2>
				<span class="placeholder-label">Illustrative recommendations — placeholder content</span>
			</div>
			<p class="panel-intro pathways-intro">
				UX placeholders only. These cards are not generated by the spreadsheet.
			</p>
			<div class="cards">
				{#each recommendations as card, i (card.title + i)}
					<article class="card">
						<div class="num">Pathway 0{i + 1}</div>
						<h3>{card.title}</h3>
						<p>{card.body}</p>
					</article>
				{/each}
			</div>
		</section>

		<p class="page-foot">
			LRM Cost Model V2.3 · Unlisted prototype · Costs for exploration, not formal decision-making
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
		max-width: 42rem;
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
	}

	.panel {
		background: var(--panel);
		backdrop-filter: blur(10px);
		border: 1px solid var(--line);
		box-shadow: var(--shadow);
		border-radius: var(--radius);
	}

	.controls {
		padding: 1.35rem 1.35rem 1.5rem;
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

	.pathways-intro {
		margin-bottom: 0;
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
			rgba(2, 60, 64, 0.55);
		border: 1px solid rgba(225, 252, 247, 0.28);
		border-radius: var(--radius);
		padding: 0.65rem 2.2rem 0.65rem 0.75rem;
		font: inherit;
		color: var(--header);
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	select:hover {
		border-color: rgba(225, 252, 247, 0.5);
	}

	select:focus {
		outline: none;
		border-color: var(--accent);
		box-shadow: 0 0 0 3px rgba(127, 214, 197, 0.2);
	}

	.results {
		padding: 1.35rem 1.35rem 1.5rem;
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
		font-family: var(--font);
		font-size: 1.1rem;
		line-height: 1.45;
		margin: 0 0 1.25rem;
		color: var(--header);
		min-height: 3.3em;
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
		transition:
			transform 0.25s ease,
			background 0.25s ease;
	}

	.metric.pulse {
		transform: translateY(-2px);
		background: rgba(127, 214, 197, 0.14);
	}

	.metric .label {
		font-size: 0.78rem;
		color: var(--muted);
		margin-bottom: 0.3rem;
	}

	.metric .value {
		font-family: var(--font);
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

	.note {
		margin-top: 1.1rem;
		font-size: 0.82rem;
		color: var(--muted);
		border-top: 1px solid var(--line);
		padding-top: 0.85rem;
		line-height: 1.4;
	}

	.pathways {
		margin-top: 1.5rem;
		padding: 1.5rem 1.35rem 1.6rem;
	}

	.pathways-header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem 1rem;
		margin-bottom: 0.35rem;
	}

	.placeholder-label {
		font-size: 0.78rem;
		color: var(--warn);
		background: var(--warn-bg);
		padding: 0.25rem 0.5rem;
		font-weight: 600;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.9rem;
		margin-top: 1.1rem;
	}

	.card {
		padding: 1.1rem 1.05rem 1.15rem;
		border-top: 2px solid var(--accent);
		background: rgba(225, 252, 247, 0.08);
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		border-left: 1px solid var(--line);
	}

	.card .num {
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
		margin-bottom: 0.55rem;
	}

	.card h3 {
		font-family: var(--font);
		font-size: 1.05rem;
		font-weight: 600;
		margin: 0 0 0.45rem;
		line-height: 1.25;
		color: var(--header);
	}

	.card p {
		margin: 0;
		color: var(--ink-soft);
		font-size: 0.9rem;
		line-height: 1.45;
	}

	.page-foot {
		margin-top: 2rem;
		color: var(--muted);
		font-size: 0.82rem;
	}

	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
		}
		.results {
			position: static;
			max-height: none;
		}
		.cards {
			grid-template-columns: 1fr;
		}
		.bar-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
		.bar-row .amt {
			text-align: left;
		}
	}
</style>
