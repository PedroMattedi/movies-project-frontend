import * as Styled from "./styles";

interface Button {
  text: string;
}

const Button = ({ text }: Button) => {
  return (
    <Styled.ButtonContainer>
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.ButtonContainer>
  );
};

export default Button;
