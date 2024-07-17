import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center'
        },
        '.flex-between': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'space-between'
        }
      });
    })
  ]
};
