/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'pattern-background':"url('/images/pattern-background-desktop.svg')",
        'test':"url('illustration-hero.svg')",
      },
      colors:{
        custom:"#E0E8FF",
        annual:"#F8F9FE",
        change:"#39319B",
        proceed:"#382AE1",
        proceedHover:"#766CF1",
        dropShadow:"#E0DDFA",
        dropShadowCard:"#D0D9FA",
        cancelOrderHover:"#2E344D",
      },
      fontFamily:{
        RedHat:["Red Hat Display","sans-serif"]
      },
      maxWidth:{
        md:"450px"
      }
    },
  },
  plugins: [],
}
