export const checkValidData = (name, email, password) => {
  if (name !== "") {
    const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name);
    if (!isNameValid) return "Name is Not Valid";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(
    password
  );

  if (!isEmailValid) return "Email is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
