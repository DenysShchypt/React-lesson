import css from './Product.module.css';
export const Product = ({ title, prise, discount }) => {
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
      <p>Price: {prise}$</p>
      {discount ? (
        <h3 className={css.discountBage}>Discount: {discount}$</h3>
      ) : (
        <h3 className={css.apology}>Discount is absent</h3>
      )}
      <button type="button" className={css.productAddToCartBtn}>
        {' '}
        Buy the product
      </button>
    </div>
  );
};
