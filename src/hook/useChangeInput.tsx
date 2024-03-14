import { numExp } from 'public/regex';
import { useState } from 'react';

const useChangeInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const onChange = (e: any, type?: string) => {
    const { value } = e.target;

    // 숫자만 허용
    if (type === 'number') {
      const numberValue = value.replace(numExp, '');
      setInput(numberValue);
      return;
    }

    setInput(value);
  };

  return { onChange, input, setInput };
};

export default useChangeInput;
