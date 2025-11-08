import { PrismaClient } from "@generated/prisma/client";
const prisma = new PrismaClient();

const findAllCategories = async () => {
  const allCategories = await prisma.categories.findMany({
    select: {
      id: true,
      name: true
    }
  })
  return allCategories
}

export const CategoryServices = {
  findAllCategories
}