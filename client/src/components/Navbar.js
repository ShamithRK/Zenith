import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">ZENITH</Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/learning-pathway" onClick={() => setMenuOpen(false)}>Learning Pathway</NavLink></li>
          <li><NavLink to="/assessments" onClick={() => setMenuOpen(false)}>Assessments</NavLink></li>
          <li><NavLink to="/achievements" onClick={() => setMenuOpen(false)}>Achievements</NavLink></li>
          <li><NavLink to="/career-guidance" onClick={() => setMenuOpen(false)}>Career Guidance</NavLink></li>
          {user ? (
            <>
              {user.role === 'admin' && <li><NavLink to="/admin-dashboard" onClick={() => setMenuOpen(false)}>Admin</NavLink></li>}
              {user.role === 'trainer' && <li><NavLink to="/trainer-dashboard" onClick={() => setMenuOpen(false)}>Trainer</NavLink></li>}
              {user.role === 'student' && <li><NavLink to="/student-dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>}
              <li><button className="logout-btn" onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
              <li><NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink></li>
            </>
          )}
        </ul>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 30px;
          background: #0077ff;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        .logo a {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          letter-spacing: 1.5px;
        }
        .nav-links {
          display: flex;
          gap: 22px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          color: white;
          font-weight: 600;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        .nav-links li a:hover,
        .nav-links li a.active {
          background-color: #005ecb;
        }
        .logout-btn {
          background: #e60000;
          border: none;
          padding: 6px 14px;
          border-radius: 6px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .logout-btn:hover {
          background: #b30000;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
          user-select: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 60px;
            right: 0;
            background: #0077ff;
            height: calc(100vh - 60px);
            width: 220px;
            flex-direction: column;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            padding-top: 20px;
            gap: 16px;
          }
          .nav-links.open {
            transform: translateX(0);
          }
          .nav-links li a,
          .logout-btn {
            padding: 12px 16px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}
