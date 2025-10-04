import express from "express";
import { generateAnswer } from "../controller/gemini.js";

const gemini = express.Router();

gemini.post("/generate-answer", generateAnswer);

export default gemini;
