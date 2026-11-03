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
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2rem, 3.2vw, 2.75rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(1.75rem, 2.6vw, 2.25rem)', { lineHeight: '1.15' }],
        'h2': ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.2' }],
        'h3': ['1.125rem', { lineHeight: '1.35' }],
      },
      borderRadius: {
        'pill': '999px',
        'card': '12px',
      },
    },
  },
  plugins: [],
}
