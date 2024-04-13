import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      green: "#76b1af",
      red: "#c6302c",
      "red-100": "#F9B8AC",
      "red-400": "#F55D4E",
      "red-fura": "#ff3131",
      blue: "#122e49",
      "blue-fura": "#14a3fe",
      "green-fura": "#2adcaa",
      cream: "#fcfaef",
    },

    extend: {
      fontFamily: {
        sans: ["Metropolis", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
