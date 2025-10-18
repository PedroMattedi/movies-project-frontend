import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

interface PrivateRoutesProps {
  toggleTheme: () => void;
  loggedIn: boolean;
}

const PrivateRoutes = ({ toggleTheme, loggedIn }: PrivateRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} loggedIn={loggedIn} />}
      >
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
