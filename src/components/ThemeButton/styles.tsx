import styled from "styled-components";
import type { Theme } from "types/theme";

export const ThemeButtonContainer = styled.button<{ theme: Theme }>`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  display: flex;
  justify-content: "center";
  align-items: "center";
  background-color: ${(props) => props.theme.themeButton};
`;
