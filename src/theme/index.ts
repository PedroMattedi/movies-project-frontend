import light from "./light";
import dark from "./dark";
import type { ThemeMode, Theme } from "../types/theme";

export const getTheme = (mode: ThemeMode): Theme => {
  return mode === "dark" ? dark : light;
};
