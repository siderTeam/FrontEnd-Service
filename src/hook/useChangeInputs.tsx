import { useState } from 'react';

const useChangeInputs = <T,>(defaultValue: T) => {
  const [inputs, setInputs] = useState(defaultValue);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { onChange, inputs, setInputs };
};

export default useChangeInputs;
