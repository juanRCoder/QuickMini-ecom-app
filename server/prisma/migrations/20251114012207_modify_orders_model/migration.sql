/*
  Warnings:

  - You are about to drop the column `address` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `nameUser` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `phoneUser` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "address",
DROP COLUMN "nameUser",
DROP COLUMN "phoneUser",
ADD COLUMN     "guestUserAddress" TEXT,
ADD COLUMN     "guestUserName" TEXT,
ADD COLUMN     "guestUserPhone" TEXT;
