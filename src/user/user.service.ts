import { Injectable, NotFoundException} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Injectable()
export class UserService {

    constructor ( private readonly prisma: PrismaService) {}

    async create({name, dateNascimento, genero, estadoCivil, nacionalidade, cpf, numeroCelular, email, endereco, fotoUrl, enfermidade1, enfermidade2, enfermidade3, habilidades, certificacoesProfissionais, qualificacoes, cargo, departamento, dataAdmicao, supervisor, horarioDeTrabalho, salarioBase, beneficios, contaBancaria }: CreateUserDTO) {
        try{
            const verificarUser = await this.prisma.user_rh.findUnique({
                where: {
                cpf: cpf,
                },
            });
        
            if (verificarUser) {
                throw new Error('CPF já cadastrado, por favor coloque outro');
            }
            
            return this.prisma.user_rh.create({
                data: {
                    name, 
                    dateNascimento, 
                    genero, 
                    estadoCivil, 
                    nacionalidade, 
                    cpf, 
                    numeroCelular, 
                    email, 
                    endereco, 
                    fotoUrl, 
                    enfermidade1,
                    enfermidade2,
                    enfermidade3,
                    habilidades,
                    certificacoesProfissionais,
                    qualificacoes,
                    cargo,
                    departamento,
                    dataAdmicao,
                    supervisor,
                    horarioDeTrabalho,
                    salarioBase,
                    beneficios,
                    contaBancaria
        
                }
            })
        }catch(error){
            console.error('Ocorreu um erro ao criar o usuário:', error.message);
            return error.message;
        }
    }
    
    async list() { //conexao que ta fazendo com o bd, pra listar
        return this.prisma.user_rh.findMany()
    }

    async show(id: number) { 
        return this.prisma.user_rh.findUnique({//procure um id unico la do bd/prisma
            where: {
                id,
            }
        })
    }

   async update (id: number,  data: UpdateUserDTO) {

    if(!await this.show(id)){
        throw new NotFoundException(`Usuario ${id} não encontrado!`)
    }

    return this.prisma.user_rh.update({
        data,
        where: {
            id,
        }
    })
   }

   async updatePartial (id: number, {name, dateNascimento, genero, estadoCivil, nacionalidade, cpf, numeroCelular, email, endereco, fotoUrl, enfermidade1, enfermidade2, enfermidade3, habilidades, certificacoesProfissionais, qualificacoes, cargo, departamento, dataAdmicao, supervisor, horarioDeTrabalho, salarioBase, beneficios, contaBancaria }: UpdatePatchUserDTO) {

    const data: any = {name, dateNascimento, genero, estadoCivil, nacionalidade, cpf, numeroCelular, email, endereco, fotoUrl, enfermidade1, enfermidade2, enfermidade3, habilidades, certificacoesProfissionais, qualificacoes, cargo, departamento, dataAdmicao, supervisor, horarioDeTrabalho, salarioBase, beneficios, contaBancaria }
    if(!await this.show(id)){
        throw new NotFoundException(`Usuario ${id} não encontrado!`)
    }


    return this.prisma.user_rh.update({
        data,
        where: {
            id,
        }
    })
   }

   async delete(id: number) {

    if(!await this.show(id)){
        throw new NotFoundException(`Usuario ${id} não encontrado!`)
    }
    return this.prisma.user_rh.delete({
        where: {
            id
        }
    })
   }
}