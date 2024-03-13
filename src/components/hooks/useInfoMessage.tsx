import { InputSubMessageProps } from '@/components/Input/InputSubMessage';
import { useEffect, useState } from 'react';

export type INFO_MESSAGE<T> = {
  [key in keyof T]: InputSubMessageProps & { validate: (value: string, params: any, checkKey?: string) => InputSubMessageProps };
};
type TYPE<T> = {
  [key in keyof T]: InputSubMessageProps & { validate: (value: string, params: any, checkKey?: string) => InputSubMessageProps };
};

const useInfoMessage = <T,>(defaultInfoMessage: TYPE<T>) => {
  const [infoMessages, setInfoMessages] = useState(defaultInfoMessage);
  const [isAllPass, setIsAllPass] = useState(false);
  const infoMessagesKeys = Object.keys(defaultInfoMessage) as [keyof T];

  const onChangeInfoMessage = <U,>(value: string, name: keyof T & string, params: U) => {
    const message = value?.length === 0 ? '' : defaultInfoMessage[name].validate(value, params, name).children;
    const isValidate = defaultInfoMessage[name].validate(value, params).status;
    

    setInfoMessages({
      ...infoMessages,
      [name]: {
        ...infoMessages[name],
        status: isValidate ? 'success' : 'error',
        children: message,
      },
    });
  };

  const handleReset = () => {
    setInfoMessages(defaultInfoMessage);
    setIsAllPass(false);
  };

  useEffect(() => {
    const statusArray = infoMessagesKeys.map((key) => {
      return infoMessages[key].status === 'success';
    });

    setIsAllPass(statusArray.every((status) => status === true));
  }, [infoMessages]);
  return { infoMessages, setInfoMessages, onChangeInfoMessage, isAllPass, handleReset };
};

export default useInfoMessage;
