/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC', // Primary Blue
          dark: '#0052a3',
          light: '#3385d6',
        },
        navy: {
          DEFAULT: '#0A1628', // Dark Navy
          light: '#1a2b42',
        },
        accent: {
          DEFAULT: '#00D4FF', // Bright Accent
        },
        success: '#00C896',
        alert: '#FF6B35',
        neutral: {
          gray: '#64748B',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
