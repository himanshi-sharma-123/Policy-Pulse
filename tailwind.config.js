/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeinup: "fadeinup 0.5s ease-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
};
