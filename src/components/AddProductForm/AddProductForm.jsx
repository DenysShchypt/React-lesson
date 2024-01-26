import React, { useState } from 'react';
import css from './AddProductForm.module.css';
// const initialState = {
//   title: '',
//   price: 0,
//   discount: 0,
//   checkout: false,
// };
const AddProductForm = ({ handleAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrise] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const choiceDiscount = checkout;
    const elementsForm = {
      title,
      price: Number.parseFloat(price),
      discount: choiceDiscount ? Number.parseFloat(discount) : null,
    };
    handleAddProduct(elementsForm);
    setTitle('');
    setPrise(0);
    setDiscount(0);
    setCheckout(false);
  };

  const handleChange = e => {
    const value =
      e.currentTarget.type === 'checkbox'
        ? e.currentTarget.checked
        : e.currentTarget.value;
    const name = e.target.name;
    switch (name) {
      case 'title':
        setTitle(value);
        return;
      case 'price':
        setPrise(value);
        return;
      case 'checkout':
        setCheckout(value);
        return;
      case 'discount':
        setDiscount(value);
        return;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.formAddProduct}>
      <label>
        <p className={css.textName}>Title</p>
        <input type="text" name="title" onChange={handleChange} value={title} />
      </label>
      <label>
        <p className={css.textName}>Prise</p>
        <input type="text" name="price" onChange={handleChange} value={price} />
      </label>
      <label>
        <p className={css.textName}>Choice discount</p>
        <input
          type="checkbox"
          name="checkout"
          onChange={handleChange}
          checked={checkout}
        />
      </label>
      {checkout && (
        <label>
          <p className={css.textName}>Discount</p>
          <input
            type="text"
            name="discount"
            onChange={handleChange}
            value={discount}
          />
        </label>
      )}
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProductForm;
