const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrainsMono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-animate"),
  ],
};
