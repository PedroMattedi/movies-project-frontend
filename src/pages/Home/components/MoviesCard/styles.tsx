import styled from "styled-components";
import type { Theme } from "types/theme";

export const CardContainer = styled.div<{ theme: Theme }>`
  height: 355px;
  width: 235px;
  border-radius: 4px;
  padding: 24px;
  gap: 24px;
  background-color: green;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1440px) {
    height: 320px;
    width: 210px;
  }

  @media (max-width: 1024px) {
    height: 300px;
    width: 190px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    height: 280px;
    width: 170px;
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 600px) {
    height: 240px;
    width: 150px;
    padding: 12px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    height: 220px;
    width: 140px;
    padding: 12px;
    gap: 12px;
  }
`;
