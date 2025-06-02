const Topic = require('../models/Topic');

exports.createTopic = async (req, res) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create topic' });
  }
};

exports.getTopicsByCourse = async (req, res) => {
  try {
    const topics = await Topic.find({ course: req.params.courseId }).sort('order');
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch topics' });
  }
};
