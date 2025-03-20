export const checkValidate = (email, Password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      Password
    );
  if (!isEmailValid) return "Email is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";
  return null;
};
