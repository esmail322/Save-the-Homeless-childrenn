/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#2b4f4d",
        "secondary":"#bce1df",
        "accent-1":"#299092",
        "text-color":"#020403",
        "backgorund":"#e3f7f7",
        "accent-2":"#e8f79f"
      },
      backgroundColor:{
        "primary":"#2b4f4d",
        "secondary":"#bce1df",
        "accent-1":"#299092",
        "text":"#020403",
        "backgorund":"#e3f7f7",
        "accent-2":"#e8f79f",
        "accent-3":" #2B4F4D",
        "bgbcolor":"#E8F79F",


      },
      spacing:{
        "90": "26.5rem"
      },
      fontFamily:{

      },
      borderWidth:{
        "0":"0",
        "half":"px"
      }

    },
  },
  plugins: [],
}