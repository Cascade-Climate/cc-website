<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import farm1 from '$lib/images/nature/farm1.webp';
	import explorereq from '$lib/images/equations/explorer-eq.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import wpe from '$lib/images/nature/erwexplorer.webp';
	import { onMount } from 'svelte';

	// Soils frames (2001-2020: frames 0-239)
	const allSoilsFrames = [];
	for (let i = 0; i <= 239; i++) {
		const frameNum = i.toString().padStart(3, '0');
		allSoilsFrames.push(`/weather-frames/frames_soils_2001_2020/frame_${frameNum}.webp`);
	}

	// Temperature frames (2001-2020: frames 0-239)
	const tempFrames = [];
	for (let i = 0; i <= 239; i++) {
		const frameNum = i.toString().padStart(3, '0');
		tempFrames.push(`/weather-frames/frames_temp_2001-2020/frame_${frameNum}.webp`);
	}

	// Reactive variables for slider controls
	let soilsFrameIndex = 0;
	let tempFrameIndex = 0;

	// Reactive statements for current images
	$: currentSoilsImage = allSoilsFrames[soilsFrameIndex];
	$: currentTempImage = tempFrames[tempFrameIndex];

	// Chart variables
	let temperatureChart;
	let phChart;
	let Chart;

	// Load and parse CSV data
	async function loadCSVData(url) {
		const response = await fetch(url);
		const text = await response.text();
		const lines = text.trim().split('\n');
		const headers = lines[0].split(',');
		const data = lines.slice(1).map(line => {
			const values = line.split(',');
			const row = {};
			headers.forEach((header, index) => {
				row[header.trim()] = parseFloat(values[index]) || values[index];
			});
			return row;
		});
		return data;
	}

	// Create temperature vs weathering rate chart
	async function createTemperatureChart() {
		const data = await loadCSVData('/weathering_intensity.csv');
		
		const ctx = document.getElementById('temperatureChart').getContext('2d');
		temperatureChart = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [{
					label: 'Weathering Rate',
					data: data.map(d => ({
						x: d['temperature (C)'],
						y: d['weathering intensity']
					})),
					borderColor: '#2563eb',
					backgroundColor: 'rgba(37, 99, 235, 0.1)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 6
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				plugins: {
					title: {
						display: true,
						text: 'Temperature Effect on Weathering Rate',
						font: {
							size: 16,
							weight: 'bold'
						},
						padding: 20
					},
					legend: {
						display: false
					},
					tooltip: {
						callbacks: {
							label: function(context) {
								let label = context.dataset.label || '';
								if (label) {
									label += ': ';
								}
								label += context.parsed.y.toExponential(6);
								return label;
							}
						}
					}
				},
				scales: {
					x: {
						type: 'linear',
						title: {
							display: true,
							text: 'Temperature (°C)',
							font: { size: 14 }
						},
						min: -10,
						max: 40,
						grid: {
							display: false
						}
					},
					y: {
						title: {
							display: true,
							text: 'Weathering Rate',
							font: { size: 14 }
						},
						type: 'linear',
						min: 0,
						max: 8.0e-11,
						grid: {
							display: false
						},
						ticks: {
							callback: function(value) {
								return value.toExponential(1);
							}
						}
					}
				}
			}
		});
	}

	// Create pH vs CO2 uptake and weathering rate chart
	async function createPhChart() {
		const data = await loadCSVData('/weathering_intensity_removal_ph.csv');
		
		const ctx = document.getElementById('phChart').getContext('2d');
		phChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: data.map(d => d.pH),
				datasets: [
					{
						label: 'Relative CO2 Uptake',
						data: data.map(d => d['carbon removal']),
						borderColor: '#059669',
						backgroundColor: 'rgba(5, 150, 105, 0.1)',
						borderWidth: 2,
						yAxisID: 'y',
						tension: 0.4,
						pointRadius: 0,
						pointHoverRadius: 6
					},
					{
						label: 'Relative Weathering Rate',
						data: data.map(d => d['weathering rate']),
						borderColor: '#dc2626',
						backgroundColor: 'rgba(220, 38, 38, 0.1)',
						borderWidth: 2,
						yAxisID: 'y1',
						tension: 0.4,
						pointRadius: 0,
						pointHoverRadius: 6
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				plugins: {
					title: {
						display: true,
						text: 'Trade-off of pH effect on relative CO2 uptake and weathering rate',
						font: {
							size: 16,
							weight: 'bold'
						},
						padding: 20
					},
					legend: {
						position: 'bottom',
						labels: {
							usePointStyle: true,
							pointStyle: 'line',
							generateLabels: function(chart) {
								const original = Chart.defaults.plugins.legend.labels.generateLabels;
								const labels = original.call(this, chart);
								
								labels.forEach(function(label, index) {
									label.fillStyle = label.strokeStyle;
									label.lineWidth = 3;
								});
								
								return labels;
							}
						}
					},
					tooltip: {
						callbacks: {
							label: function(context) {
								let label = context.dataset.label || '';
								if (label) {
									label += ': ';
								}
								if (context.dataset.label === 'Relative Weathering Rate') {
									label += context.parsed.y.toExponential(6);
								} else {
									label += context.parsed.y.toFixed(6);
								}
								return label;
							}
						}
					}
				},
				scales: {
					x: {
						title: {
							display: true,
							text: 'Soil pH',
							font: { size: 14 }
						},
						min: 4,
						max: 8,
						grid: {
							display: false
						}
					},
					y: {
						type: 'linear',
						display: true,
						position: 'left',
						title: {
							display: true,
							text: 'Relative CO2 Uptake',
							font: { size: 14 }
						},
						grid: {
							display: false
						}
					},
					y1: {
						type: 'linear',
						display: true,
						position: 'right',
						title: {
							display: true,
							text: 'Relative Weathering Rate',
							font: { size: 14 }
						},
						grid: {
							display: false
						},
					}
				}
			}
		});
	}

	onMount(async () => {
		// Import Chart.js dynamically
		const ChartModule = await import('chart.js/auto');
		Chart = ChartModule.default;
		
		// Create the charts
		await createTemperatureChart();
		await createPhChart();
	});
</script>

<svelte:head>
    <title>Introducing the Weathering Potential Explorer:&nbsp;A Global Screening Tool for Enhanced Rock Weathering Potential</title> 
    <meta
	name="Introducing the Weathering Potential Explorer: A Global Screening Tool for Enhanced Rock Weathering Potential"
	content="Introducing the Weathering Potential Explorer: A Global Screening Tool for Enhanced Rock Weathering Potential"
/>
</svelte:head>

