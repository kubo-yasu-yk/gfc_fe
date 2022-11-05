import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    textColor: {
      brown: "#947771",
      white: "#ffffff",
      red: "#FF7171",
      lightGray: "#D6D6D6",
      gray: "#5F5F5F",
      blue: "#0085FF",
    },
    backgroundColor: {
      brown: "#947771",
      white: "#ffffff",
      gray: "#EBEBEB",
      lightBrown: "rgb(149,119,113,0.1)",
    },

    extend: { //これがあると任意で値を変更できる
      colors: {
        brown: "#947771",
        lightBrown: "rgb(149,119,113,0.1)",
      },
      fontSize: {
        8: "0.5rem",
        10: "0.625rem",
      },
    },
  },
} as Options;
