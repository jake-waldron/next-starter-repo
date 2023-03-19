import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

// next api handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { name, email } = req.body;

  if (method === "POST") {
    // do something
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(200).json(user);
  }
  if (method === "GET") {
    // do something
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }

  res.status(405).json({ message: "Method not allowed" });
}
