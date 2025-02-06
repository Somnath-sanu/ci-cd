import { prisma } from "@repo/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst({});

  return (
    <div>
      {user?.email}
      {user?.name}
      Frontend is working
      Next js /
    </div>
  );
}
