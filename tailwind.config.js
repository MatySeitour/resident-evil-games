/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        loading: {
          '0%': { transform: "rotate(0deg)", filter: "grayscale(0)" },
          '20%': { filter: "grayscale(0)" },
          '40%': { filter: "grayscale(1)" },
          '60%': { filter: "grayscale(0)" },
          '80%': { filter: "grayscale(1)" },
          '100%': { filter: "grayscale(0)", transform: "rotate(360deg)" },
        },
        loadingImage: {
          '0%': { filter: "grayscale(1)" },
          '100%': { filter: "grayscale(0)" },
        },
        spin: {
          '0%': { transform: "rotate(0deg)" },
          '100%': { transform: "rotate(360deg)" },
        }
      },
      animation: {
        'loading': 'loading 5s linear infinite',
        'spin': 'spin 5s linear infinite',
        // 'loadingImage': 'loadingImage 1s linear infinite',
      }
    },
  },
  plugins: [],
}
