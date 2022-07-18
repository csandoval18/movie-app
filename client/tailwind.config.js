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
				primary: '#546bff',
				secondary: '#11131c',
			},
		},
	},
	plugins: [],
}
