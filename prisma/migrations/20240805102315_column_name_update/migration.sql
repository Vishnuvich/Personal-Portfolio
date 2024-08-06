/*
  Warnings:

  - You are about to drop the column `organizaton` on the `Hero` table. All the data in the column will be lost.
  - Added the required column `organization` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "organizaton",
ADD COLUMN     "organization" TEXT NOT NULL DEFAULT 'Qburst Technologies';