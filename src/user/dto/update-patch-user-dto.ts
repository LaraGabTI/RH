import { PartialType } from "@nestjs/mapped-types"; //fatiaa
import { CreateUserDTO } from "./create-user-dto";
//import { Prisma } from "@prisma/client";

export class UpdatePatchUserDTO extends PartialType (CreateUserDTO){
    
}
