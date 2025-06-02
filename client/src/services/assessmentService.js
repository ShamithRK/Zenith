import api from './api';

const assessmentService = {
  fetchAssessments: async () => {
    const res = await api.get('/assessments');
    return res.data;
  },

  submitAssessment: async (assessmentId, answers) => {
    const res = await api.post(`/assessments/${assessmentId}/submit`, answers);
    return res.data;
  },

  getResults: async (userId) => {
    const res = await api.get(`/assessments/results/${userId}`);
    return res.data;
  }
};

export default assessmentService;
