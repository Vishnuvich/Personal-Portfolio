/*
  Warnings:

  - You are about to drop the column `dessignation` on the `Hero` table. All the data in the column will be lost.
  - Added the required column `designation` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "dessignation",
ADD COLUMN     "designation" TEXT NOT NULL;
