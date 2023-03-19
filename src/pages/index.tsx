import type { User } from "@prisma/client";

import prisma from "@/lib/prisma";

export default function Home({ users }: { users: User[] }) {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="w-1/2">
        {users.map((user) => (
          <div key={user.id} className="flex justify-between">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany({});
  return {
    props: {
      users,
    },
  };
}
