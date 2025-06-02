import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <section className="dashboard-section">
      <h1>Admin Dashboard</h1>
      <p>Manage users, oversee platform activities, and configure system settings.</p>

      <div className="dashboard-cards">
        <Link to="/users" className="card-link">
          <div className="card">
            <h3>User Management</h3>
            <p>View, edit, and manage all users on the platform.</p>
          </div>
        </Link>

        <Link to="/courses" className="card-link">
          <div className="card">
            <h3>Course Management</h3>
            <p>Approve or modify courses created by trainers.</p>
          </div>
        </Link>

        <Link to="/reports" className="card-link">
          <div className="card">
            <h3>Reports & Analytics</h3>
            <p>Analyze platform usage and user progress.</p>
          </div>
        </Link>
      </div>

      <style>{`
        .dashboard-section {
          padding: 30px 20px;
          max-width: 900px;
          margin: auto;
        }
        h1 {
          font-size: 2.4rem;
          margin-bottom: 10px;
          color: #0077ff;
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 25px;
          color: #444;
        }
        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }
        .card-link {
          text-decoration: none;
        }
        .card {
          background: #cce0ff;
          border-radius: 15px;
          padding: 25px 20px;
          box-shadow: 0 4px 12px rgba(0,119,255,0.4);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          color: #00264d;
          font-weight: 600;
        }
        .card:hover {
          box-shadow: 0 10px 25px rgba(0,119,255,0.6);
          transform: translateY(-6px);
          color: #001533;
        }
        h3 {
          margin-bottom: 12px;
          font-weight: 700;
        }
        p {
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .dashboard-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
