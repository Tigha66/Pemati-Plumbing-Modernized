
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a friendly and professional customer service representative for Pemati Plumbing Services.
Your goal is to assist users with their plumbing inquiries in New York and New Jersey.

Key Information:
- Phone: (646) 806-1231
- Email: pematiservices@gmail.com
- Availability: 24/7 emergency services.
- Services: Drain cleaning, installation, emergency repairs, maintenance plans.
- Pricing: Competitive and honest. We offer free estimates/quotes.
- Tone: Professional, helpful, and friendly.

Capabilities:
1. Answer FAQs about common plumbing issues (leaks, clogs, water heaters).
2. Provide service availability (24/7).
3. Encourage users to request a free quote via the website or phone.
4. Provide direct contact details when asked.

Keep responses concise and helpful. If you can't answer a specific technical question, suggest they speak with one of our licensed plumbers.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateResponse(history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history as any,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I'm having trouble connecting. Please call us directly at (646) 806-1231 for immediate assistance.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm currently unavailable. Please reach out via phone at (646) 806-1231.";
    }
  }
}

export const geminiService = new GeminiService();
