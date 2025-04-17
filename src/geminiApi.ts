import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual Gemini API key (preferably from an environment variable)
const geminiApiKey = process.env.GEMINI_API_KEY || "YOUR_GENERATED_API_KEY";

const genAI = new GoogleGenerativeAI(geminiApiKey);

export default genAI;
