const Certificate = require('../models/Certificate');
const User = require('../models/User');

exports.generateCertificate = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const certificate = new Certificate({
      user: userId,
      course: courseId,
      issuedAt: new Date(),
    });

    await certificate.save();
    res.status(201).json({ message: 'Certificate issued', certificate });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
};