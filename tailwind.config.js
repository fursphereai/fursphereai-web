/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'inset-0': 'inset(0)',
        'inset-custom': 'inset(10px 20px 10px 20px)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5676CF, #AFBFE9)',
      },
      fontFamily: {
        balooRegular: ['"Baloo 2 Regular"', "sans-serif"],
        balooExtraBold: ['"Baloo 2 ExtraBold"', "sans-serif"],
        Inter: ['"Inter"', "sans-serif"],
        Ubuntu: ['"Ubuntu"', "sans-serif"],
        UbuntuLight: ['"Ubuntu Light"', "sans-serif"],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
