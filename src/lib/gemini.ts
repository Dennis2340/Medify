import { GoogleGenerativeAI, } from "@google/generative-ai";


// model 1
export const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GEMINI_MODEL!,

);



export const llm = genAI.getGenerativeModel({model:"gemini-1.5-flash"})
export const model = genAI.getGenerativeModel({ model: "embedding-001" });


