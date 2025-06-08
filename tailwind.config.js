/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1A202C',
        'dark-navy-light': '#2D3748',
        'off-white': '#F7FAFC',
        'custom-gray': '#A0AEC0',
        'trust-blue': '#4299E1',
        'trust-blue-hover': '#3182CE',
        'warm-orange': '#ED8936',
        'warm-orange-hover': '#DD6B20',
      },
      fontFamily: {
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'cube-hover': 'cubeHover 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        particleFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        cubeHover: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}