-- CreateEnum
CREATE TYPE "Status" AS ENUM ('open', 'close', 'other');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('donation', 'volunteer_work');

-- CreateEnum
CREATE TYPE "AreaExpertise" AS ENUM ('tecnology', 'healty', 'gastronomy', 'social_services', 'fashion');

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "student_number" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "starting_year" INTEGER NOT NULL,
    "ong_sustainable" BOOLEAN NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "cep" TEXT NOT NULL,
    "complement" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "photo_url" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMedias" (
    "id" SERIAL NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "link_social_media" TEXT NOT NULL,

    CONSTRAINT "SocialMedias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Causes" (
    "id" SERIAL NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Causes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolAction" (
    "id" SERIAL NOT NULL,
    "school_id" INTEGER NOT NULL,
    "causes_id" INTEGER NOT NULL,
    "status" "Status"[],
    "registers" TEXT NOT NULL,
    "pontuation" INTEGER NOT NULL,

    CONSTRAINT "SchoolAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialAction" (
    "id" SERIAL NOT NULL,
    "causes_id" INTEGER NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "cover_photo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "category" "Category"[],
    "area_expertise" "AreaExpertise"[],
    "status" "Status"[],
    "pontuation" INTEGER NOT NULL,

    CONSTRAINT "SocialAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMedias" ADD CONSTRAINT "SocialMedias_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Causes" ADD CONSTRAINT "Causes_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolAction" ADD CONSTRAINT "SchoolAction_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolAction" ADD CONSTRAINT "SchoolAction_causes_id_fkey" FOREIGN KEY ("causes_id") REFERENCES "Causes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAction" ADD CONSTRAINT "SocialAction_causes_id_fkey" FOREIGN KEY ("causes_id") REFERENCES "Causes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialAction" ADD CONSTRAINT "SocialAction_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
