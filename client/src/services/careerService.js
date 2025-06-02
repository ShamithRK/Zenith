import api from './api';

const careerService = {
  getCareerTips: async () => {
    const res = await api.get('/career/tips');
    return res.data;
  },

  getJobListings: async () => {
    const res = await api.get('/career/jobs');
    return res.data;
  }
};

export default careerService;
