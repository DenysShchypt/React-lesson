import { useState } from 'react';
import css from './ProductsPage.module.css';
import { nanoid } from 'nanoid';
import {
  AddProductForm,
  Section,
  Product,
  ModalWindow,
  Spinner,
} from 'components/index.js';
import { useEffect } from 'react';
import { fetchGetAll, fetchGetOne } from 'Api';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const [productDescriptionData, setProductDescriptionData] = useState(null);
  const [error, setError] = useState(false);

  const queryValue = searchParams.get('sort');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ sort: value });
  };

  useEffect(() => {
    async function fetchRequest() {
      try {
        setLoading(true);
        setError(false);
        setProducts(await fetchGetAll());
        if (null !== productId) {
          setProductDescriptionData(await fetchGetOne(productId));
        }
        setProduct(await fetchGetOne(queryValue));
      } catch (error) {
        setError(false);
      } finally {
        setLoading(false);
      }
    }

    fetchRequest();
  }, [productId, queryValue]);

  const handleRemoveProduct = idProduct => {
    setProducts(products.filter(prod => prod.id !== idProduct));
  };

  const handleAddProduct = addProduct => {
    const checkOneProduct = products.some(
      product => product.title === addProduct.title
    );
    if (checkOneProduct) {
      alert('This product is already in the list');
      return;
    }
    const addIdProduct = {
      ...addProduct,
      id: nanoid(),
    };
    setProducts(...products, addIdProduct);
  };

  const openModal = dataModal => {
    setModalIsOpen(true);
    setModelData(dataModal);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModelData(null);
  };

  const onSelectProduct = prodId => {
    setProductId(prodId);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <span>Search product by title:</span>
          <input type="text" name="searchKey" required placeholder="1" />
        </label>
        <button type="submit">Search product</button>
      </form>
      {product !== null && (
        <Section title="Products List">
          <ul className={css.productList}>
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              discount={product.discount}
              description={product.description}
              category={product.category}
              image={product.image}
              handleRemoveProduct={handleRemoveProduct}
              openModal={openModal}
              onSelectProduct={onSelectProduct}
              productDescriptionData={productDescriptionData}
            />
          </ul>
        </Section>
      )}
      {error && 'Sorry, there is no information!'}
      {loading && <Spinner />}
      {products !== null && (
        <Section>
          <h1>
            My list of products has
            {products.length}
            products
          </h1>
        </Section>
      )}

      {products !== null && (
        <Section title="Products List">
          <ul className={css.productList}>
            {products
              .sort((a, b) => a.price - b.price)
              .map(product => {
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    handleRemoveProduct={handleRemoveProduct}
                    openModal={openModal}
                    onSelectProduct={onSelectProduct}
                    productDescriptionData={productDescriptionData}
                  />
                );
              })}
          </ul>
        </Section>
      )}

      <Section title="Add new product">
        <AddProductForm handleAddProduct={handleAddProduct} />
      </Section>
      {modalIsOpen && (
        <ModalWindow closeModal={closeModal} modelData={modelData} />
      )}
    </div>
  );
};

export default ProductsPage;