<section class="intro">
	<div class="content">
		<div class="copy">
			<h1><strong>Introducing the Weathering Potential Explorer:</strong> A Global Screening Tool for Enhanced Rock Weathering Potential</h1>
			<p>
				Enhanced rock weathering (ERW) is an emerging carbon dioxide removal (CDR) strategy that accelerates the natural breakdown of alkaline rocks and minerals to capture and store atmospheric CO₂. While ERW builds on farmers' centuries-old practice of applying ground rock to improve soil pH and fertility, it's optimized specifically for carbon removal. We know ERW works, but we need better tools to understand where environmental conditions&mdash;particularly temperature, soil moisture, and pH&mdash;create the highest potential for rapid rock dissolution. That's why we built the Weathering Potential Explorer, an interactive global map that can support successful ERW deployments by pinpointing regions where relative environmental conditions could favor rapid silicate weathering.
			</p>
			<strong>
				Ready to explore global weathering potential? Jump straight to the tool or continue reading to learn more about how it works and how to use it effectively.
			</strong>
			<p></p>
			<div class="links">
				<a href="https://cascade-erw-gis.projects.earthengine.app/view/erw-explorer" target="_blank" rel="noopener">Access the Weathering Potential Explorer Tool</a>
			</div>
		</div>
		<img src={wpe} alt="Screencap of the Weathering Potential Explorer"/>
	</div>
