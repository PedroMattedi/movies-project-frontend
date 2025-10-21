import api from "../api";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("access_token", data.access_token);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao fazer login");
  }
};

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export const getProfile = async () => {
  const access_token = localStorage.getItem("access_token");
  const { data } = await api.get("/auth/profile", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};
