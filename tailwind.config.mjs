/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0D3B2E',
        'forest-green-light': '#1A5A48',
        'warm-gold': '#B8860B',
        'cream': '#F5F0E8',
        'near-black': '#141414',
        'muted-text': '#5A5A4A',
        'rule-border': '#E8E2D9',
      },
      fontFamily: {
        'heading': ['Sora', 'sans-serif'],
        'body': ['Sora', 'sans-serif'],
      },
      borderRadius: {
        'pill': '999px',
        'card': '20px',
      },
    },
  },
  plugins: [],
}
