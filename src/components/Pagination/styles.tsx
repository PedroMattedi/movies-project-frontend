import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button<{
  isActive?: boolean;
  isArrow?: boolean;
}>`
  width: ${(props) => (props.isArrow ? "64px" : "44px")};
  height: 44px;
  background-color: ${(props) => (props.isActive ? "#EBEAF814" : "#8E4EC6")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  font-size: 14px;
  font-weight: ${(props) => (props.isActive ? "600" : "500")};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
