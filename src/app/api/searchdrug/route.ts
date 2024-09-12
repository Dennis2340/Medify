import { NextRequest } from "next/server";
import { searchDrugs } from "@/lib/drugAPI";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const { term, limit } = body
        if (!term) {
            return new Response(JSON.stringify({ message: "Search term is required" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }
        const drugs = await searchDrugs(term, limit ? parseInt(limit) : 20);

        return new Response(JSON.stringify(drugs), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('Error in drug search endpoint:', error);
        return new Response(JSON.stringify({ message: "An error occurred during drug search" }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
