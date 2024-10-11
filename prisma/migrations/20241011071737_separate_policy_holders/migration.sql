-- CreateTable
CREATE TABLE "insurance_policies" (
    "insurance_policy_id" TEXT NOT NULL,
    "insurance_policy_name" TEXT NOT NULL,
    "base_price_sgd" DOUBLE PRECISION NOT NULL,
    "type_of_policy" TEXT NOT NULL,
    "policy_holder_id" TEXT NOT NULL,
    "policy_holder_email" TEXT NOT NULL,
    "policy_holder_first_name" TEXT NOT NULL,
    "policy_holder_last_name" TEXT NOT NULL,
    "names_of_insurance_policies" TEXT NOT NULL,

    CONSTRAINT "insurance_policies_pkey" PRIMARY KEY ("insurance_policy_id")
);
