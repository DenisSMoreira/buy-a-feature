import authCreator from "utils/auth";

export const login = async (requestData) => {
  const auth = authCreator();
  const { data } = await auth.post("/oauth/token", requestData);
  return data;
};
