// src/utils/languageHelper.js
import i18n from "i18next";

export const changeLanguageByState = (stateName) => {
  console.log(stateName, "stateName");
  const stateToLangMap = {
    Telangana: "te",
    "Andhra Pradesh": "te",
    "Tamil Nadu": "ta",
    Karnataka: "kn",
    Kerala: "ml",
  };

  const lang = stateToLangMap[stateName] || "en";
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
