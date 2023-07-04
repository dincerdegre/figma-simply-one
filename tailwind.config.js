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
        'video-image': 'url("assets/images/f576b710d54d9756878c0c770e0be394.png")',
        'list-image': 'url("assets/images/1aedffed1513982be7ca74c5286a8b97.jpg")',
        'wide-image': 'url("assets/images/64542dfdb7b8896bfd708e7a22e49cd3.jpg")',
      },
    },
  },
  plugins: [],
}

