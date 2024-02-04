/*
  Warnings:

  - You are about to drop the column `order` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "order";

-- CreateTable
CREATE TABLE "FinishedTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" SERIAL NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinishedTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FinishedTask" ADD CONSTRAINT "FinishedTask_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
