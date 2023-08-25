// Esse arquivo irá definir as rotas da API

import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Posts } from "./post.model";
import { PostsService } from "./post.service";
import { Request, Response } from "express";


@Controller('api/v1/posts')
export class PostsController {

    constructor(private readonly postService: PostsService) {}

    @Get()
    async getAll(@Req() request: Request, @Res() response: Response): Promise<any> {
        const result = await this.postService.getAll() 
        return response.status(200).json({
            status: 'Ok',
            message: "Successfully fetch data!",
            result:result
        })
    }

    @Get(':id')
    async getById(@Param('id') id:number): Promise<Posts | null> {
        return this.postService.getById(id)
    }

    @Post()
    async createPost(@Body() postData: Posts): Promise<Posts> {
        return this.postService.createPost(postData)
    }

    @Put()
    async updatePost(@Param('id') id:number, @Body() postData: Posts): Promise<Posts> {
        return this.postService.updatePost(id, postData)
    }

    @Delete(':id')
    async deletePost(@Param('id') id:number): Promise<Posts> {
        return this.postService.deletePost(id)
    }

}