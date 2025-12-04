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
        linear: {
          main: '#030014', // Deep Space Black
          card: 'rgba(255, 255, 255, 0.03)',
          stroke: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.05)',
        },
        primary: {
          DEFAULT: '#5E6AD2', // Linear Purple
          dark: '#4e5ac0',
          light: '#7A85E8',
        },
        accent: {
          DEFAULT: '#00D4FF', // Cyan Glow
          purple: '#BF5AF2',
          pink: '#FF2D55',
        },
        navy: {
          DEFAULT: '#0A1628',
          light: '#1a2b42',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
        'glass': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 0.6s linear forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
