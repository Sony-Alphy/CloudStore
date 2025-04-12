// frontend/src/components/ProductList.js
import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length ? (
        products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image || 'placeholder.png'} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;
