/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#ff004c',
          'red-dark': '#c0006a',
          green: '#00c247',
          'green-dark': '#00a83c',
          'green-light': '#00ff5e',
          ink: '#0a0a0a',
          cream: '#fff8fb',
        },
      },
      boxShadow: {
        cta: '0 12px 38px -8px rgba(0, 194, 71, 0.55)',
        'cta-hover': '0 18px 48px -8px rgba(0, 194, 71, 0.7)',
        card: '0 4px 24px -8px rgba(192, 0, 106, 0.12), 0 1px 0 0 rgba(255, 255, 255, 0.6) inset',
        soft: '0 2px 14px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        sweep: 'sweep 2.4s ease infinite',
        spin: 'spin 4s linear infinite',
        blink: 'blink 1s step-start infinite',
        'fade-down': 'fadeDown 0.7s ease both',
        'fade-up': 'fadeUp 0.9s ease both',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
