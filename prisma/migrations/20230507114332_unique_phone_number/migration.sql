/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employee_phone_number_key" ON "employee"("phone_number");
