import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./dto/auth.service";
import { PrismaService } from "src/prisma.service";
import { JwtStrategy } from "./jwt_strategy";
import { UsersService } from "src/Users/users.service";
import { UsersModule } from "src/Users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";



@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, JwtStrategy, UsersService],
        imports: [
            UsersModule,
            PassportModule,
            JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: process.env.EXPIRES_IN
                }
            })
        ]
})
export class AuthModule{}