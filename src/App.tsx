import { ThemeProvider } from "styled-components";
import { useState } from "react";
import type { ThemeMode } from "./types/theme";
import { getTheme } from "theme";
import Layout from "layout/layout";

const App = () => {
  const [mode] = useState<ThemeMode>("light");

  // const toggleMode = () => {
  //   setMode((prev) => (prev === "light" ? "dark" : "light"));
  // };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <Layout>
        <></>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
