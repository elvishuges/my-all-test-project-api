import { generateAnswerGemini } from "../services/gemini.js";

const generateAnswer = async (req, res) => {
  try {
    const { question } = req.body;

    const answer = await generateAnswerGemini(question);
    return res.status(200).json({ status: false, data: answer });
  } catch (error) {}
};

export { generateAnswer };
