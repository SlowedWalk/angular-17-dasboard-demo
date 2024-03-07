/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/.../*.{html,ts}",
    "**/*.html",
    "**/*.ts",
    "**/*.js",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

