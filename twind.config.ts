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
      lightRed: "rgb(255,212,203,0.2)",
    },

    extend: { //これがあると任意で値を変更できる
      colors: {
        brown: "#947771",
        lightBrown: "rgb(149,119,113,0.1)",
        lightGray: "#D6D6D6",
      },
      fontSize: {
        2.5: "0.625rem",
      },
      height: {
        30: "7.5rem", //30は偶数ではあるが設定が必要
      },
    },
  },
} as Options;
