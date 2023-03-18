// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export enum Prioridad {
    BAJA = 'BAJA',
    MEDIA = 'MEDIA',
    ALTA = 'ALTA',
    SIN_PRIORIDAD = 'SIN PRIORIDAD'
}

export enum Estado {
    ABIERTO = 'ABIERTO',
    CERRADO = 'CERRADO'
}

export enum Rol {
    USUARIO = 'USUARIO',
    SOPORTE = 'SOPORTE'
}

export interface IUsuario {
    id: number;
    nombre: string;
    correo: string;
    password?: string;
    rol: Rol;
}


export interface ITicket{
    id: string;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    fechaResolucion?: Date;
    estado: Estado;
    prioridad?: Prioridad;
    usuarioId: number;
    soporteId: number;
    respuestaId: string;
}

export interface IRespuestaTicket{
    id: string;
    respuesta: string;
}