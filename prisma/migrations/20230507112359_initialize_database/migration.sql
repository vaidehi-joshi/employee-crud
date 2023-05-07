-- CreateEnum
CREATE TYPE "Department" AS ENUM ('DEPARTMENT_HR', 'DEPARTMENT_ENGINEERING', 'DEPARTMENT_UNASSIGNED');

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "department" "Department" NOT NULL DEFAULT 'DEPARTMENT_UNASSIGNED',
    "skills" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
