<script>
	import { slide } from 'svelte/transition'

	let menuOpen = false
	let Nahom = 'Nahom'
	const toggleMenu = () => (menuOpen = !menuOpen)
</script>

<nav class="navbar fixed top-0 left-0 w-full z-10 py-4 bg-black text-white">
	<div class="container mx-auto flex justify-between items-center px-6">
		<a href="/" class="text-3xl font-bold">{Nahom}</a>
		<div class="hidden md:flex space-x-6">
			<a href="#about">About</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</div>

		<!-- Hamburger button -->
		<button class="menu-btn md:hidden relative z-20" on:click={toggleMenu} class:open={menuOpen}>
			<div class="bar1 w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
			<div class="bar2 w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
			<div class="bar3 w-6 h-0.5 bg-white transition-all duration-300"></div>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div
			class="md:hidden flex flex-col bg-gray-900 p-4 transition-all duration-500 ease-in-out transform text-lg space-y-4"
			transition:slide
		>
			<a
				href="#about"
				on:click={toggleMenu}
				class="text-white hover:text-blue-500 transition-all duration-300">About</a
			>
			<a
				href="#skills"
				on:click={toggleMenu}
				class="text-white hover:text-blue-500 transition-all duration-300">Skills</a
			>
			<a
				href="#projects"
				on:click={toggleMenu}
				class="text-white hover:text-blue-500 transition-all duration-300">Projects</a
			>
			<a
				href="#contact"
				on:click={toggleMenu}
				class="text-white hover:text-blue-500 transition-all duration-300">Contact</a
			>
		</div>
	{/if}
</nav>

<style>
	.menu-btn.open .bar1 {
		transform: rotate(45deg) translate(5px, 5px);
	}
	.menu-btn.open .bar2 {
		opacity: 0;
	}
	.menu-btn.open .bar3 {
		transform: rotate(-45deg) translate(5px, -5px);
	}
</style>
