
import { db } from '@/db';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user?.id || !user?.email) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {status: 401})
        }

        const dbUser = await db.user.findFirst({
            where: { id: user.id },
        });

        if (!dbUser) {
            await db.user.create({
                data: {
                    name: `${user.given_name} ${user.family_name}`,
                    id: user.id,
                    email: user.email,
                },
            });
        }
        return new Response(JSON.stringify({ success: true }), {status: 200})
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {status: 500})
    }
}
