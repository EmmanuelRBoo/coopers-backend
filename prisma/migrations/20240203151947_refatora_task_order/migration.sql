-- AlterTable
ALTER TABLE "FinishedTask" ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "FinishedTask_order_seq";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "Task_order_seq";
