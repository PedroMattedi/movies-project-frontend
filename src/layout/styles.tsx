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
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.background};
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;
