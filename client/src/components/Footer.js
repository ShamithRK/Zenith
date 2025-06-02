import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} ZENITH. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          background-color: #0077ff;
          color: white;
          padding: 15px 0;
          text-align: center;
          margin-top: auto;
          font-weight: 500;
        }
        .footer-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 15px;
        }
      `}</style>
    </footer>
  );
}
