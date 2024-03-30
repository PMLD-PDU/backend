-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "companyId" DROP NOT NULL;
