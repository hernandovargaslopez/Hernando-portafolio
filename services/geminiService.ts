
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { MODEL_CHAT, MODEL_IMAGE, CV_DATA } from "../constants";

// Correctly initialize the GoogleGenAI client with the mandatory API key from process.env
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const createChatSession = (): Chat => {
  const ai = getAIClient();
  return ai.chats.create({
    model: MODEL_CHAT,
    config: {
      systemInstruction: `You are a helpful AI assistant representing Hernando Vargas. 
      Background info about Hernando: ${JSON.stringify(CV_DATA)}. 
      Answer questions professionally. If asked about Hernando, use the provided context. 
      For general questions, be insightful and accurate.`,
    },
  });
};

export const editImage = async (base64Image: string, prompt: string, mimeType: string): Promise<string | null> => {
  try {
    const ai = getAIClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_IMAGE,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: `Edit this image based on the following instruction: ${prompt}. Return the modified image.`,
          },
        ],
      },
    });

    // Iterate through response parts to find the generated image data as per guidelines
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image editing error:", error);
    throw error;
  }
};