import { useEffect, useState } from "react";

export const useNicknameValidation = (nickname) => {
  const [nicknameConfirmText, setNicknameConfirmText] = useState("");

  useEffect(() => {
    const validateNickname = (nickname) => {
      return nickname
        .toLowerCase()
        .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,20}$/);
    };
    const isNinameValid = validateNickname(nickname);

    if (nickname === "") {
      setNicknameConfirmText("");
    } else if (!isNinameValid) {
      setNicknameConfirmText(
        "닉네임을 2글자 이상 20글자 미만으로 입력해주세요."
      );
    } else {
      setNicknameConfirmText("");
    }
  }, [nickname]);

  return nicknameConfirmText;
};
