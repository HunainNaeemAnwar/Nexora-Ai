import { GoogleGenAI } from "@google/genai";
import { instruction } from "./instruction";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function LLMResponse(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: instruction,
    },
  });
  return response.text;
}

export default LLMResponse;
