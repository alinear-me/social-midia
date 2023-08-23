import { Prisma } from "@prisma/client";

export class Posts implements Prisma.PostCreateInput {
    id: number;
    content?: string;
    published?: boolean;
    authorId: number;
    date: Date;
}