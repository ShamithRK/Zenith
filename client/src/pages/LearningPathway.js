import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlowNode from '../components/FlowNode';
import VideoPlayer from '../components/VideoPlayer';
import BadgePopup from '../components/BadgePopup';
import { getCourseById, getTopicsForCourse } from '../services/courseService';
import { getCourseWithTopics } from '../services/courseService';

export default function LearningPathway() {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [showBadge, setShowBadge] = useState(false);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true); // start loading

        let data = await getCourseById(courseId);

        if (!data.topics || data.topics.length === 0) {
          // If no topics in course data, fetch topics separately
          const topics = await getTopicsForCourse(courseId);
          data = { ...data, topics };
        }

        setCourseData(data);
        if (data.topics && data.topics.length > 0) {
          setCurrentTopic(data.topics[0]);
        }

      } catch (error) {
        console.error('Error loading course:', error);
      } finally {
        setLoading(false); // finished loading
      }
    }

    if (courseId) {
      fetchCourse();
    } else {
      setLoading(false);
    }
  }, [courseId]);

  function handleTopicComplete(topicId) {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
      setShowBadge(true);
      // Auto-advance to next topic if exists
      const currentIndex = courseData.topics.findIndex(t => t.id === topicId);
      const nextTopic = courseData.topics[currentIndex + 1];
      if (nextTopic) {
        setCurrentTopic(nextTopic);
      } else {
        setCurrentTopic(null); // finished all topics
      }
    }
  }

  if (loading) {
    return (
      <section className="learning-pathway">
        <h1>Loading Zenith...</h1>
      </section>
    );
  }

  return (
    <section className="learning-pathway">
      <h1>Learning Pathway</h1>

      {!courseData && !loading && <p>No course data found.</p>}

      {courseData && (
        <div className="content-wrapper">
          <div className="flowchart-container">
            {courseData.topics && courseData.topics.length > 0 ? (
              courseData.topics.map(topic => (
                <FlowNode
                  key={topic.id}
                  topic={topic}
                  completed={completedTopics.includes(topic.id)}
                  onClick={() => setCurrentTopic(topic)}
                />
              ))
            ) : (
              <p>No topics available.</p>
            )}
          </div>

          <div className="video-player-container">
            {currentTopic ? (
              <VideoPlayer
                videoUrl={currentTopic.videoUrl}
                onComplete={() => handleTopicComplete(currentTopic.id)}
                topicTitle={currentTopic.title}
                topicDescription={currentTopic.description}
              />
            ) : (
              <p>You've completed all topics! Great job 🎉</p>
            )}
          </div>
        </div>
      )}

      {showBadge && (
        <BadgePopup
          message="Topic Completed! Here's your badge 🏅"
          onClose={() => setShowBadge(false)}
        />
      )}
    </section>
  );
}
