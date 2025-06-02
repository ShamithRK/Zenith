import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

function TopicViewer() {
  return (
    <div className="card">
      <h2>Topic Viewer</h2>
      <p>Watch the video and read the notes to complete this topic.</p>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
    </div>
  );
}

export default TopicViewer;
