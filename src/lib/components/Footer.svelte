<script>
	// TODO: Fix the Button
	import Contact from './Contact.svelte'
	import Section from './Section.svelte'
	const toggleEasterEggs = async () => {
		const response = await fetch('/toggle-easter-eggs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: 'yes'
		})
		if (response.ok) {
			location.reload()
		} else {
			console.error('Failed to toggle easter eggs')
		}
	}
</script>

<!-- Fix me -->
<!-- <button on:click={() => toggleEasterEggs()}>Toggle Easter Eggs?</button> -->
<Section id="contact" className="bg-gray-900 py-10" fullHeight={false}>
	<Contact />
</Section>
