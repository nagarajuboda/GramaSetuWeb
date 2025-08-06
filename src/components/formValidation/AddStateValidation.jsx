export const AddStateValidation = (name, value) => {
  if (name === "stateName") {
    if (!value) return "please  select StateName.";
  }
  //   if (name === "stateCode") {
  //     if (!value) return "State Code is required.";
  //   }
  if (name === "StateAdminName") {
    if (!value) return "StateAdmin  is required.";
  }
  if (name === "phoneNumer") {
    if (!value) return "phoneNumer  is required.";
  }
  if (name === "isActive") {
    if (!value) return "Status  is required.";
  }
  if (name === "pincode") {
    if (!value) return "pincode  is required.";
  }
  if (name === "language") {
    if (!value) return "language  is required.";
  }
  if (name === "gender") {
    if (!value) return "language  is required.";
  }
  return "";
};
