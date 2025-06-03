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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { email, password } = form;

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      login(data.user);
      if (data.user.role === 'student') navigate('/dashboard');
      else if (data.user.role === 'trainer') navigate('/trainer-dashboard');
      else navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <section className="login-section">
<<<<<<< HEAD
      <div className="login-card">
        <h2>Welcome to <span>ZENITH</span></h2>
=======
      <div className="login-card card">
        <h2>Login to ZCareer</h2>

>>>>>>> 024420ffc2303f40f40034f9c5925c9a0ead9a47
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        .login-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 90vh;
          background: linear-gradient(135deg, #e0f7ff, #f5faff);
          padding: 20px;
        }

        .login-card {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          max-width: 400px;
          width: 100%;
          animation: fadeIn 0.6s ease-in-out;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 24px;
          color: #222;
          text-align: center;
        }

        h2 span {
          color: #007bff;
        }

        .input-group {
          margin-bottom: 18px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #333;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        input:focus {
          border-color: #007bff;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.25s;
        }

        button:hover {
          background-color: #005fcc;
        }

        .register-link {
          margin-top: 20px;
          font-size: 0.95rem;
          text-align: center;
        }

        .register-link a {
          color: #007bff;
          font-weight: 600;
        }

        .register-link a:hover {
          text-decoration: underline;
        }

        .error-msg {
          color: #ff4b4b;
          margin-bottom: 16px;
          text-align: center;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
