import styled from "styled-components";
import type { Theme } from "types/theme";

export const LoginFormContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 412px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.loginBackground};
  position: relative;
  z-index: 2;

  @media (max-width: 414px) {
    max-width: 80%;
  }
`;

export const PageContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  height: calc(100vh - 72px - 40px);
`;
