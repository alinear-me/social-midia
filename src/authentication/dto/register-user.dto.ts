import { IsString, Length } from "class-validator";



export class RegisterUserDto{
  
    @IsString()
    @Length(50, 10)
    name: string;

    @IsString()
    @Length(5, 10)
    email: string;
    
    @IsString()
    @Length(5, 10)
    username: string;

    @IsString()
    @Length(5, 10)
    password: string;

    @IsString()
    @Length(5, 10)
    biography: string;

    @IsString()
    @Length(5, 10)
    birth: Date
}