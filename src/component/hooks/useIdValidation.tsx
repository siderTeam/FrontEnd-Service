import { useEffect, useState } from "react";

export const useIdValidation = (idCheckData, username) => {
  const [idConfirmText, setIdConfirmText] = useState("");

  useEffect(() => {
    const validateUsername = (username) => {
      return username.toLowerCase().match(/^[a-z0-9]{4,12}$/);
    };
    const isIdValid = validateUsername(username);

    if (idCheckData.isSuccess) {
      if (idCheckData.data?.result === true && isIdValid) {
        setIdConfirmText("사용 가능한 아이디입니다.");
      } else if (idCheckData.data?.result === false) {
        setIdConfirmText("중복된 아이디입니다.");
      } else if (!isIdValid) {
        setIdConfirmText("아이디는 4~12자의 영소문자, 숫자만 입력 가능합니다.");
      }
    }
  }, [idCheckData.data, idCheckData.isSuccess, username]);

  return idConfirmText;
};
