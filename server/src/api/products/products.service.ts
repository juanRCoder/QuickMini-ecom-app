import { PrismaClient } from "@generated/prisma/client";
const prisma = new PrismaClient();

const findAllProducts = async () => {
  const allProducts = await prisma.products.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      price: true,
    },
  });
  return allProducts;
};

const findProductsByCategoryId = async (categoryId: string) => {
  return prisma.products.findMany({
    where: { categoryId },
    select: {
      id: true,
      name: true,
      imageUrl: true,
      price: true
    }
  })
}

export const ProductServices = {
  findAllProducts,
  findProductsByCategoryId
}
