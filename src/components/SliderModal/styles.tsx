import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: end;
  backdrop-filter: blur(3px);
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  max-height: 100vh;
  margin-top: 72px;
  margin-bottom: 30px;
  background: #1d1c20;
  padding: 24px;
  border-radius: 8px;
  color: #fff;
  overflow-y: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  color: #aaa;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #c7c7c7;
`;

export const TextArea = styled.textarea`
  background-color: #2c2b31;
  border: 1px solid #b744f714;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  resize: none;
  min-height: 100px;
  outline: none;
  &:focus {
    border-color: #b744f7;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid #b744f714;
  margin-top: auto;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FileInput = styled.input`
  background-color: transparent;
  border: 1px solid #b744f714;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  &::file-selector-button {
    background-color: #b744f7;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    transition: 0.2s;
  }
  &::file-selector-button:hover {
    opacity: 0.8;
  }
`;

export const Preview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #b744f714;
`;
