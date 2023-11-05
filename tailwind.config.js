/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#424243',
        custom: {
          blue: '#11A0DB',
          gray: {
            500: '#2F2F2F',
            400: '#424243',
            300: '#767676',
            200: '#CECECE',
            100: '#F3F3F3',
          },
        },
        status: {
          default: '#767676',
          error: '#FF0000',
          success: '#11f74b',
        },
      },
      fontSize: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
