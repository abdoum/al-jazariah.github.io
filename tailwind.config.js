module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
//   darkMode: "media", // or 'media' or 'class'
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    fontSize: {
      "2xs": ".55rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    boxShadow: {
      "l-2xl": "-18px -1px 20px 0px rgb(0 0 0 / 25%)"
    },
    fontFamily: {
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      //   mono: ["Amiri"],
      //   display: ["Amiri"],
      body: ["Amiri", "Open Sans", "Oswald"]
    },
    extend: {
      screens: {
        print: { raw: "print" }
        // => @media print { ... }
      }
    }
  },
  variants: {
    extend: {
      //   backgroundColor: ["hover", "active", "focus"]
    }
  },
  plugins: []
};
