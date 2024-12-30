import { defaultTheme } from "@xstyled/styled-components";

export const theme = {
  ...defaultTheme,
  defaultColorModeTheme: "light",
  colors: {
    ...defaultTheme.colors,
    text: "#000",
    mutedText: "#404040",
    backdrop: "#FDF0D5",
    background: "#F0FBF4",
    divider: "rgba(0, 0, 0, .35)",
    navbar: "#FDF0D5",
    link: "#759955",
    modes: {
      dark: {
        text: "#F0FBF4",
        mutedText: "#A0ABA4",
        backdrop: "#0D1321",
        background: "#1D2D44",
        navbar: "#1D2D44",
      },
    },
  },
  screens: {
    ...defaultTheme.screens,
    sm: 500,
  },
  borders: {
    ...defaultTheme.borders,
    panel: "1px solid rgba(0, 0, 0, .25)",
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
