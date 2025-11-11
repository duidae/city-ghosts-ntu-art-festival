
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we'll proceed assuming it's set.
  console.warn("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateGhostFishPoem = async (): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }
  try {
    const prompt = `Write a short, melancholic poem from the perspective of a fish living in the sewer system beneath a bustling modern city like Taipei. It was once in a river with sunlight, but now only sees concrete and pipes. Use the metaphor of being a ghost. The poem should be about 4-6 lines.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "Failed to hear from the ghost fish. The currents are too strong today.";
  }
};
