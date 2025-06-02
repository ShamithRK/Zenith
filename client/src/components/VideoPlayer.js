import React, { useRef, useState } from 'react';

export default function VideoPlayer({ videoUrl, topicTitle, topicDescription, onComplete }) {
  const videoRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  function handleEnded() {
    setIsCompleted(true);
    if (onComplete) onComplete();
  }

  return (
    <div className="video-player-wrapper">
      <h2>{topicTitle}</h2>
      <p>{topicDescription}</p>

      <video
        ref={videoRef}
        src={videoUrl}
        controls
        onEnded={handleEnded}
        preload="metadata"
        width="100%"
        poster="/assets/video-poster.png"
      >
        Sorry, your browser does not support the video tag.
      </video>

      {isCompleted && (
        <div className="completion-message">
          🎉 You have completed this topic!
        </div>
      )}

      <style>{`
        .video-player-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #004080;
          padding: 10px 0;
        }
        h2 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0077ff;
        }
        p {
          font-size: 1rem;
          font-weight: 400;
          color: #004080;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }
        video {
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,119,255,0.15);
          background: black;
        }
        .completion-message {
          margin-top: 16px;
          padding: 12px;
          background-color: #d1e7dd;
          color: #0f5132;
          border-radius: 10px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(40,167,69,0.3);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
