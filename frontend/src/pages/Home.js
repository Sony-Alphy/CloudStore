// frontend/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to CloudStore</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
