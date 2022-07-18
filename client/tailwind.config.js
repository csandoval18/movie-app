/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{ts, tsx, js, jsx', './public/index.html'],
	content: ['./src/**/*.{html,js,tsx, ts}'],
	theme: {
		extend: {
			fontFamily: {
				tillium: 'Titillium Web',
				inter: 'Inter',
			},
			colors: {
				primary: '#202225',
				secondary: '#5865f2',
			},
		},
	},
	plugins: [],
}
