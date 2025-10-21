import React, { type ReactElement } from "react";
import * as Styled from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string | number;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  value,
  placeholder = "",
  type = "text",
  disabled = false,
  rightIcon,
  onRightIconClick,
  ...rest
}) => {
  return (
    <Styled.InputAndLabel>
      {label && <Styled.LabelText>{label}</Styled.LabelText>}

      <Styled.InputWrapper>
        <Styled.InputContainer
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          {...rest}
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
