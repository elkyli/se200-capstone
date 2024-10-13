/*
  Warnings:

  - You are about to drop the `insurance_policies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `policy_holders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "insurance_policies";

-- DropTable
DROP TABLE "policy_holders";

-- CreateTable
CREATE TABLE "PolicyHolder" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "PolicyHolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsurancePolicy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "basePriceSgd" DOUBLE PRECISION NOT NULL,
    "typeOfPolicy" TEXT NOT NULL,

    CONSTRAINT "InsurancePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyHolderPolicy" (
    "policyHolderId" TEXT NOT NULL,
    "insurancePolicyId" TEXT NOT NULL,

    CONSTRAINT "PolicyHolderPolicy_pkey" PRIMARY KEY ("policyHolderId","insurancePolicyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PolicyHolder_email_key" ON "PolicyHolder"("email");

-- CreateIndex
CREATE INDEX "PolicyHolderPolicy_insurancePolicyId_idx" ON "PolicyHolderPolicy"("insurancePolicyId");

-- CreateIndex
CREATE INDEX "PolicyHolderPolicy_policyHolderId_idx" ON "PolicyHolderPolicy"("policyHolderId");

-- AddForeignKey
ALTER TABLE "PolicyHolderPolicy" ADD CONSTRAINT "PolicyHolderPolicy_policyHolderId_fkey" FOREIGN KEY ("policyHolderId") REFERENCES "PolicyHolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyHolderPolicy" ADD CONSTRAINT "PolicyHolderPolicy_insurancePolicyId_fkey" FOREIGN KEY ("insurancePolicyId") REFERENCES "InsurancePolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
