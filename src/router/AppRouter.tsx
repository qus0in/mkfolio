import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import RouteChangeTracker from "./RouteChangeTracker";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
