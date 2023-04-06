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
				darker: '#00171F',
				darkTransparent: 'rgba(13, 27, 42, 0.8)',
				light: '#DCEAF0',
				lightTransparent: 'rgba(220, 234, 240, 0.8);',
				yellow: '#F8DB2F',
			},
			container: {
				center: true,
			},
			keyframes: {
				appear: {
					'0%': {
						transform: 'translateY(50px)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1,
					},
				},
			},
			animation: {
				appear: 'appear 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
