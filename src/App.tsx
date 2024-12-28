import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPage, HomePage, NotFoundPage } from "@src/pages";
import { NavigationHeader } from "@src/templates";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@src/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationHeader />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
