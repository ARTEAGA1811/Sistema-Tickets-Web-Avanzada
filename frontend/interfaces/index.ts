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
    BAJA = 'Baja',
    MEDIA = 'Media',
    ALTA = 'Alta',
    SIN_PRIORIDAD = 'Sin prioridad'
}

export enum Estado {
    ABIERTO = 'Abierto',
    CERRADO = 'Cerrado'
}

export enum Rol {
    USUARIO = 'Usuario',
    SOPORTE = 'Soporte'
}

export interface IUsuario {
    id?: number;
    nombre: string;
    correo: string;
    password?: string;
    rol: Rol;
    userToken?: string;
}


export interface ITicket {
    id: string;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    fechaResolucion?: Date;
    estado: Estado;
    prioridad?: Prioridad;
    usuario: IUsuario;
    soporte: IUsuario;
    respuesta: string;
}

export interface IRespuestaTicket {
    id: string;
    respuesta: string;
}