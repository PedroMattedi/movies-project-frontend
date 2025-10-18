import Button from "components/Button/Button";
import * as Styled from "./styles";
import { useState } from "react";

interface IAuthProps {
  onSubmit?: () => void;
  onAccountExistClick: () => void;
}

const RegisterComponent = ({ onSubmit, onAccountExistClick }: IAuthProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Styled.InputAndLabel>
        <Styled.LabelText>Nome</Styled.LabelText>
        <Styled.InputContainer
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Styled.LabelText>E-mail</Styled.LabelText>
        <Styled.InputContainer
          placeholder="Digite seu e-mail"
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
        <Styled.LabelText>Confirmação de senha</Styled.LabelText>
        <Styled.InputContainer
          type="password"
          placeholder="Digite sua senha novamente"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Styled.InputAndLabel>
      <Styled.ButtonsRow>
        <Styled.ForgotPasswordText onClick={onAccountExistClick}>
          Já tem uma conta?
        </Styled.ForgotPasswordText>
        <Button onClick={onSubmit}>Cadastrar</Button>
      </Styled.ButtonsRow>
    </>
  );
};

export default RegisterComponent;
