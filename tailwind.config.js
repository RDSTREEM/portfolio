module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'],
	theme: {
		extend: {
			colors: {
				black: '#000',
				gray: {
					900: '#111',
					800: '#333',
					700: '#555'
				},
				blue: {
					400: '#00bfff',
					500: '#1e90ff',
					600: '#007fff'
				}
			}
		}
	},
	plugins: []
}
