import { useState } from 'react';

const initialDate = {
  start: new Date(),
  end: new Date(),
};

export interface DateRangeType {
  start: Date;
  end: Date;
}

const useChangeDateRange = (defaultDate?: DateRangeType) => {
  const [date, setDate] = useState(defaultDate || initialDate);

  const onChange = (e: Date, type: 'start' | 'end') => {
    setDate({
      ...date,
      [type]: e,
    });
  };

  return { onChange, date, setDate };
};

export default useChangeDateRange