// src/routes/AppRoutes.tsx
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { getTheme } from "../theme";
import type { ThemeMode } from "../types/theme";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [isAuthenticated] = useState(false);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <BrowserRouter>
        {isAuthenticated ? (
          <PrivateRoutes toggleTheme={toggleTheme} loggedIn={isAuthenticated} />
        ) : (
          <AuthRoutes toggleTheme={toggleTheme} loggedIn={isAuthenticated} />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
