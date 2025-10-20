import images from "constants/images";
import styled from "styled-components";
import type { Theme } from "types/theme";

export const PageContainer = styled.div<{ theme: Theme }>`
  width: 100%;
  min-height: 100vh;
  background-image: url(${images.backgroundCrowd});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: auto;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }
`;

export const LayoutHeader = styled.div<{ theme: Theme }>`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.layoutColor};
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.layoutBorderColor};
  position: relative;
  z-index: 3;
`;

export const Title = styled.p<{ theme: Theme }>`
  font-weight: 700px;
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const TitleContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const ButtonsRow = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const ChildrenContent = styled.div<{ theme: Theme }>`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 2;
  padding-bottom: 60px;
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
  color: ${(props) => props.theme.text};
`;

export const CubosText = styled.p<{ theme: Theme }>`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;
