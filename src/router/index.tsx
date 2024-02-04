import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../components/layout/index";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
