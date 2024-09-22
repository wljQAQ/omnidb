import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: {
        small: '0.5rem',
        middle: '0.75rem',
        large: '1rem'
      },
      textColor: {
        primary: '--color-primary',
        secondary: '--color-secondary',
        muted: '--color-text-muted'
      },
      backgroundColor: {
        containHeader: 'var(--color-base)',
        primary: '--color-primary',
        secondary: '--color-secondary',
        muted: '--color-text-muted'
      },
      borderColor: {
        divider: 'rgb(240, 240, 240)'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
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