</section>
<ScrollNav />
<main>

		<section id="overview">
			<h2>User Guide</h2>
			<p>The following PDF is a practical guide to using the Weathering Potential Explorer. It explains what each button does, how to navigate the map, and what the different layers and filters will show. It also includes walkthroughs for key functions.</p>
			<div style="display: flex; flex-direction: column; gap: 10px; width: 100%; padding-bottom: 1.5rem;">
				<PDFLink link="/Weathering Potential Explorer User Guide.pdf" variant="accent" style="display: block; text-align: left;">Weathering Potential Explorer User Guide.pdf↗</PDFLink>
			</div>
			<p>The following explainer (the rest of this page) details what the tool is for, how it works mechanistically, and its limitations.</p>
			<br>
			<h1>Overview</h1>
			<p>Enhanced rock weathering (ERW) is an emerging carbon dioxide removal (CDR) strategy that accelerates the natural breakdown of alkaline rocks and minerals to capture and store atmospheric CO₂. Farmers around the world have long used finely ground rock like agricultural lime to adjust pH and improve soil fertility. ERW builds on these established practices but optimizes them for carbon removal on top of the existing benefits to soil and farming.&nbsp;</p>
			<div class="erw-explanation-block">
				<p>
					At the heart of ERW is a chemical reaction between rock particles and soil water. When reactive minerals dissolve, they consume acidity, release calcium and magnesium, and ultimately form bicarbonate ions or carbonate minerals to be transported to and locked away in rivers and oceans for long-term carbon storage. The speed of this weathering process (i.e., how quickly rocks dissolve) depends on several environmental factors, especially <strong>temperature, soil moisture, and soil water pH</strong><sup>1</sup>. These factors determine how acidic, reactive, and mobile the soil solution is, and in turn, how effectively it can break down minerals.
				</p>
				<div class="erw-note">
					<strong>1</strong> The model underlying our Explorer Tool uses soil pH in H₂O, based on laboratory measurements from the <a href="https://www.isric.org/explore/soilgrids" target="_blank" rel="noopener">SoilGrids dataset</a>. This standard method involves mixing dried soil with deionized water and measuring the resulting slurry pH. While this is not a direct measure of in situ soil water pH, it serves as a globally available proxy for the acidity of surface soils and is commonly used in large-scale models to approximate the chemical conditions relevant to silicate weathering.
				</div>
			</div>
			<style>
				.erw-explanation-block {
					display: flex;
					flex-direction: row;
					align-items: flex-start;
					gap: 1.5rem;
				}
				.erw-note {
					flex: 0 0 320px;
					font-size: 0.85em;
					background: #f5f5f5;
					border-left: 3px solid #023C40;
					padding: 0.8em 1em;
					margin-left: 0.5em;
					color: #222;
					position: relative;
					left: 0.5rem;
					line-height: 1.2;
				}
				@media (max-width: 800px) {
					.erw-explanation-block {
						flex-direction: column;
						gap: 0.75rem;
					}
					.erw-note {
						flex: unset;
						margin-left: 0;
						left: 0;
						margin-top: 0.5em;
						width: 100%;
						box-sizing: border-box;
					}
				}
			</style>
			<p>To visualize this, imagine a bucket of reactive rock powder submerged in water. If the water is warm and acidic, it will rapidly dissolve the rock, releasing cations that bind with dissolved CO₂. But if the water is cold, alkaline, or stagnant, the reactions slow down, and eventually reach equilibrium as the water becomes saturated. Real soils behave much like this bucket, but with added complexity: water moves, roots and microbes generate fresh acidity, and temperature shifts with the seasons. In dynamic soil environments, fast and sustained weathering depends on maintaining a flow of fresh, unsaturated water that can carry away weathering products and allow new CO₂ to be captured. In other words, in order to continue the reaction happening in the bucket, we must dump the water out and refill with fresh, unreacted water to start the process over, and warmer, slightly more acidic waters will speed up the reaction that happens.</p>
			<p>Temperature, soil moisture, and soil water pH control how quickly weathering occurs. <a href="#temperature">Temperature</a> speeds up chemical reactions, <a href="#moisture">moisture</a> enables them by dissolving and transporting reactants, and <a href="#ph">pH</a> influences both the rate at which minerals dissolve and how carbon is stored in solution. Importantly, these three variables are not independent of each other. Warmer climates, like the tropics, are often wetter, and wetter soils are often more acidic. As a result, by mapping where conditions are simultaneously warm, moist, and acidic, we can identify regions that are especially well-suited for ERW. Other factors like feedstock mineralogy, particle size, and local hydrology also influence carbon removal potential, but <strong>temperature, soil moisture, and soil water pH are the three most accessible and predictive variables </strong>available in global datasets.</p>
			<p>While there are always local exceptions, this global pattern gives us a practical but powerful starting point for determining where ERW feedstocks have the highest potential to weather quickest. To help explore the variation of global weathering potential, we built the <strong>Weathering Potential Explorer</strong>, an interactive map that visualizes relative weathering potential across agricultural regions based on these three main inputs. We focused on weathering potential because, while they're just one piece of the ERW puzzle, they are also the crucial first step&mdash;we can&rsquo;t quantify carbon removal without knowing how much rock has weathered.</p>
			
			<br>

			<h2>Weathering Potential Explorer Capabilities&nbsp;</h2>
			<p><strong>The Weathering Potential Explorer estimates where silicate weathering may hold the greatest potential, drawing on globally available datasets for land cover, temperature, soil organic carbon, soil moisture, and soil water pH. </strong>The tool outputs a normalized relative weathering potential index that returns percentile rankings across global agricultural soils, where the top percentiles indicate conditions more favorable to rapid rock dissolution. The Weathering Potential Explorer also offers cropland filtering and soil chemistry masks, and provides regional statistics for land area within each weathering potential range.</p>
			<p>
				The calculation is based on a simplified formulation commonly used in weathering models, where dissolution rate is proportional to hydrogen ion concentration, soil moisture (representing how much rock surface is in contact with water, assuming that water is refreshed before reaching equilibrium), and a temperature-dependent Arrhenius factor (e.g., <a href="https://doi.org/10.1016/j.chemgeo.2003.03.001" target="_blank" rel="noopener">White &amp; Brantley 2003</a>; <a href="https://www.science.org/doi/10.1126/science.1250770" target="_blank" rel="noopener">Maher &amp; Chamberlain 2014</a>). This captures key environmental drivers of weathering without modeling specific mineral kinetics.
			</p>
			<div>
			<style>
				.wp-table {
					border-collapse: collapse;
					width: 100%;
					max-width: 100%;
					font-size: 0.75rem;
					line-height: 1.2;
				}
				
				@media (max-width: 768px) {
					.wp-table,
					.wp-table td,
					.wp-table th,
					.wp-table * {
						font-size: 0.58rem !important;
					}
					.wp-table td, .wp-table th {
						padding: 3px 4px;
					}
				}
				
				section {
					margin-top: 0.5rem;
					padding-top: 0.25rem;
				}
				
				section h1 {
					margin-top: 0.25rem;
					margin-bottom: 0.75rem;
				}
				
				section h2 {
					margin-top: 0.5rem;
					margin-bottom: 0.5rem;
				}
				
				main {
					margin-top: 0;
					padding-top: 0;
				}
				
				main > section:first-child {
					margin-top: 0;
					padding-top: 0;
				}
				.wp-table td, .wp-table th {
					border: 1px solid #222;
					padding: 8px 12px !important;
					padding-left: 12px !important;
					padding-right: 12px !important;
					padding-top: 8px !important;
					padding-bottom: 8px !important;
					word-wrap: break-word;
					overflow-wrap: break-word;
					box-sizing: border-box;
					vertical-align: top;
				}
				.wp-table th, .wp-table .wp-header {
					background: #023C40;
					color: #fff;
					font-weight: bold;
				}
			</style>
			<table class="wp-table" style="border-collapse: collapse; width: 100%;">
			<tbody>
			<tr class="wp-header">
			<td style="padding: 8px;"><strong>Category</strong></td>
			<td style="padding: 8px;"><strong>Capability&nbsp;</strong></td>
			</tr>
			<tr>
			<td><strong>Tool&rsquo;s Primary Output</strong></td>
			<td>Estimated relative weathering potential across global agricultural landscapes, expressed as a normalized index (0&ndash;1). This reflects the comparative speed of silicate weathering based on soil water pH, moisture, and temperature conditions. Data sources can all be found in <a href="#dataresolutions">Data Inputs and Spatial Resolutions</a>.</td>
			</tr>
			<tr>
			<td><strong>Visual Output</strong></td>
			<td>Color-coded map: Light Tan (low) Dark Red (high) reflects relative weathering potential, where:
			<ul>
			<li>80-100th percentile (Top 20%) (<span style="color: #5b0f00;">Dark Red</span>)</li>
			<li>60-80th percentile (<span style="color: #a61c00;">Red Orange</span>)</li>
			<li>40-60th percentile (<span style="color: #e06666;">Orange</span>)</li>
			<li>20-40th percentile (<span style="color: #e69138;">Light Orange</span>)</li>
			<li>0-20th percentile (Bottom 20%) (<span style="color: #e6b8af;">Light Tan</span>)</li>
			</ul>
			</td>
			</tr>
			<tr>
			<td><strong>Cropland Filtering</strong></td>
			<td>Users can apply land cover masks to limit the analysis to cropland areas. These datasets define cropland broadly as managed lands used primarily for the cultivation of food, fiber, and forage crops. While they effectively capture large-scale agriculture, they may miss smallholder farms and other mosaic systems. More detail can be found in <a href="#dataresolutions">Data Inputs and Spatial Resolutions</a>.</td>
			</tr>
			<tr>
			<td><strong>Soil Chemistry Masks</strong></td>
			<td>Optional filters allow users to exclude: (1) extreme soil water pH values where weathering or carbon capture becomes less effective, and (2) areas with high soil organic carbon (user-inputed) where there is a larger risk of release of organic carbon to the atmosphere.</td>
			</tr>
			<tr>
			<td><strong>Regional Summaries</strong></td>
			<td>Clicking on any region opens a pop-up with land area statistics sorted by weathering potential categories, which the tool bins into five percentile ranges based on the normalized output. These summaries are shown for total land and cropland (if masked).</td>
			</tr>
			</tbody>
			</table>
			</div>
			<br>
			<h2 id="limitations1">Limitations of the Weathering Potential Explorer&nbsp;</h2>
			<p>The Weathering Potential Explorer highlights promising regions for further investigation, but because it does not capture the full range of variables that ultimately determine where ERW can be most effective, it cannot provide definitive answers on site suitability or be used as a site selection tool.&nbsp;</p>
			<div>
			<table class="wp-table">
			<tbody>
			<tr class="wp-header">
			<td><strong>Category</strong></td>
			<td><strong>Limitation</strong></td>
			</tr>
			<tr>
			<td><strong>Carbon Removal Estimates</strong></td>
			<td>The tool estimates relative weathering potential only. It does not calculate actual CO₂ removal, which depends on factors such as feedstock type, application rate, exposure time, and downstream transport of weathering products.</td>
			</tr>
			<tr>
			<td><strong>Agronomic Benefits</strong></td>
			<td>No modeling of pH modification, nutrient delivery, or crop yield impacts is included. These outcomes are highly site-specific and depend on local soils, crops, and management.</td>
			</tr>
			<tr>
			<td><strong>Economic Feasibility</strong></td>
			<td>The tool does not account for transport costs, grinding expenses, local infrastructure, or permitting and policy conditions.</td>
			</tr>
			<tr>
			<td><strong>Feedstock Availability</strong></td>
			<td>The calculations in this tool are most representative of common silicate minerals. However, there is no information on rock type, mineral composition, or proximity to quarries or mines as global feedstock availability is often not publicly available data. Users with access to local or proprietary feedstock data are encouraged to layer it onto the tool to support site-specific planning.</td>
			</tr>
			<tr>
			<td><strong>Hydrological Dynamics</strong></td>
			<td>Although the tool uses soil moisture as a proxy for water availability, it does not model hydrological processes such as leaching, runoff, or subsurface water flow that influence how dissolved carbon moves through the soil profile.</td>
			</tr>
			<tr>
			<td><strong>Cropping Systems</strong></td>
			<td>Crop type, root depth, seasonality, and land management practices are not represented in the tool.</td>
			</tr>
			<tr>
			<td><strong>Life Cycle Emissions</strong></td>
			<td>The tool does not account for upstream emissions (e.g., mining, grinding, transportation) or downstream impacts (e.g., secondary mineral formation, bicarbonate transport, re-emission under changing soil conditions).</td>
			</tr>
			<tr>
			<td><strong>Site-Specific Suitability</strong></td>
			<td>This is not a site selection tool. The core datasets used range from 250 m to ~1km in resolution and are harmonized to 1  km for analysis. As such, the Explorer is best suited for regional insights, not field-scale decisions. Users should treat anything smaller than ~1 km&sup2; (about 100 hectares) with caution and verify conditions through local measurements and higher-resolution data where available. More details on data resolutions can be found in <a href="#dataresolutions">Data Inputs and Spatial Resolutions</a>.</td>
			</tr>
			</tbody>
			</table>
			</div>

		</section>

		<section id="key-factors">
			<h1>Key Factors</h1>
			<h2>Key factors that influence weathering potential</h2>
			<p>Enhanced rock weathering relies on the dissolution of minerals in soil environments. However, not all minerals dissolve equally fast, and not all environments promote the same reaction rates. While a range of rock types can be used in enhanced weathering, this tool models <strong>silicate mineral dissolution only</strong>. Other materials, such as carbonates or other fast-weathering minerals like wollastonite, may also be relevant in some contexts, but their reaction kinetics differ significantly, with lower activation energies and different temperature sensitivities than the silicates modeled here.&nbsp;</p>
			<p>Several environmental factors influence how quickly silicates weather. The Weathering Potential Explorer models three of the most important and available variables: <strong>temperature, soil moisture, and soil pH.</strong> Warmer conditions accelerate reaction kinetics; soil acidity promotes dissolution, but excessive acidity limits the ability of soils to retain bicarbonate, so conditions of mild acidity are optimal for ERW; and soil moisture provides the solvent in which dissolution reactions occur. While these variables interact in complex ways, they offer a strong first-pass estimate of where<strong> &nbsp;weathering is likely to proceed more rapidly.&nbsp;</strong></p>


			<div class="erw-explanation-block">
				<p>
					Other factors like mineralogy, particle size, and water flow dynamics also shape real-world weathering potential, but are held constant in this model because &ldquo;weathering potential&rdquo; here refers to a unitless, relative reaction rate per unit of reactive surface area, normalized across all land pixels<sup>2</sup>. In practice, the model assumes an average activation energy representative of common silicate feedstocks like basalt<sup>3</sup>. It does not account for application rate, surface area distribution, or actual CO₂ uptake.
					<br><br>
					The result is a dimensionless index of <strong>relative weathering reactivity</strong>&mdash;a measure of how favorable local conditions are for silicate weathering, all else equal. This is not a prediction of carbon removal flux, but rather a screening tool to highlight where environmental conditions may support faster dissolution and, in turn, more effective silicate ERW deployments.
				</p>
				<div class="erw-note">
					<strong>2</strong> In this formulation, particle size and application rate do not affect results directly, while mineralogy could alter outcomes via the assumed activation energy, and water flow dynamics could influence whether the far-from-equilibrium assumption holds.
					<br><br>
					<strong>3</strong> The model assumes a constant activation energy of 68.8 kJ/mol, representative of common silicate minerals such as basaltic glass or amorphous silica (<a href="https://doi.org/10.1016/0016-7037(95)00078-E" target="_blank" rel="noopener">White and Blum, 1995</a>). This simplifies mineral-specific variability while preserving broad sensitivity to temperature-driven weathering rates. For a deeper discussion of how activation energies influence mineral dissolution across environments, see <a href="https://doi.org/10.1126/science.add2922" target="_blank" rel="noopener">(Brantley et al., 2024)</a>.
				</div>
			</div>

			<p>While full carbon accounting must also consider downstream processes and uncertainties, <strong>weathering potential is the first gating variable</strong> and is one of the few variables we can actively optimize through geographic targeting and deployment strategy.</p>
			<p>To dig deeper into how temperature, soil moisture, and pH influence silicate weathering, the subsections below provide more detailed explanations of each variable and its role in the ERW model.</p>

		
				<details>
					<summary><h2 id="temperature" style="display: inline;">Temperature</h2></summary>
