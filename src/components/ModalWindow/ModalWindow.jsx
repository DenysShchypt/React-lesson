import React, { useEffect } from 'react';
import { ModalStyle } from './ModalWindow.styled';

const ModalWindow = ({ closeModal, modelData }) => {
  useEffect(
    e => {
      const handleEscapeClose = e => {
        if (e.code === 'Escape') {
          closeModal();
        }
      };
      window.addEventListener('keydown', handleEscapeClose);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleEscapeClose);
        document.body.style.overflow = 'auto';
      };
    },
    [closeModal]
  );

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalStyle onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={closeModal} type="button" className="closeBtn">
          ✖
        </button>
        <img className="productImg" src={modelData.image} alt="product" />
        <h2 className="text">Title products :{modelData.title}</h2>
        <p className="text">Price:{modelData.price}</p>
        <p className="text">Category:{modelData.category}</p>
        <p className="text">Description:{modelData.description}</p>
        <p className="text">Discount:{modelData.discount}</p>
      </div>
    </ModalStyle>
  );
};

export default ModalWindow;
