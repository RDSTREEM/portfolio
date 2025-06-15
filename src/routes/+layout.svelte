<script>
	import '../app.css'
	import Footer from '../lib/components/Footer.svelte'
	import Navbar from '../lib/components/Navbar.svelte'
	import { onMount } from 'svelte'

	// Easter egg: Konami Code
	let showEasterEgg = false
	const konamiCode = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'b',
		'a'
	]
	let input = []

	function handleKeydown(e) {
		input.push(e.key)
		if (input.length > konamiCode.length) input.shift()
		if (input.join(',') === konamiCode.join(',')) {
			showEasterEgg = true
			setTimeout(() => (showEasterEgg = false), 4000)
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown)
		return () => window.removeEventListener('keydown', handleKeydown)
	})
</script>

<Navbar />
<slot />
<Footer />

{#if showEasterEgg}
	<div
		style="position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);color:#fff;font-size:2rem;"
	>
		🎉 Secret Unlocked! You found the easter egg! 🎉
	</div>
{/if}
