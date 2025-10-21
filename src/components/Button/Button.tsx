import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styled from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Styled.ButtonContainer {...rest}>
      {typeof children === "string" ? (
        <Styled.ButtonText>{children}</Styled.ButtonText>
      ) : (
        children
      )}
    </Styled.ButtonContainer>
  );
};

export default Button;
