import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <section className="dashboard-section">
      <h1>Student Dashboard</h1>
      <p>Welcome back! Here are your ongoing courses and progress.</p>

      <div className="dashboard-cards">
        <Link to="/learning-pathway" className="card-link">
          <div className="card">
            <h3>Learning Pathway</h3>
            <p>Follow your personalized roadmap to master new skills.</p>
          </div>
        </Link>

        <Link to="/assessments" className="card-link">
          <div className="card">
            <h3>Assessments</h3>
            <p>Take quizzes and tests to validate your knowledge.</p>
          </div>
        </Link>

        <Link to="/achievements" className="card-link">
          <div className="card">
            <h3>Achievements</h3>
            <p>View your badges and certifications earned.</p>
          </div>
        </Link>

        <Link to="/career-guidance" className="card-link">
          <div className="card">
            <h3>Career Guidance</h3>
            <p>Get expert advice to plan your career path.</p>
          </div>
        </Link>
      </div>

      <style>{`
        .dashboard-section {
          padding: 30px 20px;
          max-width: 1000px;
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
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
        }
        .card-link {
          text-decoration: none;
        }
        .card {
          background: #f0f6ff;
          border-radius: 15px;
          padding: 25px 20px;
          box-shadow: 0 4px 12px rgba(0,119,255,0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          color: #004a99;
          font-weight: 600;
        }
        .card:hover {
          box-shadow: 0 10px 25px rgba(0,119,255,0.4);
          transform: translateY(-6px);
          color: #002f66;
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
