import { useForm } from 'hooks/useForm';
import React from 'react';

import { Label } from './styles';

export const AddCategory: React.FC<any> = ({ setCategories }) => {
  const { inputValue, handleInputChange, handleSubmit } = useForm(setCategories);
  return (
    <form onSubmit={handleSubmit}>
      <Label>Busqueda de Gifs</Label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
