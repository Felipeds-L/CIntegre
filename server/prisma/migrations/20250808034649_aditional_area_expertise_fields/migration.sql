/*
  Warnings:

  - The values [tecnology,healty,gastronomy,fashion] on the enum `AreaExpertise` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AreaExpertise_new" AS ENUM ('education', 'health', 'environment', 'social_services', 'tecnology', 'culture', 'urban_planning', 'human_rights', 'food_security');
ALTER TABLE "Activity" ALTER COLUMN "area_expertise" TYPE "AreaExpertise_new"[] USING ("area_expertise"::text::"AreaExpertise_new"[]);
ALTER TYPE "AreaExpertise" RENAME TO "AreaExpertise_old";
ALTER TYPE "AreaExpertise_new" RENAME TO "AreaExpertise";
DROP TYPE "AreaExpertise_old";
COMMIT;
