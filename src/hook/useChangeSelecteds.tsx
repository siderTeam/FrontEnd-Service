import { useState } from 'react';

const useChangeSelecteds = <T,>(defaultValue: T) => {
  const [selecteds, setSelecteds] = useState(defaultValue);

  const onChange = (name: string, value: T) => {
    setSelecteds({
      ...selecteds,
      [name]: value,
    });
  };

  return { onChange, selecteds, setSelecteds };
};

export default useChangeSelecteds;
