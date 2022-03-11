module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#071224',
        'blue-light': '#1B2C48',
        'yellow-font': '#FEF769',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bg-image': 'url("/background.png")',
        cyberpunk: 'url("/cyberpunk_background.png")',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