<br>

				<p>Temperature is one of the most powerful drivers of silicate weathering. If you&rsquo;ve ever stirred sugar into hot tea and watched it dissolve almost instantly, you&rsquo;ve seen the basic principle in action: chemical reactions tend to accelerate with heat. The same is true for silicates in soil&mdash;warmer conditions accelerate the breakdown of reactive rock, which in turn drives faster carbon dioxide removal.</p>
				<p>This behavior is described by the Arrhenius equation, a foundational concept in chemistry. It links temperature to reaction rate through a parameter called activation energy, which reflects how much energy is needed to kickstart the reaction. Silicates have relatively high activation energies, meaning they&rsquo;re especially sensitive to changes in temperature. As the temperature increases, the rate of weathering doesn&rsquo;t just rise steadily; it rises exponentially.</p>

				<div class="graph-section">
					<div class="chart-container">
						<canvas id="temperatureChart"></canvas>
					</div>
				</div>
<br>
				<p>This has important geographic implications. For example, a soil at 30&deg;C (common in parts of central Kenya) can weather <em>some types</em> of silicates roughly five times faster than a cooler soil at 10&deg;C (such as in Scotland), all else equal. While temperature is only one part of the ERW equation, it&rsquo;s often a major advantage in tropical regions where heat accelerates the reaction from the start.</p>

				<div class="graph-section">
					<div class="image-viewer">
						<img src={currentTempImage} alt="Temperature frame {tempFrameIndex + 1}" class="frame-image" />
						<div class="slider-container">
							<input 
								type="range" 
								id="temp-slider"
								min="0" 
								max={tempFrames.length - 1} 
								step="1" 
								class="css-1erfxqa" 
								bind:value={tempFrameIndex}
							/>
						</div>
					</div>
				</div>
			</details>
			<br>
			<details>
				<summary><h2 id="moisture" style="display: inline;">Moisture</h2></summary>
