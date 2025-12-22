<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/people/ali-white.webp'; // Update this line & make sure the new image is present in the src/lib/images/people folder
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Ali White - Cascade Climate</title> <!-- Update this line -->
	<meta name="description" content="Learn more about Ali White's role at Cascade Climate." /> <!-- Update this line -->
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Ali White</h1> <!-- Update this line -->
		<div class="details">
			<span>Program Manager</span> <!-- Update this line -->
			<div class="socials">																					
				<a target="_blank" href="https://www.linkedin.com/in/ajwhite572/"> <!--                              -->
					<img src={linkedinIcon} alt="LinkedIn" />											 <!--                              -->                      <!--                              -->
				</a> 																														 <!--                              -->
			</div>
		</div>
		<p>A refrigerant management expert working across markets, policy, and technology to support innovative, high-impact hydrofluorocarbon (HFC) emissions reduction initiatives. Most recently, Ali was responsible for supporting the development and implementation of U.S. Environmental Protection Agency HFC regulations under the American Innovation and Manufacturing (AIM) Act at Abt Global. Previously, Ali held a series of engineering and consulting roles at VEIC, a nonprofit organization focused on building decarbonization. There, she designed, developed, and scaled lifecycle refrigerant management (LRM) programs that bridge technical rigor with real-world adoption. She also managed HFC emissions reductions projects totalling over 500,000 metric tons CO2e in lifetime avoided emissions which involved deep collaboration with diverse stakeholders including refrigeration technicians, business owners, government agencies, and equipment manufacturers.
		</p>
		<p>
		Ali holds a B.S. in Environmental Engineering from the University of Vermont. She lives in the Boston, Massachusetts area with her husband where she enjoys cooking, reading, traveling, and escaping back to Vermont to spend time in nature.</p> <!-- Update this line -->
	</div>
	<div class="headshot">
		<img src={headshot} alt="Ali White" /> <!-- Update this line -->
	</div>
</div>