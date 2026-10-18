import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#00685f',
        background: '#ffffff',
        foreground: '#0f172a',
        muted: { DEFAULT: '#f8fafc', foreground: '#64748b' },
        primary: { DEFAULT: '#00685f', foreground: '#ffffff', light: '#f0fdfa', border: '#ccfbf1' },
        secondary: { DEFAULT: '#f1f5f9', foreground: '#0f172a' },
        accent: { DEFAULT: '#f8fafc', foreground: '#0f172a' },
        card: { DEFAULT: '#ffffff', foreground: '#0f172a' },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        '2xs': '0 1px 0 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [forms],
}
