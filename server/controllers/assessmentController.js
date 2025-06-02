const Assessment = require('../models/Assessment');

exports.createAssessment = async (req, res) => {
  const { title, questions, assignedTo } = req.body;
  try {
    const assessment = new Assessment({
      title,
      questions,
      assignedTo,
      createdBy: req.user.id,
    });
    await assessment.save();
    res.json(assessment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAssessments = async (req, res) => {
  try {
    let assessments;
    if (req.user.role === 'trainer') {
      assessments = await Assessment.find({ createdBy: req.user.id });
    } else {
      assessments = await Assessment.find({ assignedTo: req.user.id });
    }
    res.json(assessments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
