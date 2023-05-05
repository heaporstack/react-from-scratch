import * as en_US from "./en-US.js";
import * as fr_FR from "./fr-FR.js";

export default (file) => {
  const language = navigator.language;
  if (language.match(/^fr.*/)) {
    return fr_FR[file];
  }
  // default language
  return en_US[file];
};
