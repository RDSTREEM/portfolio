<script>
	import { onMount } from 'svelte'
	import Section from '../../lib/components/Section.svelte'
	let projects = []
	let loading = true

	onMount(async () => {
		try {
			const res = await fetch('/data/projects.json')
			projects = await res.json() // Get all projects
		} catch (error) {
			console.error('Error fetching projects:', error)
		} finally {
			loading = false
		}
	})
</script>

<Section id="projects-archive" className="bg-black text-white">
	<div class="container mx-auto text-center">
		<h2 class="text-4xl font-bold mb-6">Projects Archive</h2>

		{#if loading}
			<p>Loading projects...</p>
		{:else if projects.length === 0}
			<p>No projects available at the moment.</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each projects as project}
					<div class="p-4 border rounded-lg hover:bg-gray-800 transition relative">
						<!-- Project Screenshot -->
						<img
							src={project.image || '/images/default_project.jpg'}
							alt="{project.title} screenshot"
							class="mb-4 rounded-lg w-full h-40 object-cover"
						/>

						<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
						<p class="text-gray-300 mb-4">{project.description}</p>

						<!-- Technologies Used -->
						{#if project.technologies}
							<p class="text-gray-400 text-sm mb-4">Technologies Used:</p>
							<ul class="list-disc list-inside text-gray-300 mb-4">
								{#each project.technologies as tech}
									<li>{tech}</li>
								{/each}
							</ul>
						{/if}

						<a href={project.link} target="_blank" class="text-blue-400 hover:underline">
							View Project
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</Section>
