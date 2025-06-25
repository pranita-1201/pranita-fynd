import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.address && form.phone) {
      setSubmitted(true);
      clearCart();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      {submitted ? <div className="alert alert-success">Order placed successfully!</div> : (
        <form onSubmit={handleSubmit}>
          <input required className="form-control mb-2" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
          <input required className="form-control mb-2" placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
          <input required className="form-control mb-2" placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
          <button className="btn btn-success" type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;