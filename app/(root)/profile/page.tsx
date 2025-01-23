import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import SubForm from "@/components/SubForm";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  return data;
}

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user:any = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  const data = await getData(user.id);

  return <SubForm firstName={data?.firstName} lastName={data?.lastName} email={data?.email} />;
}
