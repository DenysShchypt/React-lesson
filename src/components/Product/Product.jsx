import { Products } from './Product.styled';
const Product = ({
  id,
  title,
  price,
  category,
  description,
  image,
  handleRemoveProduct,
  openModal,
  discount,
  onSelectProduct,
  productDescriptionData,
}) => {
  const productBg = discount ? '#aaffaad3' : '#badad7';
  const productStyle = {
    backgroundColor: productBg,
    color: discount ? 'white' : 'black',
  };
  return (
    <Products key={id} style={productStyle} onClick={() => onSelectProduct(id)}>
      <div className="containerDescription">
        <img className="productImg" src={image} alt="product" />
        <h2>{title}</h2>
        <p className="textItem">Price:{price}$</p>
        <p className="textItem">Category:{category}</p>
        {productDescriptionData !== null && productDescriptionData.id === id ? (
          <p className="textItem">
            Description:{productDescriptionData.description}
          </p>
        ) : (
          <p className="textItem">Press for description👁‍🗨</p>
        )}
      </div>

      <div className="containerBtn">
        {discount ? (
          <h3 className="discountBage">Discount: {discount}%</h3>
        ) : (
          <h3 className="apology">Discount is absent</h3>
        )}
        <button type="button" className="productBtn">
          Buy the product
        </button>
        <button
          type="button"
          className="productBtn"
          onClick={() => handleRemoveProduct(id)}
        >
          Remove the product &times;
        </button>
        <button
          onClick={() =>
            openModal({ title, price, image, description, category })
          }
          className="productBtn"
          type="button"
        >
          About product
        </button>
      </div>
    </Products>
  );
};

export default Product;
