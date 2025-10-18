import { useState } from "react";

const useLogin = () => {
  const [authOrRegister, setAuthOrRegister] = useState<"auth" | "register">(
    "auth"
  );

  return { authOrRegister, setAuthOrRegister };
};

export default useLogin;
