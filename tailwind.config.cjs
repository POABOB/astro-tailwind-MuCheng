// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
		'./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', 
		'./node_modules/flowbite/**/*.js'
	],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
				"default-0": "#bcb19c",
				default: "#8a754e",
				"default-2": "#654f25",
				"default-3": "#e8e3d9",
				"default-bg-0": "#f9f8f3",
				"default-bg":"#e9e3d3",
				green: "#809252",
				"green-light": "#73e600",
				"custom-blue": "#718391",
				"green-bg": "#8a9371"

      },
      fontFamily: {
        sans: [ "'Noto Serif TC'", "'Philosopher'", "'serif'"]
        // sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
		require('@tailwindcss/typography'), 
		require('flowbite/plugin'),
	],
  darkMode: 'class',
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
