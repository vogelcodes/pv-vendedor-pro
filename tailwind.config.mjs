import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        green: "#76b1af",
        red: "#c6302c",
        "red-100": "#F9B8AC",
        "red-400": "#F55D4E",
        "red-fura": "#ff3131",
        blue: "#101626",
        "blue-400": "#029bdd",
        "blue-fura": "#14a3fe",
        "green-fura": "#2adcaa",
        cream: "#d9a23c",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
