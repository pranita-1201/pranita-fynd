import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Jewelry Collection</h2>
      <div className="row">
        {products.map(product => (
          <div className="card col-md-4 mb-3" key={product.id}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">₹ {product.price}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;