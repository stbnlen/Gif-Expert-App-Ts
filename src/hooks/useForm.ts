import { useState } from 'react';

export function useForm(setCategories: any) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((animes: any) => [inputValue, ...animes]);
      setInputValue('');
    }
  };

  return {
    inputValue,
    handleInputChange,
    handleSubmit,
  };
}
