import {ReactNode, useContext, useState} from "react";
import PrincipalTickets from "./PrincipalTickets";
import PrincipalPerfil from "./PrincipalPerfil";
import {SeccionContext} from "../SeccionContext";
import {EnumSeccionActual} from "../../interfaces/enums";



export default function SeccionDerecha() {
    const {seccionActual, setSeccionActual} = useContext(SeccionContext);
    if (seccionActual === EnumSeccionActual.Tickets) {
        return (
            <PrincipalTickets/>
        );
    }

    return (
        <PrincipalPerfil/>
    );
}