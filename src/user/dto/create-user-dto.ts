import { IsEmail, IsInt, IsOptional, IsString, IsStrongPassword } from "class-validator"


export class CreateUserDTO{ //pro post

    @IsString() //isso aqui valida
    name: string

    @IsString() 
    dateNascimento: string

    @IsString() 
    genero: string

    @IsString() 
    estadoCivil: string

    @IsString() 
    nacionalidade: string
    
    @IsString()
    cpf: string 

    @IsString()
    numeroCelular: string 

    @IsEmail()
    email: string

    @IsString()
    endereco: string 

    @IsString()
    fotoUrl: string

    @IsOptional()
    @IsString()
    enfermidade1?: string

    @IsOptional()
    @IsString()
    enfermidade2?: string

    @IsOptional()
    @IsString()
    enfermidade3?: string

    @IsOptional()
    @IsString()
    habilidades: string

     
    @IsString()
    certificacoesProfissionais?: string

    @IsString()
    qualificacoes: string

    @IsString()
    cargo: string

    @IsString()
    departamento: string
    
    @IsString()
    dataAdmicao: string

    @IsString()
    supervisor?: string

    @IsString()
    horarioDeTrabalho: string

    @IsString()
    salarioBase: string

    @IsOptional()
    @IsString()
    beneficios?: string

    @IsString()
    contaBancaria: string


}
