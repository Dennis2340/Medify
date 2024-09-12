import { NextRequest } from "next/server";
import { z } from "zod";
import { queryDrugAPI } from "@/lib/drugAPI";
import { genAI } from "@/lib/gemini";

const DrugInfoValidator = z.object({
  drugName: z.string(),
});

const drugInfoInstruction = `
You are an AI assistant providing clear and concise information about medications. Your task is to summarize key information about a drug in a user-friendly manner. 

Please provide your response in a structured JSON format with the following fields:
1. name: The name of the drug.
2. summary: A brief, easy-to-understand summary of what the drug is used for (1-2 sentences).
3. usages: An array of primary uses for the drug (3-5 bullet points).
4. sideEffects: An array of common side effects (3-5 bullet points).
5. precautions: An array of important precautions or warnings (2-3 bullet points).
6. additionalInfo: Any other crucial information the user should know (1-2 sentences).

Remember:
- Use simple, non-technical language that a general audience can understand.
- Focus on the most important and relevant information.
- Be concise but informative.
- Do not provide dosage information or specific medical advice.
- Always encourage consulting a healthcare professional for personalized advice.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { drugName } = DrugInfoValidator.parse(body);

    // Query drug API
    const drugInfo = await queryDrugAPI(drugName);

    if (!drugInfo) {
      return new Response(JSON.stringify({ error: "Drug information not found" }), { status: 404 });
    }

    // Prepare input for LLM
    const input = `
        Drug Information:
        Name: ${drugInfo.name}
        Active Ingredients: ${drugInfo.activeIngredients.join(", ")}
        Usage: ${drugInfo.usage}
        Side Effects: ${drugInfo.sideEffects.join(", ")}
        Contraindications: ${drugInfo.contraindications.join(", ")}

        Please provide a user-friendly summary of this drug.
        `;

    // Use LLM to generate response
    const llmModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await llmModel.generateContent([drugInfoInstruction, input]);
    const response = result.response;
    const text = response.text();

    // Parse the JSON response
    const jsonResponse = JSON.parse(text);

    return new Response(JSON.stringify(jsonResponse), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred while fetching drug information" }),
      { status: 500 }
    );
  }
}
