import styled from "styled-components";
import type { Theme } from "types/theme";

export const InputAndLabel = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
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
  width: 100%;
  color: #ffffff;

  &:focus {
    border-color: #8e4ec6;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconRight = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
