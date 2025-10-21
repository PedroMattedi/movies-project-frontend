import Button from "components/Button/Button";
import * as Styled from "./styles";
import { useState } from "react";
import { registerUser } from "services/endpoints/auth";

interface IAuthProps {
  onAccountExistClick: () => void;
}

const RegisterComponent = ({ onAccountExistClick }: IAuthProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      setLoading(true);
      const data = await registerUser({ name, email, password });
      console.log("Usuário registrado:", data.user);
      alert("Cadastro realizado com sucesso!");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Erro ao registrar usuário");
    } finally {
      setLoading(false);
    }
  }

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
        <Button onClick={handleRegister} disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </Styled.ButtonsRow>
    </>
  );
};

export default RegisterComponent;
