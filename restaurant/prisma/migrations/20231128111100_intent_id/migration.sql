/*
  Warnings:

  - You are about to drop the column `intent_id` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[intent]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Order_intent_id_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "intent_id",
ADD COLUMN     "intent" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Order_intent_key" ON "Order"("intent");
