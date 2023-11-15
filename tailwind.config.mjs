/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"main-color": "#ED5AB3",
				"secondary-color": "#988BC7",
				"theme": "#191622"
			}
		},
	},
	plugins: [],
}
