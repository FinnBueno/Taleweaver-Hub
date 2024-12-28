import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPage, HomePage, NotFoundPage } from "@src/pages";
import { NavigationHeader } from "@src/templates";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationHeader />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
