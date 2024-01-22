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
        gray:'#485058',
        orange:'#de8353',
        dark:'#485058',
        grray:'#1d1d1d',
        bllack:'#101010',
        grrray:'#a4afbe',
      
      }

    },
  },
  plugins: [],
}
export default config
