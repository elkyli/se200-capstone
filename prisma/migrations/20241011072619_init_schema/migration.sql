/*
  Warnings:

  - You are about to drop the column `names_of_insurance_policies` on the `insurance_policies` table. All the data in the column will be lost.
  - You are about to drop the column `policy_holder_email` on the `insurance_policies` table. All the data in the column will be lost.
  - You are about to drop the column `policy_holder_first_name` on the `insurance_policies` table. All the data in the column will be lost.
  - You are about to drop the column `policy_holder_id` on the `insurance_policies` table. All the data in the column will be lost.
  - You are about to drop the column `policy_holder_last_name` on the `insurance_policies` table. All the data in the column will be lost.
  - You are about to alter the column `base_price_sgd` on the `insurance_policies` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "insurance_policies" DROP COLUMN "names_of_insurance_policies",
DROP COLUMN "policy_holder_email",
DROP COLUMN "policy_holder_first_name",
DROP COLUMN "policy_holder_id",
DROP COLUMN "policy_holder_last_name",
ALTER COLUMN "base_price_sgd" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "policy_holders" (
    "policy_holder_id" TEXT NOT NULL,
    "policy_holder_email" TEXT NOT NULL,
    "policy_holder_first_name" TEXT NOT NULL,
    "policy_holder_last_name" TEXT NOT NULL,
    "names_of_insurance_policies" TEXT NOT NULL,

    CONSTRAINT "policy_holders_pkey" PRIMARY KEY ("policy_holder_id")
);
