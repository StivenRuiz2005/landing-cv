/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'game-dark': {
          DEFAULT: '#050B1F',
          light: '#0A1440',
          lighter: '#0F1D5C',
        },
        'game-blue': {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        'game-cyan': {
          DEFAULT: '#22D3EE',
          light: '#67E8F9',
          dark: '#06B6D4',
        },
        'game-purple': {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        'game-light': {
          DEFAULT: '#F0F6FF',
          dark: '#E0EDFF',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'blink': 'blink 1s step-end infinite',
        'fill-bar': 'fill-bar 1.5s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fill-bar': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width)' },
        },
      },
      boxShadow: {
        'neon': '0 0 10px currentColor',
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
