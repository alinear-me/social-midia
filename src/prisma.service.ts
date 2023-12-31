//esse arquivo éresponsável por estabelecer a conexão entre a aplicação e o banco de dados do PrismaClient
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    posts: any;
    users: any;

    async onModuleInit() {
        await this.$connect();
    }

    async enableShotdownHooks(app: INestApplication) {
         async () => {
            await app.close()
        }
    }
    
}