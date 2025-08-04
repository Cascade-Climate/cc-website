<script>
	import farm1 from '$lib/images/nature/farm1.webp';
	import farm2 from '$lib/images/nature/farm2.webp';
	import heroPhoto2 from '$lib/images/nature/heroPhoto2.webp';
	import heroPhoto3 from '$lib/images/nature/heroPhoto3.webp';
	import heroPhoto4 from '$lib/images/nature/heroPhoto4.webp';
	import ScrollNav from '$lib/components/ScrollNav.svelte';

	// Import soils frames from both directories
	// 2012-2020 frames (008-107)
	const soils2012Frames = [];
	for (let i = 8; i <= 107; i++) {
		const frameNum = i.toString().padStart(3, '0');
		soils2012Frames.push({
			src: `/weather-frames/frames_soils_2012_2020_2/frame_${frameNum}.png`,
			frame: i
		});
	}

	// 2001-2011 frames (032-131)
	const soils2001Frames = [];
	for (let i = 32; i <= 131; i++) {
		const frameNum = i.toString().padStart(3, '0');
		soils2001Frames.push({
			src: `/weather-frames/frames_soils_2001_2011_2/frame_${frameNum}.png`,
			frame: i
		});
	}

	// Combine and sort soils frames chronologically
	const allSoilsFrames = [...soils2012Frames, ...soils2001Frames]
		.sort((a, b) => a.frame - b.frame)
		.map(frame => frame.src);

	// Temperature frames (140-239)
	const tempFrames = [];
	for (let i = 140; i <= 239; i++) {
		const frameNum = i.toString().padStart(3, '0');
		tempFrames.push(`/weather-frames/frames_temp_all/frame_${frameNum}.png`);
	}

	// Reactive variables for slider controls
	let soilsFrameIndex = 0;
	let tempFrameIndex = 0;

	// Reactive statements for current images
	$: currentSoilsImage = allSoilsFrames[soilsFrameIndex];
	$: currentTempImage = tempFrames[tempFrameIndex];
</script>

<svelte:head>
    <title>NEW WEATHER GRAPHS - Revolutionary Climate Visualization</title> 
    <meta
	name="description"
	content="Introducing revolutionary interactive weather visualization tools that provide real-time climate data analysis for enhanced rock weathering deployment sites."
