import { useState } from 'react';

const useHandleModal = (defaultValue: boolean) => {
  const [visible, setVisible] = useState(defaultValue);

  const handleModal = () => {
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return { handleModal, handleModalClose, visible };
};

export default useHandleModal;
