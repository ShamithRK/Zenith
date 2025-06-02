import React from 'react';

function Achievements() {
  const badges = ['HTML Beginner', 'CSS Styler', 'JS Ninja', 'React Champ'];

  return (
    <div className="card">
      <h2>Your Achievements</h2>
      <ul>
        {badges.map((badge, index) => (
          <li key={index}>🏅 {badge}</li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
