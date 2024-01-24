import css from './Product.module.css';
const Product = ({
  id,
  title,
  price,
  discount,
  handleRemoveProduct,
  openModal,
}) => {
  const productBg = discount ? '#0ea700d4' : '#ebfc00';
  const productStyle = {
    backgroundColor: productBg,
    color: discount ? 'white' : 'black',
  };
  return (
    <div className={css.product} style={productStyle}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
        className={css.productImg}
      />
      <h2>Title:{title}</h2>
      <p>Price: {price}$</p>

      {discount ? (
        <h3 className={css.discountBage}>Discount: {discount}%</h3>
      ) : (
        <h3 className={css.apology}>Discount is absent</h3>
      )}
      <button type="button" className={css.productAddToCartBtn}>
        Buy the product
      </button>
      <button
        type="button"
        className={css.productRemoveBtn}
        onClick={() => handleRemoveProduct(id)}
      >
        Remove the product &times;
      </button>
      <button
        onClick={() => openModal({ title, price, discount })}
        className={css.productRemoveBtn}
        type="button"
      >
        About product
      </button>
    </div>
  );
};

export default Product;
