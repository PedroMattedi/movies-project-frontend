import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { getTheme } from "../theme";
import type { ThemeMode } from "../types/theme";
import Layout from "layout/layout";
import Home from "pages/Home/Home";
import Movie from "pages/Movie/Movie";
import Login from "pages/Login/Login";
import { AuthProvider, useAuth } from "context/AuthContext";

const AppRoutes = () => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <BrowserRouter>
        <AuthProvider>
          <AuthHandler toggleTheme={toggleTheme} />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const AuthHandler = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p style={{ color: "white" }}>Verificando autenticação...</p>;
  }

  return (
    <Layout loggedIn={isAuthenticated} toggleTheme={toggleTheme}>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
