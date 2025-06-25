import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is currently empty.
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-2 d-flex align-items-center">
                  <img src={item.image} className="img-fluid rounded-start p-2" alt={item.title} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ₹ {item.price}</p>
                    <div className="d-flex align-items-center">
                      <label className="me-2">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                        className="form-control w-auto me-3"
                      />
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <h4>Total: ₹ {total}</h4>
            <Link to="/checkout" className="btn btn-primary mt-3">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;