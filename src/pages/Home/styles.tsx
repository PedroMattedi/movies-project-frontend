import styled from "styled-components";
import type { Theme } from "types/theme";

export const HomeContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const FilterRow = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const MoviesContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  border-radius: 4px;
  padding: 24px;
  gap: 24px;
  background-color: #ebeaf814;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

export const PaginationSection = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 6px;
  }
`;
