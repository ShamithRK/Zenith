import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainerDashboard() {
  return (
    <section className="dashboard-section">
      <h1>Trainer Dashboard</h1>
      <p>Manage your courses, track students’ progress, and create assessments.</p>

      <div className="dashboard-cards">
        <Link to="/courses" className="card-link">
          <div className="card">
            <h3>Manage Courses</h3>
            <p>Create and update courses with topics and videos.</p>
          </div>
        </Link>

        <Link to="/assessments" className="card-link">
          <div className="card">
            <h3>Manage Assessments</h3>
            <p>Create quizzes and view student results.</p>
          </div>
        </Link>

        <Link to="/achievements" className="card-link">
          <div className="card">
            <h3>Achievements</h3>
            <p>View badges awarded to your students.</p>
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
          background: #e6f0ff;
          border-radius: 15px;
          padding: 25px 20px;
          box-shadow: 0 4px 12px rgba(0,119,255,0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          color: #003366;
          font-weight: 600;
        }
        .card:hover {
          box-shadow: 0 10px 25px rgba(0,119,255,0.5);
          transform: translateY(-6px);
          color: #001f4d;
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
