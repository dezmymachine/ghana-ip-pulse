/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1A3C2E',
        'warm-gold': '#C8992A',
        'linen': '#F7F4EF',
        'near-black': '#141414',
        'muted-text': '#5A5A4A',
        'rule-border': '#D4C9B0',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'subheading': ['DM Serif Display', 'serif'],
        'body': ['Source Serif 4', 'serif'],
        'label': ['Archivo Narrow', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
      },
    },
  },
  plugins: [],
}