<br>
				<p>While temperature accelerates weathering, water enables it. Moisture is the medium through which CO₂ and minerals dissolve and react. It facilitates both the chemical breakdown of silicates and the transport of dissolved bicarbonate and cations out of the system.</p>
			<p>In the Weathering Potential Explorer, we use annual mean soil moisture as a practical proxy for water availability in the root zone. While it doesn&rsquo;t represent water movement directly, it helps identify soils that regularly receive water (whether from rainfall or irrigation) and that can retain it long enough to support weathering. This degree of water&ndash;rock interaction governs how readily reactants can reach mineral surfaces and where products could be carried away.</p>
			<p>Higher average soil moisture often indicates environments where unsaturated water is present, which is essential for mineral dissolution and bicarbonate formation. But, it's not just the presence of water that matters&mdash;it&rsquo;s how often that water is replaced. If water in the soil becomes saturated with dissolved elements, weathering slows or stops. To keep reactions going, the system needs a constant supply of fresh reactants (like H⁺ and CO₂) and a way to remove reaction products (like silicon and base cations). This dynamic is what keeps the chemical gradients steep and the weathering process active.</p>
			<p>Think of soil like a sponge. If you&rsquo;ve been using the sponge for a while without rinsing it, the dirty sponge will not be able to remove gunk off the plate you&rsquo;re washing, much like soil water that has not been replaced. If the sponge is regularly squeezed and re-wetted, the fresh water and soap will clean your plate more efficiently. In soils, rainfall or irrigation and the resulting infiltration &lsquo;resets&rsquo; the water chemistry like rinsing a sponge. This repeated turnover keeps reactions going.</p>

			<div class="erw-explanation-block">
				<p>
					In silicate weathering models, when the rate of infiltration and soil water replacement is greater than the rate that minerals dissolve, the chemical state of the soil water is referred to as <strong>&ldquo;far-from-equilibrium&rdquo;</strong>, a condition where the soil water hasn&rsquo;t yet saturated with dissolved rock elements and dissolution continues at near-maximal rates. In the Weathering Potential Explorer, we assume that these reactions are happening &ldquo;far-from-equilibrium&rdquo;. This assumption is important because the activation energy used in our model (68.8 kJ/mol) is based on lab and field experiments conducted under these conditions.<sup>4</sup>
				</p>
				<div class="erw-note">
					<strong>4</strong> Brantley, S. L. (2024). Toward a unified theory of chemical weathering. <a href="https://doi.org/10.1126/science.add2922" target="_blank" rel="noopener"> <i> Science</i>.</a>
					<br><br>
					<strong>5</strong> In most likely ERW settings, especially agricultural areas, high soil moisture often coincides with regular precipitation and infiltration, which can help refresh porewater and maintain conditions far from equilibrium. But in low-drainage environments like wetlands or tundra, soils can remain saturated without much flushing, which may limit weathering despite high moisture.
				</div>
			</div>
			
			<div class="moisture-layout">
				<div class="moisture-text">
					<p>However, we don't model water infiltration, transport, or residence time in the Weathering Potential Explorer. While we assume soils with high average soil moisture will experience a &ldquo;far-from-equilibrium&rdquo; weathering regime, we note that this is not always true. Soils could have high moisture because the &ldquo;sponge&rdquo; is not regularly &ldquo;squeezed&rdquo;, which would lead to this tool overestimating the ERW potential for some sites.<sup>5</sup></p>

				</div>
				<div class="moisture-graph">
					<div class="graph-section">
						<div class="image-viewer">
							<img src={currentSoilsImage} alt="Soils frame {soilsFrameIndex + 1}" class="frame-image" />
							<div class="slider-container">
								<input 
									type="range" 
									id="soils-slider"
									min="0" 
									max={allSoilsFrames.length - 1} 
									step="1" 
									class="css-1erfxqa" 
									bind:value={soilsFrameIndex}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p>This is a simplification, but it reflects standard practice in global-scale weathering models, which must balance physical realism with data availability. Users should interpret moisture-driven variation as a broad indicator of hydrologic suitability, and not a substitute for site-specific assessments of drainage, infiltration, or water residence time.</p>
			</details>
<br>
			<details>
				<summary><h2 id="ph" style="display: inline;">Soil pH</h2></summary>
<br>
				<p>Soil pH plays a critical role in silicate weathering and in determining whether ERW actually results in long-term carbon removal. Lower pH increases the availability of protons (H⁺), which accelerate the breakdown of silicates and release base cations like calcium and magnesium. These cations can then react with dissolved CO₂ to form bicarbonate, which may be transported to downstream reservoirs and stored for millennia.</p>
				<div class="erw-explanation-block">
					<p>
						But <strong>more acidic doesn&rsquo;t always mean more effective</strong>. In overly acidic soils, several dynamics can interfere with durable carbon sequestration. While weathering still occurs, the dissolved products may not form stable bicarbonate or carbonate compounds immediately at the weathering site. Instead, they may be transported elsewhere or may re-equilibrate with atmospheric CO₂. Today&rsquo;s MRV systems place heavy emphasis on local fluxes, which are more easily measured, while downstream fate remains uncertain.<sup>6</sup>
					</p>
					<div class="erw-note">
						<strong>6</strong> While all acid neutralization removes CO₂ in principle, most MRV protocols credit only storage that is quantifiable and stable, usually requiring site-level measurements of bicarbonate formation or modeled long-term fate.
					</div>
				</div>


				<div style="background: #023c40; color: #fff; padding: 1em 1.2em; border-radius: 0.5em; margin: 1em 0; box-shadow: 0 2px 8px rgba(0,0,0,0.08); font-size: 0.95em;">
					<strong>Note:</strong> Measured soil pH reflects not only local hydroclimate and underlying geology, but also land use and management history. Agricultural fields, for example, are often limed to raise pH or acidified by fertilizers.
				</div>

				<div class="erw-explanation-block">
					<p>
						At high pH (above ~8), weathering potential slows significantly, and carbon is more likely to be stored in solid carbonate minerals, which can redissolve later and are harder to account for reliably.<sup>7</sup> Thus, there&rsquo;s a sweet spot for weathering-based carbon removal, which is typically in soils with a pH between about 5.5 and 7&mdash;a range that also happens to be agronomically favorable for most crops, supporting nutrient availability and root health.<sup>8</sup>
						<br><br>
						This trade-off is illustrated in the figure below, based on representative soil chemistry conditions. The exact curve may vary depending on soil pCO₂, total alkalinity, and other carbonate system parameters.<sup>9</sup>
					</p>
					<div class="erw-note">
						<strong>7</strong>  Brantley, S. L. (2024). Toward a unified theory of chemical weathering. <a href="https://doi.org/10.1126/science.add2922" target="_blank" rel="noopener"> <i> Science</i>.</a>
						<br><br>
						<strong>8</strong> USDA Natural Resources Conservation Service (NRCS). Soil pH: What It Means. Pennsylvania Envirothon. <a href="https://www.envirothonpa.org/documents/pH_guide.pdf" target="_blank" rel="noopener">[PDF]</a>
						<br><br>
						<strong>9</strong> For detailed modeling of pH–weathering–carbon dynamics, including the role of soil pCO₂ and carbonate equilibria, see <a href="https://doi.org/10.1016/j.ijggc.2023.103872" target="_blank" rel="noopener">Dietzen, B. &amp; Rosing, M. (2023)</a>.
					</div>
				</div>

				<div class="graph-section">
					<div class="chart-container">
						<canvas id="phChart"></canvas>
					</div>
				</div>
				<p style="font-size: 0.85em; line-height: 1.3; margin-top: 0.5em;">
					<em>
						Figure 1. Conceptual trade-off between relative weathering rate and relative carbon capture efficiency as a function of soil pH. Highly acidic soils tend to promote fast mineral dissolution but may limit stable carbon storage, while alkaline soils slow weathering and favor carbonate precipitation with uncertain permanence. The optimal range for ERW typically lies between pH ~5.5 and 7, where both reactivity and durability are reasonably balanced.
					</em>
					<strong>
						<em>
							This curve is illustrative and based on characteristic soil conditions. The exact shape will vary with factors such as soil pCO₂, alkalinity, and total carbonate system buffering.
						</em>
					</strong>
					<em>
						(Adapted from 
						<a href="https://doi.org/10.1016/j.scitotenv.2022.156524" target="_blank" rel="noopener">Bertagni &amp; Porporato 2022</a>;
						<a href="https://doi.org/10.1016/j.ijggc.2023.103872" target="_blank" rel="noopener">Dietzen &amp; Rosing 2023</a>;
						<a href="https://pubs.acs.org/doi/10.1021/acs.est.4c02368" target="_blank" rel="noopener">Levy et al. 2024</a>.)
					</em>
				</p>
				<p>The Weathering Potential Explorer includes an optional pH filter that allows users to exclude soils outside of a user-specified range (with 4.5&ndash;8 as the default range). These are regions where weathering is either too slow or is less likely to lead to durable carbon storage under current MRV frameworks.</p>
				<p>The tool also offers a separate filter to exclude soils with high soil organic carbon (SOC) percentages. These regions often have abundant organic acids that can bind with cations like Ca&sup2;⁺ and Mg&sup2;⁺, reducing their ability to form stable bicarbonate. While these acid effects are reflected in the pH layer, the SOC mask provides an additional screen for areas where carbon removal efficiency may be suppressed.&nbsp;</p>
				<p>Soils with both low pH and high SOC may be high-risk zones for ERW deployment. In <a href="https://cascadeclimate.org/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>Foundations for Carbon Dioxide Removal Quantification in ERW Deployments</em></a>, <strong>SOC &gt;5% </strong>soils are flagged as areas with substantial risk of SOC loss under amendment. Users should carefully consider both geochemical and biological context when evaluating these regions.</p>
			</details>
