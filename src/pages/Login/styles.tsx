import styled from "styled-components";
import type { Theme } from "types/theme";

export const LoginFormContainer = styled.div<{ theme: Theme }>`
  padding: 16px;
  gap: 16px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.loginBackground};
  position: absolute;
  z-index: 3;
`;
