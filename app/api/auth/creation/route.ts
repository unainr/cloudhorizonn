import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

async function findOrCreateUser(user:any) {
    let dbUser = await prisma.user.findUnique({
        where: { id: user.id },
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                email: user.email ?? "",
                profileImage: user.picture ?? "",
            },
        });
    }

    return dbUser;
}

export async function GET() {
    // Retrieve the session and user
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
        throw new Error("Failed to retrieve user session or user ID is missing.");
    }

    // Ensure environment variables are set
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not defined in environment variables.");
    }

    try {
        // Find or create the user in the database
        await findOrCreateUser(user);

        // Redirect to the base URL
        const redirectUrl = new URL("/", process.env.NEXT_PUBLIC_BASE_URL);
        return NextResponse.redirect(redirectUrl.toString());
    } catch (error: any) {
        console.error("Error processing request:", error);
        throw new Error("An error occurred while processing the request.");
    }
}
