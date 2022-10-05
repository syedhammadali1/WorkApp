module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#757575",
        gray_700: "#5a5a5a",
        gray_601: "#6e6e6e",
        gray_901: "#3b1321",
        gray_902: "#1f1f1f",
        pink_900: "#8a2e4d",
        gray_900: "#222222",
        pink_901: "#762742",
        bluegray_100: "#d1d1d1",
        gray_50: "#fbfbfb",
        gray_100: "#f3f3f3",
        bluegray_100_60: "#d1d1d160",
        bluegray_900: "#313131",
        blue_A400_1c: "#2e7fed1c",
        bluegray_400_47: "#8c8c8c47",
        black_900: "#000000",
        bluegray_300: "#8998ad",
        pink_400_4c: "#c6426e4c",
        white_A700: "#ffffff",
        pink_400: "#c6426e",
      },
      borderRadius: {
        radius5: "5px",
        radius8: "8px",
        radius12: "12px",
        radius17: "17px",
        radius50: "50%",
        radius155: "15.5px",
      },
      fontFamily: {
        nunitosans: "Nunito Sans",
        almarai: "Almarai",
        nunito: "Nunito",
        productsans: "Product Sans",
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
