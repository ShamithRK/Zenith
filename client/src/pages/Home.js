import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content card">
        <h1>Welcome to ZCareer</h1>
        <p>Your ultimate platform for skill enhancement, certification, and career guidance.</p>
        <Link to="/register" className="btn-primary">
          Get Started
        </Link>
      </div>

      <style>{`
        .home-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          padding: 40px 20px;
          background: linear-gradient(135deg, #4a90e2 0%, #0077ff 100%);
          color: white;
          text-align: center;
          border-radius: 15px;
          box-shadow: 0 8px 24px rgba(0, 119, 255, 0.5);
        }
        .home-content {
          max-width: 600px;
          background: rgba(255 255 255 / 0.1);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }
        h1 {
          font-size: 2.8rem;
          margin-bottom: 15px;
          font-weight: 700;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 30px;
          font-weight: 500;
        }
        .btn-primary {
          display: inline-block;
          background-color: white;
          color: #0077ff;
          padding: 14px 30px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .btn-primary:hover {
          background-color: #005ecb;
          color: white;
        }

        @media (max-width: 600px) {
          .home-content {
            padding: 30px 20px;
          }
          h1 {
            font-size: 2.2rem;
          }
          p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
