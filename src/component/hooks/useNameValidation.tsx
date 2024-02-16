import { useEffect, useState } from "react";

export const useNameValidation = (name) => {
  const [nameConfirmText, setNameConfirmText] = useState("");

  useEffect(() => {
    const validateName = (name) => {
      return name.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,20}$/);
    };

    const isNameValid = validateName(name);

    if (name === "") {
      setNameConfirmText("");
    } else if (!isNameValid) {
      setNameConfirmText("이름을 2글자 이상 20글자 미만으로 입력해주세요.");
    } else {
      setNameConfirmText("");
    }
  }, [name]);

  return nameConfirmText;
};
