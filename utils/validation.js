export const checkValidateData = (isSignIn, email, password, name) => {
    
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isSignIn) {
    if (name === null || name.length < 2) return "Please enter name";
  }
  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password id is not valid";
  return null;
};
