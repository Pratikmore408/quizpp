import Question from "../models/Question.js";

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    // console.log(questions);

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
