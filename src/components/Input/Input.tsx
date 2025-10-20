import React, { type ReactElement } from "react";
import * as Styled from "./styles";

interface InputProps {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  rightIcon,
  onRightIconClick,
}) => {
  return (
    <Styled.InputAndLabel>
      {label && <Styled.LabelText>{label}</Styled.LabelText>}

      <Styled.InputWrapper>
        <Styled.InputContainer
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />

        {rightIcon && (
          <Styled.IconRight onClick={onRightIconClick}>
            {rightIcon}
          </Styled.IconRight>
        )}
      </Styled.InputWrapper>
    </Styled.InputAndLabel>
  );
};

export default InputComponent;
