/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
			colors: {
				brand: {
					DEFAULT: '#3786e5',
					darker: '#317cde',
					dark: '#285fac'
				}
			}
		},
  },
  plugins: [],
}
