import { passwordPattern, userIdPattern } from 'public/regex';

export const isValidUserID = (inputValue: string): boolean => {
  return userIdPattern.test(inputValue);
};

export const isValidPW = (inputValue: string): boolean => {
  return passwordPattern.test(inputValue);
};

export const getUserIDValidateMessage = (value: string) => {
  if (!isValidUserID(value)) {
    return {
      children: '아이디는 4~12자의 영소문자, 숫자만 입력 가능합니다.',
      status: false,
    };
  } else {
    return {
      children: '',
      status: true,
    };
  }
};

export const getPasswordCheckValidateMessage = (value: string, params?: any, checkKey?: string) => {
  if (checkKey) {
    if (value !== params[checkKey]) {
      return {
        children: '비밀번호와 비밀번호 재확인이 일치하지 않습니다.',
        status: false,
      };
    } else {
      return {
        children: '',
        status: true,
      };
    }
  }

  return '';
};

export const getPasswordValidateMessage = (value: string) => {
  if (!isValidPW(value)) {
    return {
      children: '비밀번호는 영문 소문자, 숫자, 특수문자(~!@#$^&*) 10자 이상 조합만 사용 가능합니다.',
      status: false,
    };
  } else {
    return {
      children: '',
      status: true,
    };
  }
};