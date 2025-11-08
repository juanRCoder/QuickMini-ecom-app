import { PrismaClient } from "@generated/prisma/client";
const prisma = new PrismaClient();

const findAllProducts = async () => {
  const allProducts = await prisma.products.findMany({
    select: {
      name: true,
      imageUrl: true,
      price: true,
    },
  });
  return allProducts;
};

export const ProductServices = {
  findAllProducts
}
