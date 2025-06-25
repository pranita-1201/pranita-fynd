import products from '../data/products';
import { useCart } from '../context/CartContext';

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="products">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
