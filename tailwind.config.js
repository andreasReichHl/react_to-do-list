/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          custom: ["Inter", "sans-serif"], // Du kannst hier optional einen Fallback-Font angeben, wie "sans-serif"
        },
      },
    },
    plugins: [
        require('daisyui'),
    ],
  };