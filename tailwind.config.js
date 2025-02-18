/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ["bg-red-500", "text-xl"], 
  theme: {
    extend: {},
  },
  plugins: [],
}

