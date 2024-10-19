<script>
	export let fullHeight = true
	export let className = ''
	export let colors = 'bg-black text-white'
	export let id = '#'
</script>

<section
	class={`${fullHeight ? 'min-h-screen' : ''} flex flex-col justify-center items-center text-center  ${className} ${colors}`}
	{id}
>
	<slot />
</section>
