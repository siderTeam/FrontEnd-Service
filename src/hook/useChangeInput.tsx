import { useState } from 'react';

const useChangeInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const onChange = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };

  return { onChange, input, setInput };
};

export default useChangeInput;
