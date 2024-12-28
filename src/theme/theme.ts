import { createTheme } from "@mui/material";
import { darkPalette, lightPalette, mainPalette } from "./palettes";

export const theme = createTheme({
  palette: mainPalette,
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
