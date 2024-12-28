import { defaultTheme } from "@xstyled/styled-components";

export const theme = {
  ...defaultTheme,
  defaultColorModeTheme: "dark",
  colors: {
    ...defaultTheme.colors,
    backdrop: "#262e37",
    text: "#000",
    modes: {
      dark: {
        text: "#fff",
      },
    },
  },
};
