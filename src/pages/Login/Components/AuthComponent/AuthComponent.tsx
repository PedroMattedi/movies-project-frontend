import Button from "components/Button/Button";
import * as Styled from "./styles";
import { useState } from "react";

interface IAuthProps {
  onSubmit?: () => void;
  onRegisterClick: () => void;
}

const AuthComponent = ({ onSubmit, onRegisterClick }: IAuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Styled.InputAndLabel>
        <Styled.LabelText>Nome/E-mail</Styled.LabelText>
        <Styled.InputContainer
          placeholder="Digite seu nome/E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Styled.InputAndLabel>
      <Styled.InputAndLabel>
        <Styled.LabelText>Senha</Styled.LabelText>
        <Styled.InputContainer
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Styled.InputAndLabel>
      <Styled.ButtonsRow>
        <Styled.ForgotPasswordText onClick={onRegisterClick}>
          Faça seu cadastro
        </Styled.ForgotPasswordText>
        <Button onClick={onSubmit}>Entrar</Button>
      </Styled.ButtonsRow>
    </>
  );
};

export default AuthComponent;
