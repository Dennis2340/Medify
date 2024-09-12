/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";
import { z } from "zod";

const HealthProfileValidator = z.object({
    age: z.number().min(0).max(120).optional(),
    gender: z.enum(["male", "female", "other"]).optional(),
    weight: z.number().min(0).optional(),
    height: z.number().min(0).optional(),
    allergies: z.array(z.string()),
    currentMedications: z.array(z.string()),
    medicalConditions: z.array(z.string()),
    medicalHistory: z.string().optional(),
    dietaryRestrictions: z.array(z.string()),
    familyHistory: z.string().optional(),
    lifestyle: z.object({
        smoker: z.boolean(),
        alcoholConsumption: z.enum(["none", "light", "moderate", "heavy"]),
        exerciseFrequency: z.enum(["sedentary", "light", "moderate", "active"])
    }).optional(),
    pregnancyStatus: z.enum(["not_applicable", "not_pregnant", "pregnant", "breastfeeding"]).optional(),
    bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional()
});

export const POST = async (req: NextRequest) => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user || !user.id) {
            return new Response(JSON.stringify({message: "User not found"}), {status: 404})
        }
        const body = await req.json();
        const healthProfileData = HealthProfileValidator.parse(body);

        // Create the health profile
        const healthProfile = await db.healthProfile.create({
            data: {
                userId: user.id,
                age: healthProfileData.age,
                gender: healthProfileData.gender,
                weight: healthProfileData.weight,
                height: healthProfileData.height,
                allergies: healthProfileData.allergies,
                currentMedications: healthProfileData.currentMedications,
                medicalConditions: healthProfileData.medicalConditions,
                dietaryRestrictions: healthProfileData.dietaryRestrictions,
                familyHistory: healthProfileData.familyHistory,
                lifestyle: healthProfileData.lifestyle as any,
                pregnancyStatus: healthProfileData.pregnancyStatus,
                bloodType: healthProfileData.bloodType
            }
        });

        return new Response(JSON.stringify({message: "Health Profile Created", healthProfile}), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating health profile:", error);
        return new Response(JSON.stringify({message: "Error creating health profile"}), {status: 500})
    }
}