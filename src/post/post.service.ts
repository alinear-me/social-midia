import { PrismaService } from "src/prisma.service";
import { Posts } from "./post.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Posts[]>{
        return this.prisma.posts.findMany()
    }

    async getById(id:number): Promise<Posts | null> {
        return this.prisma.posts.findUnique({where: {id:Number(id)}})
    }

    async createPost(data: Posts): Promise<Posts> {
        return this.prisma.posts.create({
            data,
        })
    }

    async updatePost(id: number, data: Posts): Promise<Posts> {
        return this.prisma.posts.update({
            where: {id: Number(id)},
            data: {content: data.content }
        })
    }

    async deletePost(id: number): Promise<Posts> {
        return this.prisma.posts.delete({
            where: {id: Number(id)}
        })
    }
}