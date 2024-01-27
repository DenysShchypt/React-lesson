import { fetchGetOne } from 'Api';
import { useEffect, useState } from 'react';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Sale from 'Pages/Sale/Sale';

axios.defaults.baseURL = 'https://fakestoreapi.com/products';

const OneProductPage = () => {
  const { productId } = useParams();
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRequest() {
      try {
        setLoading(true);
        setError(false);

        if (null !== productId) {
          setDetailsProduct(await fetchGetOne(productId));
        }
      } catch (error) {
        setError(false);
      } finally {
        setLoading(false);
      }
    }
    fetchRequest();
  }, [productId]);
  return (
    <div>
      {error !== null && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {detailsProduct !== null && (
        <div>
          <h2>Title products: {detailsProduct.title}</h2>
          <img
            className="productImg"
            src={detailsProduct.image}
            alt="product"
          />
        </div>
      )}
      <div>
        <NavLink to="sale">Sale</NavLink>
      </div>
      <Routes>
        <Route path="sale" elements={<Sale />} />
      </Routes>
    </div>
  );
};

export default OneProductPage;
