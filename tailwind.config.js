/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
        etma: ['inter', 'sans-serif'],
        },
      extend: {
        borderSpacing: {
          'spacing-0,5': '0.125rem',
          'spacing-1': '0.25rem',
          'spacing-1,5': '0.375rem',
          'spacing-2': '0.5rem',
          'spacing-3': '0.75rem',
          'spacing-4': '1rem',
          'spacing-6': '1.5rem',
          'spacing-8': '2rem',
          'spacing-10': '2.5rem',
        },
        borderRadius: {
          'border-radius-rounded-sm': '0.125rem',
          'border-radius-rounded': '0.25rem',
          'border-radius-rounded-md': '0.375rem',
          'border-radius-rounded-lg': '0.5rem',
          'border-radius-rounded-xl': '0.75rem',
          'border-radius-rounded-2xl': '1rem',
          'border-radius-rounded-full': '624.9375rem',
        },
        colors: {
          "etma-blue": {
            50: "#F0F8FF",
            100: "#E0F0FE",
            200: "#B9E1FE",
            300: "#7CCAFD",
            400: "#36B0FA",
            500: "#0C96EB",
            600: "#006CB7",
            700: "#015DA3",
            800: "#0B5086",
            900: "#0B436F",
            950: "#072A4A",
          },
          "etma-red": {
          50: "#FFF1F2",
          100: "#FFDFE2",
          200: "##FFC5CB",
          300: "#FF9DA6",
          400: "#FF6574",
          500: "#FF3447",
          600: "#ED1B2F",
          700: "#C70E20",
          800: "#A4101E",
          900: "#88141F",
          950: "#4A050C"
          },
          "etma-citrus": {
          50: "#FBFCE9",
          100: "#F3F7D0",
          200: "#E8F0A6",
          300: "#D5E472",
          400: "#C1D546",
          500: "#ADC32B",
          600: "#7F941C",
          700: "#61711A",
          800: "#4D5A1A",
          900: "#424D1A",
          950: "#222A09"
          },
          "etma-success": {
          50: "#F0FDF2",
          100: "#DBFDE2",
          200: "#BAF8C7",
          300: "#84F19C",
          400: "#47E16A",
          500: "#1FC845",
          600: "#13A634",
          700: "#13822D",
          800: "#156629",
          900: "#135424"
          },
          "etma-warning": {
          50: "#FFF9E7",
          100: "#FFF1C1",
          200: "#FFE187",
          300: "#FFC942",
          400: "#FFAF0F",
          500: "#E08B02",
          600: "#CF6F00",
          700: "#A54C03",
          800: "#883C0B",
          900: "#733110"
          },
          "etma-danger": {
          50: "#FEF4EE",
          100: "#FDE5D7",
          200: "#FAC7AE",
          300: "#F6A07B",
          400: "#F16F46",
          500: "#ED451B",
          600: "#DF3217",
          700: "#B92315",
          800: "#931D19",
          900: "#771C17"
          },
          "etma-neutral": {
          50: "#F5F6F6",
          100: "#E4E8E9",
          200: "#CCD4D5",
          300: "#A9B5B7",
          400: "#7E8F92",
          500: "#637377",
          600: "#556166",
          700: "#495256",
          800: "#40484A",
          900: "#393E40"
          },
          "etma-ui": {
          50: "#F8FBFC",
          100: "#EEF3F6",
          },
          'color-text-base': '#ffffff',
          'color-ui-100': '#f4f8fa',
          'color-ui-200': '#edf4f7',
          'color-ui-300': '#dcebef',
          'color-ui-50': '#f8fbfc',
          'color-blue-100': '#e0f0fe',
          'color-blue-200': '#b9e1fe',
          'color-blue-300': '#7ccafd',
          'color-blue-400': '#36b0fa',
          'color-blue-50': '#f0f8ff',
          'color-blue-500': '#0c96eb',
          'color-blue-600': '#006cb7',
          'color-blue-700': '#015da3',
          'color-blue-800': '#065086',
          'color-blue-900': '#0b436f',
          'color-blue-950': '#072a4a',
          'color-citrus-100': '#f3f7d0',
          'color-citrus-200': '#e8f0a6',
          'color-citrus-300': '#d5e472',
          'color-citrus-400': '#c1d546',
          'color-citrus-50': '#fbfce9',
          'color-citrus-500': '#adc32b',
          'color-citrus-600': '#7f941c',
          'color-citrus-700': '#61711a',
          'color-citrus-800': '#4d5a1a',
          'color-citrus-900': '#424d1a',
          'color-citrus-950': '#222a09',
          'color-golden-100': '#fff1c1',
          'color-golden-50': '#fff9e7',
          'color-golden-500': '#e08b02',
          'color-green-100': '#dbfde2',
          'color-green-50': '#f0fdf2',
          'color-green-700': '#13822d',
          'color-neutral-0': '#ffffff',
          'color-neutral-100': '#f4f4f5',
          'color-neutral-200': '#e4e4e7',
          'color-neutral-300': '#d6d6db',
          'color-neutral-400': '#b6b6be',
          'color-neutral-50': '#fafafa',
          'color-neutral-500': '#9e9ea9',
          'color-neutral-600': '#888895',
          'color-neutral-700': '#6c6c79',
          'color-neutral-800': '#4d4d57',
          'color-neutral-900': '#303036',
          'color-orange-100': '#fde5d7',
          'color-orange-50': '#fef4ee',
          'color-orange-500': '#ed451b',
          'color-orange-600': '#df3217',
          'color-red-100': '#ffdfe2',
          'color-red-200': '#ffc5cb',
          'color-red-300': '#ff9da6',
          'color-red-400': '#ff6574',
          'color-red-50': '#fff1f2',
          'color-red-500': '#ff3447',
          'color-red-600': '#ed1b2f',
          'color-red-700': '#c70e20',
          'color-red-800': '#a4101e',
          'color-red-900': '#88141f',
          'color-red-950': '#4a050c',
          'background-background-base-default': 'var(--color-neutral-0)',
          'background-background-base-hover': 'var(--color-neutral-100)',
          'background-background-brand-accent': 'var(--color-blue-50)',
          'background-background-brand-default': 'var(--color-blue-600)',
          'background-background-brand-hover': 'var(--color-blue-800)',
          'background-background-danger': 'var(--color-orange-50)',
          'background-background-danger-inverse': 'var(--color-orange-500)',
          'background-background-danger-inverse-hover': 'var(--color-orange-600)',
          'background-background-dark': 'var(--color-neutral-900)',
          'background-background-disabled': 'var(--color-neutral-100)',
          'background-background-overlay': '#393e4080',
          'background-background-subtle': 'var(--color-neutral-50)',
          'background-background-success': 'var(--color-green-50)',
          'background-background-success-inverse': 'var(--color-green-700)',
          'background-background-warning': 'var(--color-golden-50)',
          'background-background-warning-inverse': 'var(--color-golden-500)',
          'border-border-base': 'var(--color-neutral-200)',
          'border-border-bold': 'var(--color-neutral-300)',
          'border-border-brand-default': 'var(--color-blue-300)',
          'border-border-brand-hover': 'var(--color-blue-600)',
          'border-border-brand-subtle': 'var(--color-blue-100)',
          'border-border-button': 'var(--color-neutral-100)',
          'border-border-danger': 'var(--color-orange-500)',
          'border-border-danger-subtle': 'var(--color-orange-100)',
          'border-border-divider': 'var(--color-neutral-200)',
          'border-border-input-active': 'var(--color-blue-600)',
          'border-border-success': 'var(--color-green-700)',
          'border-border-success-subtle': 'var(--color-green-100)',
          'border-border-warning': 'var(--color-golden-500)',
          'border-border-warning-subtle': 'var(--color-golden-100)',
          'chart-chart-blue-base': 'var(--color-blue-600)',
          'chart-chart-blue-dark': 'var(--color-blue-800)',
          'chart-chart-blue-light': 'var(--color-blue-400)',
          'chart-chart-citrus-base': 'var(--color-citrus-500)',
          'chart-chart-citrus-dark': 'var(--color-citrus-700)',
          'chart-chart-citrus-light': 'var(--color-citrus-300)',
          'chart-chart-line': 'var(--color-neutral-100)',
          'icon-icon-base': 'var(--color-neutral-800)',
          'icon-icon-brand': 'var(--color-blue-600)',
          'icon-icon-danger': 'var(--color-orange-500)',
          'icon-icon-disabled': 'var(--color-neutral-300)',
          'icon-icon-inverse': 'var(--color-neutral-0)',
          'icon-icon-muted': 'var(--color-neutral-400)',
          'icon-icon-subtle': 'var(--color-neutral-600)',
          'icon-icon-success': 'var(--color-green-700)',
          'icon-icon-warning': 'var(--color-golden-500)',
          'surface-surface-accent': 'var(--color-ui-200)',
          'surface-surface-base': 'var(--color-ui-50)',
          'surface-surface-hover': 'var(--color-ui-300)',
          'surface-surface-subtle': 'var(--color-ui-100)',
          'text-text-brand-blue': 'var(--color-blue-600)',
          'text-text-brand-citrus': 'var(--color-citrus-500)',
          'text-text-brand-red': 'var(--color-red-600)',
          'text-text-caption': 'var(--color-neutral-400)',
          'text-text-danger': 'var(--color-orange-500)',
          'text-text-disabled': 'var(--color-neutral-300)',
          'text-text-inverse': 'var(--color-neutral-0)',
          'text-text-link': 'var(--color-blue-500)',
          'text-text-placeholder': 'var(--color-neutral-400)',
          'text-text-primary': 'var(--color-neutral-900)',
          'text-text-secondary': 'var(--color-neutral-700)',
          'text-text-success': 'var(--color-green-700)',
          'text-text-warning': 'var(--color-golden-500)',
        },
      },
    },
  plugins: [
    require('flowbite/plugin')
  ],
}

