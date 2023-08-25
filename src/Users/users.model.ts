
import { Prisma } from "@prisma/client";



export class Users implements Prisma.UserCreateInput{
    date: string | Date;
    posts?: Prisma.PostCreateNestedManyWithoutAuthorInput | undefined;
    name: string; 
    password: string; 
    username: string;
    email: string; 
    birth: string;
    biography: string;
}
