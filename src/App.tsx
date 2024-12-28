import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPage, HomePage, NotFoundPage } from "@src/pages";
import { NavigationContainer } from "@src/templates";
import { theme } from "@src/theme";
import {
  ColorModeProvider,
  Preflight,
  ThemeProvider,
  createGlobalStyle,
} from "@xstyled/styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  background-color: backdrop;
  color-scheme: dark light;
}

* {
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<NavigationContainer />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
