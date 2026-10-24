/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cra: {
          black: '#0B0B0B',
          dark: '#121212',
          surface: '#181818',
          card: '#1F1F1F',
          border: '#2C2C2C',
          gold: {
            DEFAULT: '#D4AF37',
            light: '#E6CA65',
            dark: '#AA8518',
            dim: 'rgba(212, 175, 55, 0.15)',
            glow: 'rgba(212, 175, 55, 0.35)',
          },
          muted: '#9E9E9E',
          silver: '#E0E0E0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
