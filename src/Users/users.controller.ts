
import { Request, Response } from "express";
import { UsersService } from "./users.service";
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../authentication/auth.guard";
import { Users } from "./users.model";

@Controller('users')
export class UsersController {
    static getAll: any;
    constructor(private readonly UsersService: UsersService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll(@Req() request: Request, @Res() response: Response): Promise<any> {
        try {
            const result = await this.UsersService.getAll();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Succefully',
                result: result
            })
        } catch (err) {
            return response.status(500).json({
                status: 'Ok!',
                message: 'Internal Server Error!',
            })
        }
    }

    @Get(':id')
    async getById(@Param('id') id:number): Promise<Users | null> {
        return this.UsersService.getById(id)
    }

    @Post()
    async createUser(@Body() userData: Users): Promise<Users> {
        return this.UsersService.createUser(userData)
    }

    @Put()
    async updateUser(@Param('id') id:number, @Body() userData: Users): Promise<Users> {
        return this.UsersService.updateUser(id, userData)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number): Promise<Users> {
        return this.UsersService.deleteUser(id)
    }


}