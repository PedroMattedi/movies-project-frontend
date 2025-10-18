import AuthComponent from "./Components/AuthComponent/AuthComponent";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import useLogin from "./hooks/useLogin";
import * as Styled from "./styles";

const Login = () => {
  const { authOrRegister, setAuthOrRegister } = useLogin();

  return (
    <Styled.LoginFormContainer>
      {authOrRegister === "auth" && (
        <AuthComponent
          onSubmit={() => {}}
          onRegisterClick={() => setAuthOrRegister("register")}
        />
      )}
      {authOrRegister === "register" && (
        <RegisterComponent
          onSubmit={() => {}}
          onAccountExistClick={() => setAuthOrRegister("auth")}
        />
      )}
    </Styled.LoginFormContainer>
  );
};

export default Login;
