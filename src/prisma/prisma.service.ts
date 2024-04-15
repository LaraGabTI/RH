import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client"; //faz papel de cliente do bd

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() { //abri conexao
        await this.$connect()
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }

    async enableShutdownHooks( app: INestApplication) { //precisa fechar ela
        process.on('beforeExit', async () => {
            await app.close()
        
        })
    }

    
}
