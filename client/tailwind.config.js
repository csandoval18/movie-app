/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/*.{html,js,tsx, ts}',
		'./public/index.html',
		'./src/components/**/*.{ts,tsx}',
	],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			// 'light',
			// 'dark',
			{
				mytheme: {
					primary: 'rgb(147, 197, 253)',
					secondary: 'rgb(110, 231, 183)',
					accent: 'rgb(209, 213, 219)',
					neutral: 'rgb(25, 28, 40)',
					'base-100': 'rgb(14, 20, 31)',
					// 'base-100': '#ffffff',
					info: 'rgb(132, 166, 240)',
					success: 'rgb(134, 239, 172)',
					warning: 'rgb(252, 211, 77)',
					error: 'rgb(240, 119, 117)',
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
