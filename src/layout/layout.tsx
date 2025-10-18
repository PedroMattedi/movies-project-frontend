import { type ReactElement } from "react";
import * as Styled from "./styles";
import ThemeButton from "./Components/ThemeButton/ThemeButton";
import CubosLogo from "components/CubosLogo/CubosLogo";
import Button from "components/Button/Button";
import SunLogo from "components/SunIcon/SunIcon";

interface Layout {
  children: ReactElement;
  toggleTheme: () => void;
}

const Layout = ({ children, toggleTheme }: Layout) => {
  return (
    <Styled.PageContainer>
      <Styled.LayoutContainer>
        <Styled.LayoutHeader>
          <Styled.TitleContainer>
            <CubosLogo />
            <Styled.Title>Movies</Styled.Title>
          </Styled.TitleContainer>
          <Styled.ButtonsRow>
            <ThemeButton onClick={toggleTheme}>
              <SunLogo />
            </ThemeButton>
            <Button text={"Logout"} />
          </Styled.ButtonsRow>
        </Styled.LayoutHeader>
        {children}
      </Styled.LayoutContainer>
      <Styled.LayoutFooter>
        <Styled.FooterText>
          2025 © Todos os direitos reservados a{" "}
        </Styled.FooterText>
        <Styled.CubosText>Cubos Movies</Styled.CubosText>
      </Styled.LayoutFooter>
    </Styled.PageContainer>
  );
};

export default Layout;
