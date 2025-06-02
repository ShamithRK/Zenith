import React from 'react';

export default function FlowNode({ topic, completed, onClick }) {
  return (
    <div
      className={`flow-node ${completed ? 'completed' : ''}`}
      onClick={onClick}
      title={topic.title}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className="circle">
        {completed ? '✓' : topic.order}
      </div>
      <div className="title">{topic.title}</div>

      <style>{`
        .flow-node {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 16px;
          padding: 8px 12px;
          border-radius: 10px;
          background-color: #dbe9ff;
          transition: background-color 0.25s ease;
          box-shadow: 0 2px 6px rgba(0,119,255,0.1);
        }
        .flow-node:hover,
        .flow-node:focus {
          background-color: #0077ff;
          color: white;
          outline: none;
          box-shadow: 0 0 8px #0077ffaa;
        }
        .circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #0077ff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-right: 14px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .flow-node.completed .circle {
          background-color: #28a745;
        }
        .title {
          font-size: 1rem;
          font-weight: 600;
          user-select: none;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
