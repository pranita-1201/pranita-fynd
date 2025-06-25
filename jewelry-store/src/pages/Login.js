import React, { useState } from 'react';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      alert('Registered successfully!');
    } else {
      alert('Logged in successfully!');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        )}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-primary w-100 mb-2">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <div className="text-center">
        <button
          className="btn btn-link"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}

export default Login;
