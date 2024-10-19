<script>
	import { onMount } from 'svelte'
	import Section from './Section.svelte'
	let projects = []

	onMount(async () => {
		const res = await fetch('/data/projects.json')
		projects = await res.json()
	})
</script>

{#if projects == null}
	<Section id="projects" className=" bg-black text-white">
		<div class="container mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">Projects</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each projects as project}
					<div class="p-4 border rounded-lg hover:bg-gray-800 transition">
						<h3 class="text-xl font-semibold">{project.title}</h3>
						<p>{project.description}</p>
						<a href={project.link} target="_blank" class="text-blue-400 hover:underline"
							>View Project</a
						>
					</div>
				{/each}
			</div>
		</div>
	</Section>
{/if}
