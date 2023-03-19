import {IsNotEmpty, IsString} from 'class-validator';
export class UsuarioCreateDto{
    @IsNotEmpty()
    @IsString()
    nombreUsuario: string;

    @IsNotEmpty()
    @IsString()
    correo: string;

    @IsNotEmpty()
    @IsString()
    contrasena: string;


}