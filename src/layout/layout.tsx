import * as Styled from "./styles";
import CubosLogo from "components/CubosLogo/CubosLogo";
import Button from "components/Button/Button";
import SunLogo from "components/SunIcon/SunIcon";
import type { ReactNode } from "react";

interface Layout {
  toggleTheme: () => void;
  loggedIn: boolean;
  children: ReactNode;
}

const Layout = ({ toggleTheme, loggedIn, children }: Layout) => {
  return (
    <Styled.PageContainer>
      <Styled.LayoutHeader>
        <Styled.TitleContainer>
          <CubosLogo />
          <Styled.Title>Movies</Styled.Title>
        </Styled.TitleContainer>
        <Styled.ButtonsRow>
          <Button
            onClick={toggleTheme}
            style={{ backgroundColor: "#B744F714", padding: "0px 20px" }}
          >
            <SunLogo />
          </Button>
          {loggedIn && <Button>Logout</Button>}
        </Styled.ButtonsRow>
      </Styled.LayoutHeader>
      <Styled.ChildrenContent>{children}</Styled.ChildrenContent>
      <Styled.LayoutFooter>
        <Styled.FooterText>
          2025 © Todos os direitos reservados a
        </Styled.FooterText>
        <Styled.CubosText>Cubos Movies</Styled.CubosText>
      </Styled.LayoutFooter>
    </Styled.PageContainer>
  );
};

export default Layout;
