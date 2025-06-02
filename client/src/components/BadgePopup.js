import React from 'react';

export default function BadgePopup({ message, onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="popup" role="alert" aria-live="assertive">
        <div className="badge-icon">🏅</div>
        <div className="message">{message}</div>
        <button className="close-btn" onClick={onClose} aria-label="Close badge popup">
          ×
        </button>

      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          z-index: 999;
          cursor: pointer;
        }
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          padding: 30px 40px;
          width: 320px;
          max-width: 90vw;
          text-align: center;
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #155724;
          user-select: none;
        }
        .badge-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          color: #28a745;
          text-shadow: 0 0 8px #28a745aa;
        }
        .message {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 28px;
        }
        .close-btn {
          background: #28a745;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          color: white;
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 4px 12px #28a745cc;
          transition: background-color 0.3s ease;
        }
        .close-btn:hover,
        .close-btn:focus {
          background: #1e7e34;
          outline: none;
        }
      `}</style>
      </div>
    </>
  );
}
