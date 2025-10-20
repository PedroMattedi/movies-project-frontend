import styled from "styled-components";
import type { Theme } from "types/theme";

export const HomeContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  padding: 24px;
  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 422px) {
    padding: 0px;
  }
`;

export const FilterRow = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 24px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const MoviesContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  border-radius: 4px;
  padding: 24px;
  gap: 24px;
  background-color: #ebeaf814;
  overflow-y: auto;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 414px) {
    gap: 12px;
  }
`;

export const PaginationSection = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 12px;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 8px;
  }

  @media (max-width: 414px) {
    padding: 16px;
    gap: 6px;
  }
`;
