/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";
import { z } from "zod";

const HealthProfileValidator = z.object({
    age: z.preprocess((val) => Number(val) || undefined, z.number().min(0).max(120).optional()),
    gender: z.enum(["male", "female", "other"]).optional(),
    weight: z.preprocess((val) => Number(val) || undefined, z.number().min(0).optional()),
    height: z.preprocess((val) => Number(val) || undefined, z.number().min(0).optional()),
    allergies: z.array(z.string()).default([]),
    currentMedications: z.array(z.string()).default([]),
    medicalConditions: z.array(z.string()).default([]),
    medicalHistory: z.string().optional(),
    dietaryRestrictions: z.array(z.string()).default([]),
    familyHistory: z.string().optional(),
    lifestyle: z.object({
        smoker: z.preprocess((val) => val === 'true', z.boolean()),
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

        // Check if a health profile already exists for this user
        const existingProfile = await db.healthProfile.findUnique({
            where: { userId: user.id }
        });

        let healthProfile;
        if (existingProfile) {
            // Update existing profile
            healthProfile = await db.healthProfile.update({
                where: { userId: user.id },
                data: {
                    ...healthProfileData,
                    lifestyle: healthProfileData.lifestyle ? {
                        smoker: healthProfileData.lifestyle.smoker,
                        alcoholConsumption: healthProfileData.lifestyle.alcoholConsumption,
                        exerciseFrequency: healthProfileData.lifestyle.exerciseFrequency
                    } : undefined,
                }
            });
        } else {
            // Create new profile
            healthProfile = await db.healthProfile.create({
                data: {
                    userId: user.id,
                    ...healthProfileData,
                    lifestyle: healthProfileData.lifestyle ? {
                        smoker: healthProfileData.lifestyle.smoker,
                        alcoholConsumption: healthProfileData.lifestyle.alcoholConsumption,
                        exerciseFrequency: healthProfileData.lifestyle.exerciseFrequency
                    } : undefined,
                }
            });
        }

        return new Response(JSON.stringify({message: "Health Profile Updated", healthProfile}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error updating health profile:", error);
        return new Response(JSON.stringify({message: "Error updating health profile", error: (error as Error).message}), {status: 500})
    }
}

export const GET = async () => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user || !user.id) {
            return new Response(JSON.stringify({message: "User not found"}), {status: 404})
        }

        const healthProfile = await db.healthProfile.findUnique({
            where: {
                userId: user.id
            }
        });

        if (!healthProfile) {
            return new Response(JSON.stringify({message: "Health profile not found"}), {status: 404})
        }

        return new Response(JSON.stringify(healthProfile), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching health profile:", error);
        return new Response(JSON.stringify({message: "Error fetching health profile"}), {status: 500})
    }
}