/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "DM Mono",
        inter: "Inter",
      },
      colors: {
        primary: '#CAFC01',
        general: '#111C24',
        generalsubstrate: '#F9FAFC',
      },
      backgroundImage: {
        'second-hero': 'url("assets/images/64542dfdb7b8896bfd708e7a22e49cd3.jpg")',
      },
    },
  },
  plugins: [],
}

