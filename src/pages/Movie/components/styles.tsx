import styled from "styled-components";

export const CircleContainer = styled.div`
  position: relative;
  width: 98px;
  height: 98px;
`;

export const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

export const PercentageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 700;
  color: #ffde00;
`;
