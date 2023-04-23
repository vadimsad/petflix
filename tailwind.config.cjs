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
				notsodark: '#12263b',
				dark: '#0D1B2A',
				darker: '#00171F',
				darkTransparent: 'rgba(13, 27, 42, 0.8)',
				notsolight: '#b8d4e0',
				light: '#DCEAF0',
				lightTransparent: 'rgba(220, 234, 240, 0.8);',
				yellow: '#F8DB2F',
				blue: '#18324e',
			},
			container: {
				center: true,
			},
			gridTemplateColumns: {
				catalog: 'repeat(auto-fit, minmax(250px, 1fr))',
			},
			screens: {
				xsm: '460px',
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
