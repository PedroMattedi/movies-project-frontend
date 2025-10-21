import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { login as loginApi } from "services/endpoints/auth";
import { useState } from "react";
import * as Styled from "./styles";
import Button from "components/Button/Button";

interface AuthComponentProps {
  onRegisterClick: () => void;
}

const AuthComponent = ({ onRegisterClick }: AuthComponentProps) => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginApi(email, password);
      login(data.access_token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Credenciais inválidas");
    }
  };
  return (
    <>
      <Styled.InputAndLabel>
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
      </Styled.InputAndLabel>

      <Styled.ButtonsRow>
        <Styled.ForgotPasswordText onClick={onRegisterClick}>
          Faça seu cadastro
        </Styled.ForgotPasswordText>
        <Button onClick={handleLogin}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </Styled.ButtonsRow>
    </>
  );
};

export default AuthComponent;
