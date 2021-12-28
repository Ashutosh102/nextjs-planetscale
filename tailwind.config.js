module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      transparent: 'transparent',
      gray: {
        50: 'var(--gray-050)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)'
      },
      red: {
        50: 'var(--red-050)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
        700: 'var(--red-700)',
        800: 'var(--red-800)',
        900: 'var(--red-900)'
      },
      blue: {
        50: 'var(--blue-050)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
        700: 'var(--blue-700)',
        800: 'var(--blue-800)',
        900: 'var(--blue-900)'
      }
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)'
      },
      borderColor: {
        DEFAULT: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        green: 'var(--border-green)'
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        full: '9999px'
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        mono: ['ui-monospace', 'Menlo', 'IBM Plex Mono', 'Consolas', 'Liberation Mono', 'monospace']
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '32px'
      },
      fontWeight: {
        // We use normal, medium, and semibold only.
        // Lighter and heavier are capped to these.
        hairline: 400,
        'extra-light': 400,
        thin: 400,
        light: 400,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 600,
        extrabold: 600,
        'extra-bold': 600,
        black: 600
      },
      height: {
        button: '34px',
        'button-sm': '32px',
        'button-lg': '48px',
        'indicator-dot': '6px',
        'nav-link': '38px',
        badge: '22px'
      },
      spacing: {
        xs: '2px',
        sm: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        4: '32px',
        4.5: '36px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        '-sm': '-4px'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        blue: 'var(--text-blue)',
        green: 'var(--text-green)',
        orange: 'var(--text-orange)',
        red: 'var(--text-red)',
        'red-disabled': 'var(--text-red-disabled)',
        purple: 'var(--text-purple)',
        'light-purple': 'var(--purple-400)'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  }
}
