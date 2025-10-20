import { Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";

const AuthRoutes = () => (
  <Routes>
    <Route index element={<Login />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AuthRoutes;
