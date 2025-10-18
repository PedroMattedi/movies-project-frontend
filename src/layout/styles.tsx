// styles.ts
import images from "constants/images";
import styled from "styled-components";
import type { Theme } from "types/theme";

export const LayoutContainer = styled.div<{ theme: Theme }>`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 2;
`;

export const LayoutHeader = styled.div<{ theme: Theme }>`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.layoutColor};
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.layoutBorderColor};
`;

export const LayoutFooter = styled.div<{ theme: Theme }>`
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
  background-color: ${(props) => props.theme.layoutColor};
  border-top: 1px solid ${(props) => props.theme.layoutBorderColor};
  z-index: 3;
  gap: 4px;
`;

export const FooterText = styled.p<{ theme: Theme }>`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

export const CubosText = styled.p<{ theme: Theme }>`
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const Title = styled.p<{ theme: Theme }>`
  font-weight: 700px;
  font-size: 20px;
  color: #ffffff;
`;

export const TitleContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const ButtonsRow = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const PageContainer = styled.div<{ theme: Theme }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${images.backgroundCrowd});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }
`;
