import * as Styled from "./styles";
import type { ButtonHTMLAttributes, ReactElement } from "react";

interface ThemeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
}

const ThemeButton = ({ children, ...rest }: ThemeButton) => {
  return (
    <Styled.ThemeButtonContainer {...rest}>
      {children}
    </Styled.ThemeButtonContainer>
  );
};

export default ThemeButton;
