<script>
	import LinkButton from './LinkButton.svelte'
	import Section from './Section.svelte'
</script>

<Section id="hero">
	<h1 class="text-6xl font-bold mb-4">Hi, I am Nahom!</h1>
	<p class="text-xl mb-6">
		I'm an Ethiopian full stack web developer passionate about building beautiful web experiences.
	</p>
	<div class="flex md:flex-row md:space-y-0 space-y-4 flex-col">
		<LinkButton className="md:mr-4" url="/resume.pdf">Get Resume</LinkButton>
		<LinkButton className="md:ml-4" url="#contact">Hit me Up</LinkButton>
	</div>
</Section>
