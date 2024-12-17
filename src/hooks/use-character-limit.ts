import { useState, ChangeEvent } from 'react';

interface UseCharacterLimitProps {
  minLength: number;
  initialValue?: string;
}

export function useCharacterLimit({
  minLength,
  initialValue = '',
}: UseCharacterLimitProps) {
  const [value, setValue] = useState(initialValue);
  const [characterCount, setCharacterCount] = useState(initialValue.length);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    if (newValue.length <= minLength) {
      setValue(newValue);
      setCharacterCount(newValue.length);
    }
  };

  return {
    value,
    characterCount,
    handleChange,
    minLength,
  };
}
