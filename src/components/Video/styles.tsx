import styled from "styled-components";

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1302px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 414px) {
    max-width: 100%;
    aspect-ratio: 16 / 9;
    margin: 0;
  }
`;
