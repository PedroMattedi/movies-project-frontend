import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movie from "pages/Movie/Movie";

const PrivateRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route index path="/movie" element={<Movie />} />
  </Routes>
);

export default PrivateRoutes;
