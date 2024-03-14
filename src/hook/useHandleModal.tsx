import { useState } from 'react';

const useHandleModal = (defaultValue: boolean) => {
  const [visible, setVisible] = useState(defaultValue);

  const handleModal = () => {
    setVisible(!defaultValue);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return { handleModal, handleModalClose, visible };
};

export default useHandleModal;
