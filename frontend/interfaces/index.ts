// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export interface IUsuario {
    id: number;
    nombre: string;
    correo: string;
    password?: string;
    rol: string;
}


export interface ITicket{
    id: string;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    fechaResolucion?: Date;
    estado: string;
    prioridad?: string;
}