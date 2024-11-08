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
      },
      boxShadow: {
        box: '0 4px 8px -4px rgba(0, 0, 0, .13), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 12px 24px 16px rgba(0, 0, 0, .04);'
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
