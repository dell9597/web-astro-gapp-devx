/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: "'Montserrat', sans-serif",
				Audiowide: "'Audiowide', cursive",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