<br>
		<details>
		<summary><h2 id="available-land" style="display: inline;">Available Land</h2></summary>
		<br>
			<p>Even under ideal weathering conditions, ERW is only viable where the land itself supports deployment. That means exposed soils, equipment access, and systems where applying rock powder is logistically and agronomically feasible. To date, the vast majority of field trials and commercial efforts have focused on cropland, where several enabling factors converge: soils are regularly amended, application equipment already exists, and there's a long-standing precedent for interventions like agricultural liming.</p>
			<p>The Weathering Potential Explorer centers on this logic by offering two optional cropland masks (ESA WorldCover (10 m) and GFSAD1000 (1 km)) to help users restrict analysis to actively managed agricultural areas. These filters narrow the focus to lands where ERW is most likely to be operationally viable and beneficial from a co-management perspective.</p>
			<p>Different croplands may vary widely in their suitability based on farming practices, infrastructure, or microclimate. And in some regions&mdash;particularly in the tropics&mdash;land cover maps may miss smallholder mosaics or mixed-use fields. The Explorer does not currently support user-added land filters, but advanced users can apply their own masks externally using GIS tools or by modifying the code in Google Earth Engine. If you are interested in accessing our source code, please contact arielle[at]cascadeclimate.org</p>
		</details>
<br>
		</section>

			<section id="rate-estimation">
			<h1>Relative Weathering Potential Estimation</h1>
			<p>The Weathering Potential Explorer calculates a relative weathering potential based on a simplified expression drawn from geochemical kinetics. The underlying idea is that weathering speed is influenced by three key environmental factors:</p>
			<ul>
			<li>Soil moisture (s) &ndash; representing the availability of water to facilitate reactions</li>
			<li>Proton concentration ([H⁺]) &ndash; derived from pH, which drives acid-promoted dissolution</li>
			<li>Temperature (T) &ndash; which accelerates reaction kinetics via the Arrhenius equation</li>
			</ul>
			<p>The core relationship follows the form:</p>
			
			<img src={explorereq} alt="r ∝ s[H+] Ae-Ea/(RT)" style="width: 50%; height: auto;" />

			<p>Where:</p>
			<ul>
			<li><em>r</em> is the relative weathering potential</li>
			<li><em>s</em> is a dimensionless soil moisture proxy&nbsp;</li>
			<li>[H+] is the proton concentration, calculated from the pH input as 10<sup>-pH</sup></li>
			<li><em>T</em> is absolute temperature in Kelvin&nbsp;</li>
			<li><em>A</em> is a pre-exponential constant (absorbed in normalization)</li>
			<li><em>E</em><em>a</em> ​is activation energy (68.8 kJ/mol in our model)</li>
			<li><em>R</em> is the universal gas constant</li>
			</ul>
			<p>It&rsquo;s important to note that this model estimates a relative weathering index, not an absolute weathering flux (i.e., mass of rock dissolved or carbon removed over time and space). The values are normalized across all land pixels, allowing for comparison between regions, but not for carbon removal quantification without additional assumptions.</p>

			<div class="erw-explanation-block">
				<p>
					Also note that this model assumes static environmental inputs, including pH. However, in reality, the application of alkaline rock can rapidly increase soil pH, sometimes within the first few weeks or months after spreading. This creates a feedback: while weathering initially proceeds quickly in acidic soils, the reaction itself tends to raise pH, which in turn slows further dissolution. As a result, the modeled weathering potentials are best interpreted as upper bounds that are most accurate in the early stages of rock application or at low doses. Long-term weathering trajectories are likely to differ as soil chemistry evolves.<sup>10</sup> Similarly, soil moisture and temperature may be impacted by ERW deployments.
				</p>
				<div class="erw-note">
					<strong>10</strong> See <a href="https://www.science.org/doi/10.1126/science.1250770" target="_blank" rel="noopener">Maher &amp; Chamberlain (2014)</a> for further discussion of dynamic soil chemical environments, and <a href="https://doi.org/10.1029/JB089iB06p04009" target="_blank" rel="noopener">Lasaga (1984)</a> or <a href="https://doi.org/10.1016/j.chemgeo.2003.03.001" target="_blank" rel="noopener">White &amp; Brantley (2003)</a> for classical derivations of mineral dissolution rate laws.
				</div>
			</div>
		</section>

			<section id="model-limitations">
			<h1>Model Limitations</h1>
			<h2>Data constraints</h2>
			<p>The Weathering Potential Explorer is designed as a global screening tool to support early-stage prioritization of where weathering may be quickest. It offers directional insights, not deployment prescriptions. Many of the core limitations were introduced earlier in this explainer (see <a href="#limitations1">Limitations of the Weathering Potential Explorer 
			</a>), but we expand on several key modeling assumptions and constraints here.</p>
			<h3>Resolution and Scale&nbsp;</h3>
			<p>The map operates at a resolution of approximately 1 km&sup2; per grid cell, or about 100 hectares. This is consistent with many global-scale land surface models and biogeochemical tools such as WorldClim, SoilGrids, and TerraClimate. This supports macro-scale targeting, but masks local variation. Promising micro-regions may not appear in the analysis, just as small mafic rock sources may be overlooked in coarse global geology layers. Users should treat the tool as a way to narrow the search, not to make site-level decisions. Field-scale baselining and operational considerations remains essential.&nbsp;</p>
			<h3>Temporal Resolution</h3>
			<p>The tool uses long-term annual averages for environmental variables, which smooth out seasonal dynamics and ignore interannual variability. More information about the datasets and resolutions can be found in <a href="#dataresolutions">Data Inputs and Spatial Resolutions</a>. While this makes global comparisons tractable, it may obscure short-term constraints or opportunities, such as monsoonal cycles or temporary droughts that influence when and how ERW can be applied.&nbsp;</p>
			<h3>Feedstock Assumptions&nbsp;</h3>
			<p>The model does not incorporate any information about feedstock properties, including amount applied, grain size, or mineral composition. All outputs are normalized to reflect <strong>a relative weathering potential per unit of reactive surface area</strong> under environmental conditions. That means variables like grain size or application rate do not influence the outputs directly, but would be required to translate the relative rate into a carbon removal flux.</p>
			<p>To represent broad mineral weathering behavior, the model assumes a fixed activation energy (68.8 kJ/mol), consistent with fast-weathering silicate feedstocks like basaltic glass. In reality, this parameter and overall reactivity varies with feedstock mineralogy, particle size, and surface coatings. These factors are critical for downstream carbon accounting but are held constant in this simplified model.</p>
			<h3>Land Use Classification&nbsp;</h3>
			<p>Cropland filters in the Explorer rely on datasets which are reliable at global scale but may miss smallholder systems or mosaic landscapes, especially in the tropics. These limitations are especially relevant for identifying ERW potential in places where farming systems are less intensively mapped. Users should interpret cropland masks as indicative, not definitive.</p>
			<h3>No Carbon Flux Estimation&nbsp;</h3>
			<p>The tool does not estimate CO₂ removal, even indirectly. Its output reflects comparative weathering reactivity, not carbon stored or creditable under MRV frameworks. Translating weathering potential into carbon flux requires additional assumptions about feedstock supply, application logistics, monitoring protocols, and downstream carbonate stability, all of which lie outside the scope of this tool.</p>
			<br>
			<h2>Beyond the Model: Practical and Economic Context</h2>
			<p>Successful ERW deployment depends on economic, logistical, and operational factors that vary widely from place to place and are not reflected in the Weathering Potential Explorer. For this reason, this tool is not a substitute for holistic planning at the site level.</p>
			<p>In most cases, it is the economic and operational conditions, rather than weathering potential alone, that determine whether ERW is viable, fundable, and capable of delivering real-world impact.</p>
			<p>One important consideration is <strong>proximity to</strong> <strong>suitable feedstocks</strong>. Most ERW projects today rely on mining byproducts, such as crushed basalt from aggregate production, rather than sourcing new rock solely for carbon removal. This approach minimizes environmental impact and leverages existing supply chains. Still, these materials are unevenly distributed. Large bodies of mafic and ultramafic rocks, including basalt and dunite (an olivine-rich rock), are geologically constrained to certain regions. Projects located near these formations and near active mines benefit from lower transportation costs, reduced emissions, and easier access to materials. Identifying optimal deployment zones requires balancing favorable weathering conditions with practical access to rock.</p>
			<p><strong>Infrastructure</strong> also matters. ERW requires not just proximity to rock sources, but also access to low-emission transport, grinding and spreading equipment, and sometimes laboratory capacity for monitoring. While tropical regions often offer favorable weathering conditions, infrastructure is often more developed in countries with greater industrial capacity and logistical access. This greatly influences where ERW can scale most cost-effectively. To estimate the costs of rock, hauling, and spreading (RHS) and measurement, reporting, and verification (MRV) for small-scale deployments, see the <a href="https://cascadeclimate.org/blog/erw-measurement-cost-stack-estimator-and-database" target="_blank" rel="noopener">ERW MRV Cost Estimator and Database</a>.</p>
			<p><strong>Energy and labor costs</strong> play a role as well. In parts of the Global South, lower costs may support deployment at scale, while in other regions, cleaner electricity grids may reduce lifecycle emissions during rock processing. These tradeoffs vary significantly by location and must be weighed against durability and monitoring needs.</p>
			<p>Finally, there is also growing interest in the agronomic benefits of ERW, especially in areas with acidic soils and low agricultural productivity. In these settings, ERW may help improve soil pH, enhance nutrient availability, and boost yields, offering local value beyond carbon. These benefits are particularly important in smallholder systems where agriculture is central to livelihoods and where large yield gaps remain. However, more research is needed to identify which crops and systems are most responsive to better quantify the local value of ERW.</p>
		</section>

		<section id="data-inputs-and-spatial-resolutions">
			<h1 id="dataresolutions">Data Inputs and Spatial Resolutions</h1>
			<div>
				<table class="wp-table" style="border-collapse: collapse; width: 100%;">
				<tbody>
				<tr class="wp-header">
				<td style="padding: 2px 0; width: 24%;"><strong>Variable</strong></td>
				<td style="padding: 2px 0; width: 24%;"><strong>Dataset</strong></td>
				<td style="padding: 2px 0; width: 22%; text-align: center;"><strong>Resolution</strong></td>
				<td style="padding: 2px 0; width: 30%; text-align: center;"><strong>Rationale</strong></td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Soil pH</td>
				<td style="padding: 8px; width: 24%;"><a href="https://www.isric.org/explore/soilgrids" target="_blank" rel="noopener">SoilGrids (ISRIC)</a>, H₂O pH mean at 0&ndash;200 cm depth (selectable)</td>
				<td style="padding: 8px; width: 22%; text-align: center;">250m</td>
				<td style="padding: 8px; width: 30%;">SoilGrids provides globally harmonized pH estimates at fine resolution, capturing surface soil chemistry relevant to weathering processes and crop root zones.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Soil Organic Carbon</td>
				<td style="padding: 8px; width: 24%;"><a href="https://stac.openlandmap.org/organic.carbon_usda.6a1c/collection.json?.language=en" target="_blank" rel="noopener">OpenLandMap</a>, 0&ndash;5 cm depth</td>
				<td style="padding: 8px; width: 22%; text-align: center;">1km</td>
				<td style="padding: 8px; width: 30%;">OpenLandMap was selected for its global availability and consistency with GEE. While local datasets may offer finer resolution in some regions, OpenLandMap provides a harmonized global baseline for exploratory screening.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Soil Texture</td>
				<td style="padding: 8px; width: 24%;"><a href="https://stac.openlandmap.org/texture.class_usda.tt/collection.json?.language=en" target="_blank" rel="noopener">OpenLandMap (USDA Soil Texture Classes)</a>, 0-5 cm depth</td>
				<td style="padding: 8px; width: 22%; text-align: center;">1km&nbsp;</td>
				<td style="padding: 8px; width: 30%;">OpenLandMap provides categorical classes (e.g., sandy loam, clay) at 1 km resolution, derived from harmonized soil profile data and machine learning models. While not directly used in the weathering potential calculation, this layer is useful for exploratory analysis, as texture can influence both soil moisture retention and reactive surface contact time.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Temperature</td>
				<td style="padding: 8px; width: 24%;"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0034425722005284" target="_blank" rel="noopener">GSHTD v1.0 (Global Subseasonal to Seasonal Hindcast Temperature Dataset)</a></td>
				<td style="padding: 8px; width: 22%; text-align: center;">1km / 30 arc-seconds</td>
				<td style="padding: 8px; width: 30%;">We use mean annual air temperature from GSHTD v1.0, which provides daily temperature estimates at 1 km resolution from 2001 to 2020. To reduce interannual noise and match the climatological scale of other inputs, we calculate the mean annual temperature across this full 20-year period.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Soil Moisture</td>
				<td style="padding: 8px; width: 24%;"><a href="https://www.nature.com/articles/s41597-023-02011-7" target="_blank" rel="noopener">GSSM1km, Han, Q., Zeng, Y., Zhang, L. et al. (2023)</a>, Climatological average for 2000&ndash;2020</td>
				<td style="padding: 8px; width: 22%; text-align: center;">1km</td>
				<td style="padding: 8px; width: 30%;">The GSSM1km dataset provides daily surface soil moisture (0&ndash;5 cm) at 1 km spatial resolution from 2000 to 2020. To align with the temporal scale of the other model inputs, we computed the mean annual value for each year and then averaged across all 21 years to produce a stable, globally consistent baseline.&nbsp;</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Cropland Boundaries</td>
				<td style="padding: 8px; width: 24%;">
					<a href="https://worldcover2020.esa.int/" target="_blank" rel="noopener">ESA WorldCover 2020</a> and 
					<a href="https://www.usgs.gov/centers/western-geographic-science-center/science/global-food-and-water-security-support-analysis" target="_blank" rel="noopener">GFSAD1000</a>
				</td>
				<td style="padding: 8px; width: 22%; text-align: center;">10 m (ESA), 1 km (GFSAD)</td>
				<td style="padding: 8px; width: 30%;">ESA WorldCover offers fine-scale land cover mapping, while GFSAD allows filtering for specific cropland types (e.g., irrigated, rainfed), making them complementary for mask-based queries.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Administrative Boundaries</td>
				<td style="padding: 8px; width: 24%;">
					<a href="https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_SIMPLE_2017" target="_blank" rel="noopener">USDOS LSIB 2017</a> (countries) and 
					<a href="https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level1" target="_blank" rel="noopener">FAO GAUL 2015 level 1</a> (states/provinces)
				</td>
				<td style="padding: 8px; width: 22%; text-align: center;">Vector</td>
				<td style="padding: 8px; width: 30%;">These standardized boundary datasets support region-based summaries and allow users to explore ERW potential at both national and subnational levels.</td>
				</tr>
				<tr>
				<td style="padding: 8px; width: 24%;">Analysis Scale</td>
				<td style="padding: 8px; width: 24%;">N/A</td>
				<td style="padding: 8px; width: 22%; text-align: center;">1km</td>
				<td style="padding: 8px; width: 30%;">To ensure consistency across datasets and efficient processing within Google Earth Engine, we resample all layers to a common working resolution of 1 km. This enables global coverage and comparability but means that local heterogeneity&mdash;such as microclimates, farm-scale variations, or nearby feedstock sources&mdash;is not captured.</td>
				</tr>
				</tbody>
				</table>
				</div>
				</section>

				<section id="conclusion">
					<h1>Conclusion</h1>
				<p>The Weathering Potential Explorer is the first global tool to map environmental suitability for ERW deployment. By combining publicly available datasets with a simplified mechanistic model, it helps identify regions where environmental conditions may be most conducive to effective weathering. This tool is only a directional guide and its outputs should be interpreted in context and paired with local knowledge, ground-truthing, and further baseline analyses. As momentum builds around ERW as a climate solution, we believe open-access tools like this can support private and public sector decision making to unlock the full potential of ERW.</p>
				<br>
				<h2>Credits&nbsp;</h2>
				<p>Development of the Weathering Potential Explorer was led by <a href="https://cascadeclimate.org/people/arielle-lok" target="_blank" rel="noopener">Arielle Lok</a>, building on the foundation of <a href="https://www.linkedin.com/in/abigail-fitzgibbon-482520144/" target="_blank" rel="noopener">Abigail Fitzgibbon</a>’s senior thesis at SciencesPo. Abigail’s research informed the model design, variable selection, and framing of the tool. Arielle developed the web application and authored the documentation with adapted portions of Abigail’s thesis text. Abigail also created the charts and animations used in the explainer.</p>

				<p>
					We offer special gratitude to 
					<a href="https://tylerkukla.com/" target="_blank" rel="noopener">Tyler Kukla</a> for major scientific feedback and model refinement, 
					<a href="https://www.linkedin.com/in/benjamin-m%C3%B6ller/" target="_blank" rel="noopener">Benjamin Möller</a> for technical review, 
					<a href="https://www.growingecology.com/" target="_blank" rel="noopener">Seth Whiteaker</a> for guidance on mapping best practices, and <a href="https://www.linkedin.com/in/xxmichaellong/" target="_blank" rel="noopener">Xiao Xiao Long</a> for website development support. Additional thanks to members of the Cascade Climate team who took the time to proofread and test the tool internally.
				</p>

				<p>If you identify any errors or have suggested updates to the web app or accompanying documentation, please contact arielle[at]cascadeclimate.org.</p>
		</section>
	</main>

