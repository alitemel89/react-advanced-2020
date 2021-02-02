import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(timer)
  },[modalContent]);
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
