/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	// purge: [
	// 	'./src/**/*.{ts, tsx, js, jsx',
	// 	'./public/index.html',
	// 	'./src/components/**/*.{ts,tsx}',
	// ],
	content: [
		'./src/*.{html,js,tsx, ts}',
		// './public/index.html',
		'./src/components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				// tillium: "'Titillium Web', sans-serif",
				// inter: 'Inter',
			},
			colors: {
				primary: '#edcd6f',
				secondary: '#e89eef',
				accent: '#f7b7ec',
				neutral: '#28273F',
				'base-100': '#383B56',
				info: '#459EF2',
				success: '#12683A',
				warning: '#AA6D13',
				error: '#EE5370',
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
