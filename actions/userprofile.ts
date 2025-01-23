"use server";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

// export default async function updateUserProfile(formData: FormData) {
//   const firstName = formData.get("firstName") as string;
//   const lastName = formData.get("lastName") as string;
//   const email = formData.get("email") as string;
//   const userId = formData.get("userId") as string;

// //   if (!firstName || !lastName || !email || !userId) {
// //     throw new Error("Missing required fields");
// //   }

//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//   });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const updatedUser = await prisma.user.update({
//     where: { id: user.id },
//     data: {
//       firstName,
//       lastName,
//       email,
//     },
//   });

//   return updatedUser;
// }


export async function updateUserProfile(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return {
      message: "Succesfully Updated name",
      status: "green",
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          message: "This username is alredy used",
          status: "error",
        };
      }
    }

    throw e;
  }
}