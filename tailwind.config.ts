import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors:{
        black:'#030712',
        gray:'#9ca3af',
        white:'#f8fafc',
        orange:'#f97316',
      
      }

    },
  },
  plugins: [],
}
export default config
