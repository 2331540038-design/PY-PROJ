import { GoogleGenAI } from "@google/genai";

// FIX: Initialize GoogleGenAI with process.env.API_KEY directly as per guidelines.
// The API key is assumed to be configured in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (userInput: string, productNames: string[]): Promise<string> => {
  // FIX: Removed redundant API key check. The guidelines state to assume it's always available.
  try {
    const systemInstruction = `You are a friendly and helpful sales assistant for TechSphere, an online electronics store. 
    Your goal is to help customers with their questions about products.
    Our current product lineup includes: ${productNames.join(', ')}.
    Be concise, helpful, and friendly. If a user asks about a product not on the list, gently inform them it's not available and suggest an alternative if possible.
    Do not make up products or prices.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userInput,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to get a response from the AI assistant.");
  }
};
