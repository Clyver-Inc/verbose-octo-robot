const { Feedback } = require("../../database/models");

async function getAll(req, res) {
  try {
    const feedbacks = await Feedback.findAll({
      attributes: ["id", "candidate", "interview_type", "date"],
    });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAll };
