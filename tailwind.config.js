/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", " sans-serif"]
      },
      colors: {
        cod: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#0f0f0f"
        },
        masala: {
          50: "#f6f5f6",
          100: "#e7e6e7",
          200: "#d1d0d1",
          300: "#b0afb1",
          400: "#888789",
          500: "#6d6c6e",
          600: "#5d5c5e",
          700: "#504e50",
          800: "#464446",
          900: "#403f40",
          950: "#262626"
        },
        stone: {
          50: "#f2f9fd",
          100: "#e4f1fa",
          200: "#c3e2f4",
          300: "#8ecceb",
          400: "#51b1df",
          500: "#2b98cc",
          600: "#1c7aad",
          700: "#18618c",
          800: "#185374",
          900: "#194661",
          950: "#102b3e"
        },
        caribbean: {
          50: "#edfcf6",
          100: "#d3f8e9",
          200: "#abefd7",
          300: "#74e1c1",
          400: "#3ccba5",
          500: "#1cc8a0",
          600: "#0c8f73",
          700: "#0a725e",
          800: "#0b5a4c",
          900: "#0a4a3f",
          950: "#042a25"
        }
      }
    }
  },
  plugins: []
};