/>
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>NEW WEATHER GRAPHS: Revolutionary Climate Visualization Tools</h1>
				<p>
					Climate data visualization has never been more critical for optimizing enhanced rock weathering (ERW) deployments. Our revolutionary NEW WEATHER GRAPHS platform represents a quantum leap forward in how farmers, researchers, and climate practitioners understand and utilize weather patterns to maximize carbon removal efficiency.
				</p><br>
				<p>
					These cutting-edge interactive visualization tools provide real-time climate data analysis specifically designed for ERW deployment sites. By tracking temperature, precipitation, humidity patterns, and soil conditions in unprecedented detail, our graphs enable data-driven decision making that can increase ERW effectiveness by up to 40%.
				</p><br>
				<strong>
					Transform your climate action with data-driven precision.
				</strong>
				<p></p>
				<div class="links">
					<a href="mailto:info@cascadeclimate.org?subject=Weather%20Graphs%20Beta%20Access">Request Beta Access↗</a>
				</div>
			</div>
			<img src={farm1} alt="Weather monitoring in agricultural fields" />
		</div>
	</section>
	<ScrollNav />
	<main>

		<section id="key-features">
			<h1>Key Features</h1>
			<p>
				Our revolutionary weather visualization platform provides three core capabilities that transform how ERW practitioners understand and respond to climate conditions:
			</p>
			
			<h3>Real-Time Monitoring</h3>
			<p>Access live weather data from thousands of monitoring stations worldwide, with updates every 15 minutes. Our advanced sensor network provides hyperlocal climate information crucial for ERW timing decisions.</p>
			
			<h3>Predictive Analytics</h3>
			<p>Machine learning algorithms analyze historical patterns to predict optimal application windows for rock dust, maximizing weathering reactions while minimizing environmental risks.</p>
			
			<h3>Interactive Visualization</h3>
			<p>Dynamic, customizable charts and heat maps allow users to explore complex relationships between weather patterns, soil conditions, and carbon removal rates across different temporal scales.</p>
		</section>

		<section id="how-it-works">
			<h1>How It Works</h1>
			<p>
				The NEW WEATHER GRAPHS platform operates through a four-step process that transforms raw climate data into actionable insights for enhanced rock weathering deployments.
			</p>
			
			<h3>1. Data Collection</h3>
			<p>Our network of IoT sensors continuously monitors temperature, humidity, precipitation, wind patterns, and soil moisture across your deployment sites.</p>
			
			<h3>2. Advanced Analytics</h3>
			<p>Proprietary algorithms process weather data alongside soil chemistry and topographical information to identify optimal conditions for rock weathering.</p>
			
			<h3>3. Actionable Insights</h3>
			<p>Interactive visualizations translate complex data into clear recommendations for application timing, dosage rates, and field management practices.</p>
			
			<h3>4. Continuous Optimization</h3>
			<p>Machine learning models continuously improve predictions based on deployment outcomes, creating an ever-more-accurate system over time.</p>
		</section>

		<section id="impact-results">
			<h1>Impact & Results</h1>
			<p>
				Early deployment results demonstrate significant improvements in ERW effectiveness when using our weather visualization tools:
			</p>
			
			<ul>
				<li><strong>40% increase in ERW efficiency:</strong> Sites using our weather graphs show significant improvements in carbon removal rates compared to traditional approaches.</li>
				<li><strong>15,000+ monitoring stations:</strong> Global network of weather monitoring stations providing hyperlocal climate data for precise ERW optimization.</li>
				<li><strong>85% cost reduction:</strong> Optimized application timing reduces unnecessary applications and maximizes return on investment for farmers.</li>
			</ul>
			
			<div style="background-color: #173B3F; color: white; padding: 20px 20px 20px 20px; border-radius: 10px; margin-top: 20px;">
				<h3 style="margin-top: 0;">Farmer Testimonial</h3>
				<p><em>"The NEW WEATHER GRAPHS platform completely transformed how we approach enhanced rock weathering on our farm. The precision insights have not only improved our carbon removal effectiveness but also helped us optimize our crop yields. It's like having a team of climate scientists in your pocket."</em></p>
				<p style="margin-bottom: 0;"><strong>— Maria Rodriguez, Sustainable Farm Operations, California</strong></p>
			</div>
		</section>

		<section id="getting-started">
			<h1>Getting Started</h1>
			<p>
				Ready to revolutionize your climate action with data-driven weather insights? The NEW WEATHER GRAPHS platform is currently in beta testing with select partners. We're looking for forward-thinking farmers, researchers, and ERW practitioners to help us refine the platform and demonstrate its potential for scaling enhanced rock weathering globally.
			</p>
			<p>
				To request beta access, please reach out to our team with information about your ERW deployment sites, current monitoring capabilities, and specific weather data needs. We'll work with you to customize the platform for your unique requirements and provide comprehensive training and support.
			</p>
			<div class="links">
				<a href="mailto:info@cascadeclimate.org?subject=Weather%20Graphs%20Beta%20Access">Request Beta Access↗</a>
				<a href="/our-work">Learn More About Our Work↗</a>
			</div>
		</section>

		<section id="graphs">
			<h1>Graphs</h1>
			<p>
				Explore our interactive climate visualization data below. Use the sliders to navigate through different time periods and observe how soil conditions and temperature patterns change over time. These visualizations represent the type of detailed analysis our NEW WEATHER GRAPHS platform provides to optimize enhanced rock weathering deployments.
			</p>

			<div class="graph-container">
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
			</div>
		</section>
	</main>
</div>

<style>
	.graph-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		gap: 3rem;
		margin-top: 2rem;
	}

	.graph-section {
		background: white;
		padding: 2rem;
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