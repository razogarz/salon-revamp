/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-image': 'url("src/images/mini-img/zdjSalonu2-min.jpg")'
			}
		},
	},
	plugins: [],
}
