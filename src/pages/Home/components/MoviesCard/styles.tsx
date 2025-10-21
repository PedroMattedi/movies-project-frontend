import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 235px;
  height: 355px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #0f0f0f;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  text-transform: uppercase;
`;