<style>
	.graph-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		gap: 3rem;
		margin-top: 2rem;
	}

	.graph-section {
		background: white;
		padding: 0 2rem 10px 2rem;
		border-radius: 1rem;
		box-shadow: 0 2px 20px rgba(0,0,0,0.1);
	}

	.image-viewer {
		width: 100%;
	}

	.frame-image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	.slider-container {
		width: 100%;
	}

	.chart-container {
		width: 100%;
		height: 400px;
		position: relative;
	}

	.chart-container canvas {
		width: 100% !important;
		height: 100% !important;
	}

	.css-1erfxqa {
		width: 100%;
		height: 8px;
		background: #ddd;
		border-radius: 5px;
		outline: none;
		-webkit-appearance: none;
		appearance: none;
	}

	.css-1erfxqa::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
	}

	.css-1erfxqa::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
		border: none;
	}

	.css-1erfxqa:hover {
		background: #bbb;
	}

	/* Increase spacing between paragraphs */
	p {
		margin-bottom: 1rem;
	}

	/* Add extra spacing after headings */
	h1, h2, h3 {
		margin-bottom: 0.75rem;
	}

	/* Add spacing after lists */
	ul, ol {
		margin-bottom: 1rem;
	}

	/* Temperature chart specific styling */
	#temperatureChart {
		max-width: 800px;
		z-index: 1;
	}

	/* pH chart specific styling */
	#phChart {
		max-width: 800px;
		z-index: 1;
	}

	/* Ensure navigation headers have higher z-index */
	:global(.scroll-nav) {
		z-index: 10;
	}

	/* Temperature chart parent container styling */
	.graph-section:has(#temperatureChart) {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	/* pH chart parent container styling */
	.graph-section:has(#phChart) {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	/* Soils frame graph parent container styling */
	.graph-section:has(#soils-slider) {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	/* Temperature frame graph parent container styling */
	.graph-section:has(#temp-slider) {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	/* Ensure chart containers don't interfere with navigation */
	.chart-container {
		z-index: 1;
		position: relative;
	}

	/* Target Chart.js canvas elements specifically */
	.chart-container canvas {
		z-index: 1;
		position: relative;
	}

	/* Use the exact same main styling as about-us page */
	main {
		padding: 1rem 4rem;
		padding-bottom: 6rem;
	}

	main section {
		margin-top: -6rem;
		padding-top: 9rem;
		margin-bottom: -5rem;
		padding-bottom: 1rem;
	}

	/* Override blog layout's global styles that interfere with sticky nav */
	:global(main) {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}

	:global(main section) {
		border-bottom: none !important;
		display: block !important;
		gap: 0 !important;
	}

	@media (max-width: 660px) {
		main {
			padding: 2rem;
			padding-bottom: 6rem;
		}
	}

	/* Moisture section layout */
	.moisture-layout {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
		margin: 2rem 0;
	}

	.moisture-text {
		flex: 1;
	}

	.moisture-graph {
		flex: 1;
		max-width: 600px;
	}

	@media (max-width: 768px) {
		.graph-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.graph-section {
			padding: 1.5rem;
		}
	}
</style>