-- CreateTable
CREATE TABLE "user_rh" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dateNascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "numeroCelular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "enfermidade1" TEXT NOT NULL,
    "enfermidade2" TEXT NOT NULL,
    "enfermidade3" TEXT NOT NULL,
    "habilidades" TEXT NOT NULL,
    "certificacoesProfissionais" TEXT NOT NULL,
    "qualificacoes" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "dataAdmicao" TEXT NOT NULL,
    "supervisor" TEXT NOT NULL,
    "horarioDeTrabalho" TEXT NOT NULL,
    "salarioBase" INTEGER NOT NULL,
    "beneficios" TEXT NOT NULL,
    "contaBancaria" TEXT NOT NULL,

    CONSTRAINT "user_rh_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_rh_cpf_key" ON "user_rh"("cpf");
