import { IsInt, IsNotEmpty } from "class-validator";

export class LoginUserDto{
    @IsNotEmpty()
    username : string;

    @IsInt()
    @IsNotEmpty() 
    id : number;
}
