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
				primary: '#94b3eb',
				'primary-content': '#ffffff',
				secondary: '#e89eef',
				accent: '#f7b7ec',
				'base-100': '#111827',
				eutral: '#383B56',
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
