<script>
	export let url = '#'
	export let className = ''
	export let colors = 'bg-blue-500 text-white hover:bg-blue-600'
</script>

<a href={url} class={`${colors} px-6 py-3 rounded-full transition ${className}`}>
	<slot />
</a>
