/*
  Warnings:

  - Added the required column `address` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "start_date" TIMESTAMP(3),
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "volunteer_quantity" INTEGER;
