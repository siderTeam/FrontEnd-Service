import { useEffect, useState } from "react";

export const usePhoneValidation = (phone) => {
  const [phoneConfirmText, setPhoneConfirmText] = useState("");

  useEffect(() => {
    const validatePhoneNumber = (phone) => {
      return phone.toLowerCase().match(/^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/);
    };

    const isPhoneNumberValid = validatePhoneNumber(phone);

    if (phone === "") {
      setPhoneConfirmText("");
    } else if (!isPhoneNumberValid) {
      setPhoneConfirmText("전화번호가 올바르지 않습니다.");
    } else {
      setPhoneConfirmText("");
    }
  }, [phone]);

  return phoneConfirmText;
};
