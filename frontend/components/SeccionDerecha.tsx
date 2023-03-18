import {ReactNode, useState} from "react";
import PrincipalTickets from "./PrincipalTickets";
import PrincipalNotificaciones from "./PrincipalNotificaciones";

enum MisSecciones {
    Tickets = "Tickets",
    Notificaciones = "Notificaciones",
}

export default function SeccionDerecha() {
    const [seccionActual, setSeccionActual] = useState(MisSecciones.Notificaciones);

    if (seccionActual === MisSecciones.Tickets) {
        return (
            <PrincipalTickets/>
        );
    }

    return (
        <PrincipalNotificaciones/>
    );
}