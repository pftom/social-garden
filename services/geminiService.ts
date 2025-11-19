import { GoogleGenAI, Type } from "@google/genai";
import { CardData } from "../types";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMetadata = async (topic: string): Promise<Partial<CardData>> => {
  const ai = getAIClient();
  
  const prompt = `Generate social media preview metadata for the following topic or url: "${topic}". 
  Return a JSON object with title, description, a relevant placeholder image URL (use https://picsum.photos/seed/{seed}/800/400 format), domain name, site name, author name, handles, and tags.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            imageUrl: { type: Type.STRING },
            domain: { type: Type.STRING },
            siteName: { type: Type.STRING },
            authorName: { type: Type.STRING },
            authorHandle: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
          }
        }
      }
    });

    const text = response.text;
    if (!text) return {};
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};