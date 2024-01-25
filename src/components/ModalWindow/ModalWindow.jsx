import React, { Component } from 'react';
import { ModalStyle } from './ModalWindow.styled';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClose);
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClose);
    document.body.style.overflow = 'auto';
  }
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  handleEscapeClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <ModalStyle onClick={this.handleOverlayClick}>
        <div className="modal">
          <button
            onClick={this.props.closeModal}
            type="button"
            className="closeBtn"
          >
            ✖
          </button>
          <img
            className="productImg"
            src={this.props.modelData.image}
            alt="product"
          />
          <h2 className="text">Title products :{this.props.modelData.title}</h2>
          <p className="text">Price:{this.props.modelData.price}</p>
          <p className="text">Category:{this.props.modelData.category}</p>
          <p className="text">Description:{this.props.modelData.description}</p>
          <p className="text">Discount:{this.props.modelData.discount}</p>
        </div>
      </ModalStyle>
    );
  }
}

export default ModalWindow;
