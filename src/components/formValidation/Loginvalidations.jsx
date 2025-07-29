export const Loginvalidations = (name, value) => {
  if (name === "phoneNumber") {
    if (!value) return "PhoneNumber is required";
  }
  return "";
};
