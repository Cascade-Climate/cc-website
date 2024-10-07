<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
</script>

<section class="intro">
	<div class="content">
		<div class="copy">
			<h1>Foundations for Carbon Removal Quantification in ERW Deployments</h1>
			<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
				a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
				word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
				Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
				popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
				amet..", comes from a line in section 1.10.32.
			</p>
			<p>
				The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
				interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
				also reproduced in their exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.
			</p>
		</div>
		<img src={erw} alt="Enhanced Rock Weathering" />
	</div>
	<div class="links">
		<PDFLink link="/example.pdf">Foundations - full document↗</PDFLink>
		<PDFLink link="/example.pdf">Foundations - technical executive summary↗</PDFLink>
	</div>
</section>
<ScrollNav />
<main>
	<section id="about">
		<h1>About</h1>
		<p>
			Philosophically, we put learning at the heart of our work—embracing rather than wishing away
			uncertainty and helping open-system climate intervention fields shift into virtuous
			learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
			chart if we hope to identify interventions that can be deployed safely, effectively, and
			responsibly.
		</p>
		<p>
			Nullam tincidunt tempor massa non porttitor. Aenean interdum lacus eget massa dapibus rutrum.
			Vestibulum iaculis id felis quis volutpat. Quisque malesuada auctor ullamcorper. Vestibulum id
			accumsan ligula. Duis eu quam eget leo vehicula mollis eget et est. Nulla facilisis dui vel
			erat mollis, et dictum ex aliquam. Nulla facilisi. Aliquam a sollicitudin neque, at luctus
			arcu. Suspendisse nec condimentum dolor. Suspendisse molestie bibendum purus eu venenatis.
			Fusce tincidunt dictum sodales. Sed vel cursus metus.
		</p>
	</section>
	<section id="credits">
		<h1>Credits</h1>
		<p>
			Philosophically, we put learning at the heart of our work—embracing rather than wishing away
			uncertainty and helping open-system climate intervention fields shift into virtuous
			learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
			chart if we hope to identify interventions that can be deployed safely, effectively, and
			responsibly.
		</p>
		<PDFLink link="/example.pdf" variant="accent"
			>Foundations for Carbon Removal Quantification in ERW Deployments - full document↗</PDFLink
		>
		<PDFLink link="/example.pdf" variant="accent"
			>Foundations for Carbon Removal Quantification in ERW Deployments - technical executive
			summary↗</PDFLink
		>
	</section>
	<section id="citation-and-usage">
		<h1>Citation and Usage</h1>
		<p>
			Philosophically, we put learning at the heart of our work—embracing rather than wishing away
			uncertainty and helping open-system climate intervention fields shift into virtuous
			learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
			chart if we hope to identify interventions that can be deployed safely, effectively, and
			responsibly.
		</p>
		<p>
			Nullam tincidunt tempor massa non porttitor. Aenean interdum lacus eget massa dapibus rutrum.
			Vestibulum iaculis id felis quis volutpat. Quisque malesuada auctor ullamcorper. Vestibulum id
			accumsan ligula. Duis eu quam eget leo vehicula mollis eget et est. Nulla facilisis dui vel
			erat mollis, et dictum ex aliquam. Nulla facilisi. Aliquam a sollicitudin neque, at luctus
			arcu. Suspendisse nec condimentum dolor. Suspendisse molestie bibendum purus eu venenatis.
			Fusce tincidunt dictum sodales. Sed vel cursus metus.
		</p>
	</section>
</main>
