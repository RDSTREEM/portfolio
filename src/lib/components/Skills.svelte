<script>
	import Section from './Section.svelte'
</script>

<Section id="skills" fullHeight={false} className="py-12 bg-gray-900">
	<div class="container mx-auto text-center">
		<h2 class="text-4xl font-bold mb-6">Skills</h2>
		<p class="text-lg mb-8">Here are some technologies I am proficient in:</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="text-center">
				<i class="fab fa-js fa-4x text-yellow-500"></i>
				<p class="mt-4">JavaScript</p>
			</div>
			<div class="text-center">
				<i class="fab fa-sass fa-4x text-pink-500"></i>
				<p class="mt-4">SASS</p>
			</div>
			<div class="text-center">
				<i class="fab fa-react fa-4x text-blue-400"></i>
				<p class="mt-4">React</p>
			</div>
			<div class="text-center">
				<i class="fab fa-node fa-4x text-green-500"></i>
				<p class="mt-4">Node.js</p>
			</div>
		</div>
	</div>
</Section>
