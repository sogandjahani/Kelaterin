/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    colors:{
      menu:"rgb(175, 178, 180)",
      red:"rgb(255, 0, 0)",
      gray:"rgb(88, 89, 91)",
      lightgray:"rgb(137, 137, 137) ",
      cream:"rgb(233, 214, 159)",
      pcolor:"rgb(122, 122, 122)",
      border:"rgb(200, 200, 200)",
      white:"rgb(255, 255, 255)",
      section16:"rgb(205, 228, 176)",
      backgroundblue:"rgb(16, 81, 83)",
      lineblue:"rgb(0, 156, 160)",
      textblue:"rgb(0, 216, 223)",
      spanblue:" rgb(0, 157, 162)"
    },
    screens:{
      "mobile":"0",
      "tablet":"768px",
      "desktop":"1024px"
    },
    backgroundImage:{
      backgroundmainpage:"url('/public/images/section14/1.png')",
      
    },
    boxShadow:{
      boxshadow:"-3px 3px 7px 0px rgba(0, 0, 0, 0.2)"
    },
    extend: {},
  },
  plugins: [],
}

