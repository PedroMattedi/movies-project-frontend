import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { getTheme } from "../theme";
import type { ThemeMode } from "../types/theme";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "layout/layout";

const AppRoutes = () => {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [isAuthenticated] = useState(true);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <BrowserRouter>
        <Layout loggedIn={isAuthenticated} toggleTheme={toggleTheme}>
          <>
            {isAuthenticated === true && <PrivateRoutes />}
            {isAuthenticated === false && <AuthRoutes />}
          </>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
