import AuthComponent from "./Components/AuthComponent/AuthComponent";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import useLogin from "./hooks/useLogin";
import * as Styled from "./styles";

const Login = () => {
  const { authOrRegister, setAuthOrRegister } = useLogin();

  return (
    <Styled.PageContainer>
      <Styled.LoginFormContainer>
        {authOrRegister === "auth" && (
          <AuthComponent
            onRegisterClick={() => setAuthOrRegister("register")}
          />
        )}
        {authOrRegister === "register" && (
          <RegisterComponent
            onAccountExistClick={() => setAuthOrRegister("auth")}
          />
        )}
      </Styled.LoginFormContainer>
    </Styled.PageContainer>
  );
};

export default Login;
