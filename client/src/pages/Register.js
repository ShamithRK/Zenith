import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Registration failed');
        return;
      }

      navigate('/login');
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <section className="register-section">
      <div className="register-card">
        <h2>Create Your <span>ZENITH</span> Account</h2>
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

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
=======
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email-Id"
            value={form.email}
            onChange={handleChange}
            required
          />
>>>>>>> 024420ffc2303f40f40034f9c5925c9a0ead9a47

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

          <div className="input-group">
            <label>Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>

          <button type="submit">Register</button>
        </form>

        <p className="register-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      <style>{`
        .register-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #fafcff, #e0f3ff);
          padding: 20px;
        }

        .register-card {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          max-width: 450px;
          width: 100%;
          animation: fadeIn 0.6s ease-in-out;
        }

        h2 {
          font-size: 1.7rem;
          margin-bottom: 20px;
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

        input, select {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        input:focus, select:focus {
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
