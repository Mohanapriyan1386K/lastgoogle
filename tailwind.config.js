/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-img':"url('/src/Asstes/1.jpg')"
      },
      fontFamily:{
       'sans': ['ui-sans-serif', 'system-ui'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'display': ['Oswald'],
       'body': ['"Open Sans"'],

        
      }
    },
  },
  plugins: [],
}

