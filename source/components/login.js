import React from "react";
import getTranslations from "../translations/get-translations";
import s from "../style/login.json";

const t = getTranslations("login");

export const Login = () => {
  return (
    <div style={s["formDiv"]}>
      <p style={s["title"]}>{t["signIn"]}</p>
      <p style={s["label"]}>{t["username"]}</p>
      <input
        type="text"
        placeholder={t["username"]}
        style={s["input"]}
        onFocus={(e) => e.target["style"]["borderColor"] = "#6476f7"}
        onBlur={(e) => e.target["style"]["borderColor"] = "#ddd"}
      />
      <p style={s["label"]}>{t["password"]}</p>
      <input
        type="password"
        placeholder={t["password"]}
        style={s["input"]}
        onFocus={(e) => e.target["style"]["borderColor"] = "#6476f7"}
        onBlur={(e) => e.target["style"]["borderColor"] = "#ddd"}
      />
      <input
        type="button"
        style={s["forgottenPassword"]}
        value={t["forgottenPassword"]}
        onMouseEnter={(e) => e.target["style"]["color"] = "#6476f7"}
        onMouseLeave={(e) => e.target["style"]["color"] = "#4f46e5"}
      />
      <input
        type="button"
        value={t["submit"]}
        style={s["submit"]}
      />
    </div>
  );
};
