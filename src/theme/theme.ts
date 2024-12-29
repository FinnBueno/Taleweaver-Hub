import { defaultTheme, th, Theme } from "@xstyled/styled-components";

export const theme: Theme = {
  ...defaultTheme,
  defaultColorModeTheme: "light",
  colors: {
    ...defaultTheme.colors,
    text: "#000",
    backdrop: "#0D1321",
    background: "#FDF0D5",
    divider: "rgba(0, 0, 0, .35)",
    navbar: th.color("background"),
    modes: {
      dark: {
        text: "#F0FBF4",
        background: "#1D2D44",
        navbar: th.color("background"),
      },
    },
  },
  sizes: {
    ...defaultTheme.sizes,
    divider: "2px",
  },
  shadows: {
    ...defaultTheme.shadows,
    "2xl": "0px 0px 23px 10px rgba(0,0,0,0.25)",
    "inner-xl": "inset 0px 0px 53px 20px rgba(0,0,0,0.5)",
  },
};
