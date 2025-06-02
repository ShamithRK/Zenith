const Progress = require('../models/Progress');

exports.updateProgress = async (req, res) => {
  const { userId, topicId, status } = req.body;

  try {
    let progress = await Progress.findOne({ user: userId, topic: topicId });

    if (progress) {
      progress.status = status;
    } else {
      progress = new Progress({ user: userId, topic: topicId, status });
    }

    await progress.save();
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Could not update progress' });
  }
};

exports.getProgressByUser = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.params.userId }).populate('topic');
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch progress' });
  }
};
