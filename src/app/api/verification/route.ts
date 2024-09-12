import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";
import { genAI } from "@/lib/gemini";

export const maxDuration = 300;

const verificationInstruction = `
You are an AI assistant specializing in drug verification and health recommendations. Your task is to analyze the user's health profile and the provided drug information to offer guidance on the suitability of the medication. 

Please provide your response in a structured JSON format with the following fields:
1. suitability: A string indicating the overall suitability of the drug for the user. Use one of these values: "Highly Suitable", "Suitable", "Use with Caution", "Potentially Unsuitable", "Not Recommended".
2. suitabilityColor: A hexadecimal color code representing the suitability level. Use a gradient from red (#FF0000) for "Not Recommended" to green (#00FF00) for "Highly Suitable".
3. reasoning: A brief explanation of your suitability assessment.
4. warnings: An array of potential warnings or contraindications based on the user's health profile.
5. suggestions: An array of alternative suggestions or recommendations, especially if the drug is not entirely suitable.
6. additionalInfo: Any additional relevant information about the drug or its usage.

Remember:
- Do not provide a definitive answer, but rather guidance to help the user make an informed decision.
- Consider allergies, current medications, medical history, and any other relevant factors from the user's health profile.
- Base your response on the provided drug information and the user's health profile.
- Maintain a professional and informative tone.
- Ensure the color code aligns with the suitability level, using appropriate shades between red and green.
`;

export const POST = async (req: NextRequest) => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user || !user.id) {
            return new Response(JSON.stringify({message: "User not found"}), {status: 404})
        }

        const body = await req.json();
        const { drugInfo,  useCase} = body;

        // Fetch user's health profile
        const healthProfile = await db.healthProfile.findUnique({
            where: { userId: user.id },
        });

        if (!healthProfile) {
            return new Response(JSON.stringify({message: "Health profile not found"}), {status: 404})
        }

        
        if (!drugInfo) {
            return new Response(JSON.stringify({message: "Drug information not found"}), {status: 404})
        }

        // Prepare input for LLM
        const input = `
            User Health Profile:
            Current Use for the Drug: ${useCase || "Not provided"}
            Age: ${healthProfile.age || 'Not provided'}
            Gender: ${healthProfile.gender || 'Not provided'}
            Weight: ${healthProfile.weight ? `${healthProfile.weight} kg` : 'Not provided'}
            Height: ${healthProfile.height ? `${healthProfile.height} cm` : 'Not provided'}
            Allergies: ${healthProfile.allergies.join(", ") || 'None'}
            Current Medications: ${healthProfile.currentMedications.join(", ") || 'None'}
            Medical Conditions: ${healthProfile.medicalConditions.join(", ") || 'None'}
            Medical History: ${healthProfile.medicalHistory || 'Not provided'}
            Dietary Restrictions: ${healthProfile.dietaryRestrictions.join(", ") || 'None'}
            Family History: ${healthProfile.familyHistory || 'Not provided'}
            Lifestyle: ${healthProfile.lifestyle ? JSON.stringify(healthProfile.lifestyle) : 'Not provided'}
            Pregnancy Status: ${healthProfile.pregnancyStatus || 'Not provided'}
            Blood Type: ${healthProfile.bloodType || 'Not provided'}

            Drug Information:
            Name: ${drugInfo.name}
            Active Ingredients: ${drugInfo.activeIngredients.join(", ")}
            Usage: ${drugInfo.usage}
            Side Effects: ${drugInfo.sideEffects.join(", ")}
            Contraindications: ${drugInfo.contraindications.join(", ")}

            Please analyze the suitability of this drug for the user based on their health profile.
            `;

        // Use LLM to generate response
        const llmModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await llmModel.generateContent([verificationInstruction, input]);
        const response = result.response;
        const text = response.text();
        console.log("this is the output text ", text)

        // Parse the JSON response
        const jsonResponse = JSON.parse(text);

        // Store the verification result
        await db.drugVerification.create({
            data: {
                userId: user.id,
                drugId: drugInfo.id,
                verificationMethod: "AI-assisted",
                verificationResult: text,
            },
        });

        return new Response(JSON.stringify(jsonResponse), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ message: "An error occurred during drug verification" }),
            { status: 500 }
        );
    }
};
