import { useCallback, useState } from 'react';

const useHandleModal = (defaultValue: boolean) => {
  const [visible, setVisible] = useState(defaultValue);

  const handleModal = () => {
    setVisible(!defaultValue);
    document.body.style.overflowY = 'hidden';
  };

  const handleModalClose = () => {
    setVisible(false);
    document.body.style.overflowY = 'auto';
  };

  return { handleModal, handleModalClose, visible };
};

export default useHandleModal;
