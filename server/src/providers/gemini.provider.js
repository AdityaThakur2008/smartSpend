import { GoogleGenAI } from "@google/genai";
import AppError from "../utils/appError.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


class GeminiProvider {
  async generateContent(prompt) {
    try {
      const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: prompt,
      });

      if (!response.text) {
        throw new AppError("Gemini returned an empty response", 500);
      }

      return response.text;
    } catch (error) {
      throw new AppError(
        "Failed to generate content from Gemini API",
        500,
        error.message,
      );
    }
  }
}
export default new GeminiProvider();
