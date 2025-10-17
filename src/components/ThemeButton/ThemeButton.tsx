import icons from "constants/icons";
import * as Styled from "./styles";

interface ThemeButton {
  onClick: () => void;
}

const ThemeButton = ({ onClick }: ThemeButton) => {
  return (
    <Styled.ThemeButtonContainer onClick={onClick}>
      <img src={icons.sunIcon} alt="Sun Icon" />
    </Styled.ThemeButtonContainer>
  );
};

export default ThemeButton;
