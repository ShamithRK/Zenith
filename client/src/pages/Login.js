import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock auth logic — replace with API call later
    if (form.email === 'student@example.com' && form.password === 'password') {
      login({ id: 1, name: 'Student User', email: form.email, role: 'student' });
      navigate('/dashboard');
    } else if (form.email === 'trainer@example.com' && form.password === 'password') {
      login({ id: 2, name: 'Trainer User', email: form.email, role: 'trainer' });
      navigate('/trainer-dashboard');
    } else if (form.email === 'admin@example.com' && form.password === 'password') {
      login({ id: 3, name: 'Admin User', email: form.email, role: 'admin' });
      navigate('/admin-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="login-section">
      <div className="login-card card">
        <h2>Login to ZENITH</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>

      <style>{`
        .login-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          padding: 20px;
        }
        .login-card {
          max-width: 400px;
          padding: 30px 30px 40px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          border-radius: 12px;
          background-color: white;
          text-align: center;
        }
        h2 {
          margin-bottom: 25px;
          font-weight: 700;
          color: #0077ff;
        }
        label {
          display: block;
          text-align: left;
          margin-bottom: 6px;
          font-weight: 600;
          color: #555;
        }
        input {
          margin-bottom: 20px;
          border: 1.5px solid #ddd;
          padding: 12px;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.25s ease;
        }
        input:focus {
          outline: none;
          border-color: #0077ff;
        }
        button {
          width: 100%;
          background-color: #0077ff;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 8px;
          padding: 12px;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #005ecb;
        }
        .register-link {
          margin-top: 18px;
          font-weight: 500;
        }
        .register-link a {
          color: #0077ff;
          font-weight: 600;
        }
        .register-link a:hover {
          text-decoration: underline;
        }
        .error-msg {
          color: #ff4444;
          margin-bottom: 15px;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
