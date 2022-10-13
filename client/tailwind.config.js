/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/*.{html,js,tsx, ts}',
		'./public/index.html',
		'./src/components/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			// fontFamily: {
			// tillium: "'Titillium Web', sans-serif",
			// inter: 'Inter',
			// },
			// colors: {
			// 	primary: '#94b3eb',
			// 	'primary-content': '#ffffff',
			// 	secondary: '#e89eef',
			// 	accent: '#f7b7ec',
			// 	// 'base-100': '#111827',
			// 	// 'base-100': '#ffffff',
			// 	neutral: '#383B56',
			// },
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			// 'light',
			// 'dark',
			{
				mytheme: {
					primary: '#93c5fd',
					secondary: '#6ee7b7',
					accent: '#d1d5db',
					neutral: '#192239',
					// 'base-100': '#111827',
					'base-100': '#ffffff',
					info: '#84A6F0',
					success: '#86efac',
					warning: '#fcd34d',
					error: '#F07775',
				},
			},
		],

		styled: true,
		// base: true,
		utils: true,
		logs: true,
		darkTheme: 'dark',
	},
};
