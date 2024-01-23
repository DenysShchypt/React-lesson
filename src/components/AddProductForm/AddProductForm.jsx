import React, { Component } from 'react';
import css from './AddProductForm.module.css';
const initialState = {
  title: '',
  price: 0,
  discount: 0,
  checkout: false,
};
class AddProductForm extends Component {
  state = {
    ...initialState,
  };
  // Неконтрольована форма
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const element = e.currentTarget.elements;
  //   const choiceDiscount = element.checkout.checked;
  //   const elementsForm = {
  //     title: element.title.value,
  //     price: Number.parseFloat(element.price.value),
  //     discount: choiceDiscount
  //       ? Number.parseFloat(element.discount.value)
  //       : null,
  //   };
  //   this.props.handleAddProduct(elementsForm);
  //   e.target.reset();
  // };
  handleSubmit = e => {
    e.preventDefault();
    const choiceDiscount = this.state.checkout;
    const elementsForm = {
      title: this.state.title,
      price: Number.parseFloat(this.state.price),
      discount: choiceDiscount ? Number.parseFloat(this.state.discount) : null,
    };
    this.props.handleAddProduct(elementsForm);
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const value =
      e.currentTarget.type === 'checkbox'
        ? e.currentTarget.checked
        : e.currentTarget.value;

    this.setState({
      [e.target.name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.formAddProduct}>
        <label>
          <p className={css.textName}>Title</p>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </label>
        <label>
          <p className={css.textName}>Prise</p>
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
          />
        </label>
        <label>
          <p className={css.textName}>Choice discount</p>
          <input
            type="checkbox"
            name="checkout"
            onChange={this.handleChange}
            checked={this.state.checkout}
          />
        </label>
        {this.state.checkout && (
          <label>
            <p className={css.textName}>Discount</p>
            <input
              type="text"
              name="discount"
              onChange={this.handleChange}
              value={this.state.discount}
            />
          </label>
        )}
        <button type="submit">Add product</button>
      </form>
    );
  }
}

export default AddProductForm;
