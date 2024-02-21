import { useEffect, useState } from "react";

export const usePasswordConfirmValidation = (password, confirmPassword) => {
  const [confirmPasswordConfirmText, setConfirmPasswordConfirmText] =
    useState("");

  useEffect(() => {
    if (confirmPassword === "") {
      setConfirmPasswordConfirmText("");
    } else if (password === confirmPassword) {
      setConfirmPasswordConfirmText("비밀번호가 일치합니다.");
    } else if (password !== confirmPassword) {
      setConfirmPasswordConfirmText("비밀번호가 일치하지 않습니다.");
    }
  }, [password, confirmPassword]);

  return confirmPasswordConfirmText;
};
