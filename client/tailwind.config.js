/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{ts, tsx, js, jsx',
		'./public/index.html',
		'./src/components/**/*.{ts,tsx}',
	],
	content: [
		'./src/**/*.{html,js,tsx, ts}',
		'./public/index.html',
		'./src/components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				tillium: 'Titillium Web',
				inter: 'Inter',
			},
			colors: {
				primary: '#80a3e4',
				secondary: 'from-pink-300',
				dark: '#1a212e',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
		styled: true,
		// base: true,
		utils: true,
		logs: true,
		darkTheme: 'dracula',
	},
}
