import styled from "styled-components";
import type { Theme } from "types/theme";

export const ThemeButtonContainer = styled.button<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border: none;
  border-radius: 2px;
  background-color: ${(props) => props.theme.themeButton};
  min-height: 44px;
  font-size: inherit;
  font-family: inherit;
  line-height: 1;
  box-sizing: border-box;
`;
