export const checkValidationData = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  if (!emailPattern.test(email)) {
    return "Email is not valid";
  }
  if (!passwordPattern.test(password)) {
    return "Password is not valid";
  }
  return null;
};
