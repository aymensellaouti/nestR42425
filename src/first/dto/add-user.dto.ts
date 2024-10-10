import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { minMaxErrorMessage } from "./errorMessage/minMax.error-messages";

export class AddUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @MinLength(4, {
        message: minMaxErrorMessage()
    })
    @MaxLength(8, {
        message: minMaxErrorMessage(false)
    })
    password: string;
}