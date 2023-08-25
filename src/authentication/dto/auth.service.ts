import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/Users/users.service";
import { PrismaService } from "src/prisma.service";
import { LoginDto } from "./login-user.dto";
import * as bcrypt from "bcrypt";
import { RegisterUserDto } from "./register-user.dto";
import { Users } from "src/Users/users.model";


@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private jwtService: JwtService,
        private readonly usersServuce: UsersService) {}

        async login(LoginDto: LoginDto): Promise<any> {
                const {username, password} = LoginDto;

            const users = await this.prismaService.users.findUnique({
                where: {username}
            })
            if (!users) {
                throw new NotFoundException("user not found")
            }
            
            const validatePassword = await bcrypt.compare(password, users.password);
            if (!validatePassword) {
                throw new NotFoundException("Invalid password")
        }
        return this.jwtService.sign({username})
    } 

    async register (createDtod: RegisterUserDto): Promise<any> {
        const createUsers = new Users();
        createUsers.name = createDtod.name;
        createUsers.email = createDtod.email;  
        createUsers.username = createDtod.username;
        createUsers.password = await bcrypt.hash(createDtod.password, 10)

        const user = await this.usersServuce.createUser(createUsers)

        return this.jwtService.sign({username: user.username})
    }
}