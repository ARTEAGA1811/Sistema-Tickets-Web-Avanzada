import {Estado, ITicket, Prioridad} from "../interfaces";

export const ticketsFakeData: ITicket[] = [
    {
        id: "#EE1",
        titulo: "Ticket 1",
        descripcion: "Descripcion del ticket 1",
        fechaCreacion: new Date('2021-01-02 11:45:00'),
        estado: Estado.ABIERTO,
        fechaResolucion: new Date('2021-01-02 11:45:00'),
        prioridad: Prioridad.BAJA,
        respuestaId: "#RR1",
        soporteId: 1,
        usuarioId: 1
    },
    {
        id: "#EE2",
        titulo: "Ticket 2",
        descripcion: "Descripcion del ticket 2",
        fechaCreacion: new Date('2021-01-02 11:45:00'),
        estado: Estado.CERRADO,
        fechaResolucion: new Date('2021-01-02 11:45:00'),
        prioridad: Prioridad.ALTA,
        respuestaId: "#RR2",
        soporteId: 1,
        usuarioId: 1
    },
    {
        id: "#EE3",
        titulo: "Ticket 3",
        descripcion: "Descripcion del ticket 3",
        fechaCreacion: new Date('2021-01-02 11:45:00'),
        estado: Estado.ABIERTO,
        fechaResolucion: new Date('2021-01-02 11:45:00'),
        prioridad: Prioridad.MEDIA,
        respuestaId: "#RR3",
        soporteId: 1,
        usuarioId: 1
    },
    {
        id: "#EE4",
        titulo: "Ticket 4",
        descripcion: "Descripcion del ticket 4",
        fechaCreacion: new Date('2021-01-02 11:45:00'),
        estado: Estado.CERRADO,
        fechaResolucion: new Date('2021-01-02 11:45:00'),
        prioridad: Prioridad.SIN_PRIORIDAD,
        respuestaId: "#RR4",
        soporteId: 1,
        usuarioId: 1
    }
];

