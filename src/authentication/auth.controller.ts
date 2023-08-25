import { Controller, Post, Req, Res, Body } from "@nestjs/common";
import { AuthService } from "./dto/auth.service";
import { LoginDto } from "./dto/login-user.dto";
import { Request, Response } from "express";
import { RegisterUserDto } from "./dto/register-user.dto";



@Controller('/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Req() request: Request, @Res() response: Response, @Body()LoginDto: LoginDto): Promise<any> {
        try {
            const result = await this.authService.login(LoginDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully login!',
                result: result
            })
        } catch (err) {
            return response.status(500).json({
                status: 'Erro',
                message: 'Internal Server Error!',
        
            })
        }
    }

    @Post('/register')
    async register(@Req() request: Request, @Res() response: Response, @Body()RegisterUserDto: RegisterUserDto): Promise<any> {
        try {
            const result = await this.authService.register(RegisterUserDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully register!',
                result: result
            })
        } catch (err) {
            return response.status(500).json({
                status: 'Erro',
                message: 'Internal Server Error!',
        
            })
        }
    }
}