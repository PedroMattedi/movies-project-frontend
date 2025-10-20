import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";

const PrivateRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
  </Routes>
);

export default PrivateRoutes;
