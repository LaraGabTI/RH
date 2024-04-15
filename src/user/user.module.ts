import { Module } from "@nestjs/common"; //chama o module, porque vai criar o decoreito
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({ //decoreito é funcao precisa do parentese, pede pelo menos um argumento
    imports: [PrismaModule], //tem o modulo pai, o UserModule, e o pai dele é o appModule
    controllers: [UserController], //add o controle o user aqui
    providers: [UserService],
    exports: [],
}) 
export class UserModule { // logo depois vem minha classe 

}