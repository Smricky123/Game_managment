import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    username : string;

    @IsEmail()
    @IsNotEmpty() 
    email : string;
}

export class UpdateId{
    id : string;
}