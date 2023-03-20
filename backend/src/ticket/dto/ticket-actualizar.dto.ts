import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class TicketActualizarDto{
    @IsString()
    respuesta: string;

    @IsIn(['Baja', 'Media', 'Alta', 'Sin prioridad'])
    prioridad: string;

    @IsIn(['Abierto', 'En Proceso', 'Cerrado'])
    estado: string;

}