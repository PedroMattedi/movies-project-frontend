import { type ReactElement } from "react";
import * as Styled from "./styles";
import ThemeButton from "components/ThemeButton/ThemeButton";

interface Layout {
  children: ReactElement;
}

const Layout = ({ children }: Layout) => {
  return (
    <Styled.PageContainer>
      <Styled.LayoutContainer>
        <Styled.LayoutHeader>
          <ThemeButton onClick={() => {}} />
        </Styled.LayoutHeader>
        {children}
      </Styled.LayoutContainer>
      ;
    </Styled.PageContainer>
  );
};

export default Layout;
