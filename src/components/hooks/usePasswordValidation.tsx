import { useEffect, useState } from "react";

export const usePasswordValidation = (password) => {
  const [passwordConfirmText, setPasswordConfirmText] = useState("");

  useEffect(() => {
    const validatePassword = (password) => {
      return password
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
    };

    const isPasswordValid = validatePassword(password);

    if (password === "") {
      setPasswordConfirmText("");
    } else if (!isPasswordValid) {
      setPasswordConfirmText(
        "영문, 숫자, 특수기호 포함 8자리 이상 입력해주세요."
      );
    } else {
      setPasswordConfirmText("");
    }
  }, [password]);

  return passwordConfirmText;
};
