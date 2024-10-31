import path from 'node:path';

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', path.resolve(__dirname, './packages/frontend/component/src/**/*.{js,jsx,ts,tsx}')],
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
        muted: '--color-text-muted',
        hover: 'rgba(0, 0, 0, 0.06)'
      },
      borderColor: {
        divider: '#DEE0E3'
      },
      transitionDuration: {
        DEFAULT: '300ms'
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
