/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '517px',
        // => @media (min-width: 640px) { ... }
        'md': '767px',
        // => @media (min-width: 1024px) { ... }  
        'lg': '1023px',
        // => @media (min-width: 1024px) { ... }  
      },
      fontFamily: {
        FREE: ["FREE"],
      },

    },
  },
  plugins: [],
}
