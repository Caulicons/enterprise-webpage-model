import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        tertiary: 'rgba(var(--tertiary), <alpha-value>)',
        accent: 'rgba(var(--accent), <alpha-value>)',
        textDefault: 'rgba(var(--textDefault), <alpha-value>)',
        textSoft: 'rgba(var(--textSoft), <alpha-value>)',
        textBold: 'rgba(var(--textBold), <alpha-value>)',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in-out infinite',
      },
    },
    theme: {
      screens: {
        md: '720px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
