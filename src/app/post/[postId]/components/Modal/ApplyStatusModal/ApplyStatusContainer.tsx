'use client';

import { color } from '@/styles/color';
import Modal from '@/components/Modal/Modal';
import { useEffect, useState } from 'react';
import ApplyStatus from './ApplyStatus';
import ApplyUserDetail from './ApplyUserDetail';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  postId: number;
};

const ApplyStatusContainer = ({ visible, onClose, postId }: ModalProps) => {
  const [currentContent, setCurrentContent] = useState('status');

  const handleClick = () => {
    setCurrentContent('detail');
  };

  useEffect(() => {
    setCurrentContent('status');
  }, [visible]);

  return (
    <Modal
      style={{
        borderRadius: 24,
        width: 886,
        height: 615,
        background: `${color.gray.black}`,
        zIndex: 9999,
        overflow: 'hidden',
        padding: 0,
        border: '1px solid rgba(255, 255, 255, 0.60)',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
      }}
      visible={visible}
      onClose={onClose}
    >
      {currentContent === 'status' && <ApplyStatus postId={postId} onClick={handleClick} />}
      {currentContent === 'detail' && <ApplyUserDetail />}
    </Modal>
  );
};

export default ApplyStatusContainer;
