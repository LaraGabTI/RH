import { Controller, Body, Post, Get, Param, Put, Patch, Delete, ParseIntPipe} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UserService } from "./user.service";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";


@Controller('users') 
export class UserController { 
    
    constructor ( private readonly userService: UserService){

    }

    @Post() //criar
    async create(@Body() data:CreateUserDTO){ 
        return this.userService.create(data)
    }

    @Get() //pegar e mostrar
    async read(){
        return this.userService.list()
    }

    @Get(':id') //mostra apenas um
    async readOne(@Param('id', ParseIntPipe) id: number){ //transforma em inteiro
        return this.userService.show(id)
    }

    @Put(':id') //atualiza(id) e tem que passar todo mundo, precisa receber informação por isso o Body
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.update(id, data)
    }

    @Patch(':id') //att só uma parte do elemento
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.updatePartial(id, data)
        
    }

    @Delete(':id') //deleta todo o contato, mas não todos os contatos
    async delete(@Param('id', ParseIntPipe) id: number){ //passa apenas number que eh o id, transforma ele sempre p inteiro com pipe
        return this.userService.delete(id)
    } 
    
}