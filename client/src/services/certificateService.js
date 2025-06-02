import api from './api';

const certificateService = {
  getCertificate: async (userId) => {
    const res = await api.get(`/certificates/${userId}`);
    return res.data;
  },

  generateCertificate: async (userId) => {
    const res = await api.post(`/certificates/generate`, { userId });
    return res.data;
  }
};

export default certificateService;
