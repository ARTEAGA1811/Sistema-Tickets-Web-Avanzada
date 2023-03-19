import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UsuarioUpdateDto {
    @IsString()
    @IsOptional()
    correo: string;
    @IsString()
    @IsOptional()
    contrasena: string;
}