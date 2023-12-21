import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#49D381',
        orange: '#FFBB00',
        background: '#121212',
        primary: '#B1B1B1',
        secondary: '#FFFFFF'
      }
    }
  },
  plugins: []
}
export default config
