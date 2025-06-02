import api from './api';

// Get all courses
export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Get course by ID
export const getCourseById = async (id) => {
  try {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error;
  }
};

// Get topics for a course
export const getTopicsForCourse = async (courseId) => {
  try {
    const response = await api.get(`/courses/${courseId}/topics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching topics:', error);
    throw error;
  }
};

export const getCourseWithTopics = async () => {
  try {
    const res = await api.get('/courses/with-topics'); // Make sure backend supports this route
    return res.data;
  } catch (err) {
    console.error("Error fetching course with topics:", err);
    throw err;
  }
};
