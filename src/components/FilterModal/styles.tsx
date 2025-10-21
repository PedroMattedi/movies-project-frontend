import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 420px;
  background-color: #232225;
  border-radius: 8px;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
