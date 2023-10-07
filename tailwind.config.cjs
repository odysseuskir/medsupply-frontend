const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        navgreen: "#41E296",
        background: "#177F3F",
        darkbackground: "#86AC86",
      },
    },
  },
};
