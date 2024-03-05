import { useEffect, useState } from "react";

export const useEmailValidation = (email) => {
  const [emailConfirmText, setEmailConfirmText] = useState("");

  useEffect(() => {
    const validateEmail = (email) => {
      return email
        .toLowerCase()
        .match(
          /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/
        );
    };
    const isEmailValid = validateEmail(email);

    if (email === "") {
      setEmailConfirmText("");
    } else if (!isEmailValid) {
      setEmailConfirmText("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailConfirmText("");
    }
  }, [email]);

  return emailConfirmText;
};
