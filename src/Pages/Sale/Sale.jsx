import React from 'react';
import { useParams } from 'react-router-dom';

const Sale = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      Sale
      <p>Number sale {productId}</p>
    </div>
  );
};

export default Sale;
