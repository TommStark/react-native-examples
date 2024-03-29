/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

export const useDebounceValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
