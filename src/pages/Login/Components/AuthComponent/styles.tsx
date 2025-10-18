import styled from "styled-components";
import type { Theme } from "types/theme";

export const InputAndLabel = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const LabelText = styled.p<{ theme: Theme }>`
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.theme.text};
`;

export const InputContainer = styled.input<{ theme: Theme }>`
  padding: 0px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  height: 44px;
  background-color: ${(props) => props.theme.inputBg};
  border-color: ${(props) => props.theme.inputBorderColor};
  width: 380px;
  color: #ffffff;
`;

export const ButtonsRow = styled.div<{ theme: Theme }>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPasswordText = styled.p<{ theme: Theme }>`
  color: #8e4ec6;
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  text-decoration-color: #8e4ec6;
  text-underline-position: under;
  cursor: pointer;
`;
