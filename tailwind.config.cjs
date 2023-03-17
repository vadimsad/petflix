/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Source Sans Pro', 'sans-serif'],
			},
			colors: {
				dark: '#0D1B2A',
				light: '#DCEAF0',
				yellow: '#F8DB2F',
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
