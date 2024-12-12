import type { Config } from 'tailwindcss'

const config: Config = {
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
        breathe: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        'fade-in-out': {
          '0%': { opacity: '0', transform: 'translate(-50%, 10px)' },
          '10%': { opacity: '1', transform: 'translate(-50%, 0)' },
          '90%': { opacity: '1', transform: 'translate(-50%, 0)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -10px)' },
        },
      },
      animation: {
        'breathe': 'breathe 2s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 2s ease-in-out forwards',
      },
      colors: {
        // Puedes personalizar los colores aquí si lo deseas
      },
    },
  },
  plugins: [],
}
export default config
