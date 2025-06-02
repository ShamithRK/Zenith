import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock registration - replace with API later
    if (form.name && form.email && form.password) {
      // Mock success
      login({ id: Date.now(), name: form.name, email: form.email, role: form.role });
      if (form.role === 'student') navigate('/dashboard');
      else if (form.role === 'trainer') navigate('/trainer-dashboard');
      else navigate('/admin-dashboard');
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <section className="register-section">
      <div className="register-card card">
        <h2>Create an Account</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />

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
            placeholder="Choose a strong password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Register As</label>
          <select id="role" name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>

      <style>{`
        .register-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          padding: 20px;
        }
        .register-card {
          max-width: 420px;
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
        input, select {
          margin-bottom: 20px;
          border: 1.5px solid #ddd;
          padding: 12px;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.25s ease;
          width: 100%;
        }
        input:focus, select:focus {
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
        .login-link {
          margin-top: 18px;
          font-weight: 500;
        }
        .login-link a {
          color: #0077ff;
          font-weight: 600;
        }
        .login-link a:hover {
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
