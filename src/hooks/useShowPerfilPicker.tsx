import {useState} from 'react';

const useShowPerfilPicker = (initialState = false) => {
  const [showModalAndPicker, setShowModalAndPicker] = useState(initialState);

  const togglePerfilPicker = () => setShowModalAndPicker(prev => !prev);

  const setTogglePerfilPicker = (value: any) => setShowModalAndPicker(Boolean(value));

  return [showModalAndPicker, togglePerfilPicker, setTogglePerfilPicker];
};

export default useShowPerfilPicker;
