-- CreateEnum
CREATE TYPE "Status" AS ENUM ('aberto', 'fechado', 'outro');

-- CreateEnum
CREATE TYPE "Tipos" AS ENUM ('doacao', 'voluntariado');

-- CreateEnum
CREATE TYPE "AreaAtuacao" AS ENUM ('tecnologia', 'saude', 'gastronomia', 'servico_sociaL', 'moda');

-- CreateTable
CREATE TABLE "Escola" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "numero_estudante" INTEGER NOT NULL,
    "pontos_acumulados" INTEGER NOT NULL,

    CONSTRAINT "Escola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "ano_inicio" INTEGER NOT NULL,
    "ong_sustainable" BOOLEAN NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cep" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adress_id" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "numeroContato" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fotos" (
    "id" SERIAL NOT NULL,
    "foto_url" TEXT NOT NULL,

    CONSTRAINT "Fotos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedesSociais" (
    "id" SERIAL NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "link_redesocial" TEXT NOT NULL,

    CONSTRAINT "RedesSociais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Causas" (
    "id" SERIAL NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Causas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcaoEscola" (
    "id" SERIAL NOT NULL,
    "escola_id" INTEGER NOT NULL,
    "causas_id" INTEGER NOT NULL,
    "status" "Status"[],
    "registros" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL,

    CONSTRAINT "AcaoEscola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcaoSocial" (
    "id" SERIAL NOT NULL,
    "causas_id" INTEGER NOT NULL,
    "ong_id" INTEGER NOT NULL,
    "fotoCapa" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" "Tipos"[],
    "area_atuacao" "AreaAtuacao"[],
    "status" "Status"[],
    "pontuacao" INTEGER NOT NULL,

    CONSTRAINT "AcaoSocial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "Adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedesSociais" ADD CONSTRAINT "RedesSociais_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Causas" ADD CONSTRAINT "Causas_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoEscola" ADD CONSTRAINT "AcaoEscola_escola_id_fkey" FOREIGN KEY ("escola_id") REFERENCES "Escola"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoEscola" ADD CONSTRAINT "AcaoEscola_causas_id_fkey" FOREIGN KEY ("causas_id") REFERENCES "Causas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoSocial" ADD CONSTRAINT "AcaoSocial_causas_id_fkey" FOREIGN KEY ("causas_id") REFERENCES "Causas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcaoSocial" ADD CONSTRAINT "AcaoSocial_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
