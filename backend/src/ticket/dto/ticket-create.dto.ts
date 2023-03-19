import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class TicketCreateDto{
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsIn(['Alta', 'Media', 'Baja', 'Sin prioridad'])
    prioridad: string;


}