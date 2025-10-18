import { Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";
import Layout from "layout/Layout";

interface AuthRoutesProps {
  toggleTheme: () => void;
  loggedIn: boolean;
}

const AuthRoutes = ({ toggleTheme, loggedIn }: AuthRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} loggedIn={loggedIn} />}
      >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
