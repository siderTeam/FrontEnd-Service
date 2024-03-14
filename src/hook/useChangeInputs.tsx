import { numExp } from 'public/regex';
import { useState } from 'react';

const useChangeInputs = <T,>(defaultValue: T) => {
  const [inputs, setInputs] = useState(defaultValue);

  const onChange = (e: any, type?: string) => {
    const { value, name } = e.target;

    // 숫자만 허용
    if (type === 'number') {
      const numberValue = value.replace(numExp, '');
      setInputs({
        ...inputs,
        [name]: numberValue,
      });
      return;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { onChange, inputs, setInputs };
};

export default useChangeInputs;
