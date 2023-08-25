import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma.service";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly PrismaService: PrismaService) {
        super({
            JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET, 
        })
    }

    async validate(payload:{username: string}) {
        const users = await this.PrismaService.users.findUnique({
            where: {
                username: payload.username
            }
        })
        return users;

    }

}
