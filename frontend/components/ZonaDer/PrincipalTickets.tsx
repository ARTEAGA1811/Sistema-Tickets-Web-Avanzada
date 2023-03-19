import Buscar from "./Buscar";
import Ticket from "./ZonaTickets/Ticket";
import {useContext, useEffect, useState} from "react";
import NuevoTicket from "./NuevoTicket";
import {ITicket, Rol} from "../../interfaces";
import {ticketsFakeData} from "../../utils/tickets-data";
import {UsuarioContext} from "../UsuarioContext";


export default function PrincipalTickets() {

    const [nuevoTicket, setNuevoTicket] = useState(false);
    const [listaTickets, setListaTickets] = useState([] as ITicket[]);
    const [busquedaPalabra, setBusquedaPalabra] = useState<string>("");

    const {usuario} = useContext(UsuarioContext)

    const mostrarNuevoTicket = () => {
        setNuevoTicket(true);
    }

    const obtenerTickets = async () => {
        // const respuesta = await fetch("http://localhost:3000/api/tickets");
        // const tickets = await respuesta.json();
        // setListaTickets(tickets);
        setListaTickets(ticketsFakeData)
    }

    useEffect(() => {
        obtenerTickets().then().catch();
    }, []);

    const filtrarTickets = () => {
        if (busquedaPalabra === "") {
            return listaTickets;
        }
        return listaTickets.filter((ticket) => {
            return ticket.titulo.toUpperCase().includes(busquedaPalabra.toUpperCase()) || ticket.id.toUpperCase().includes(busquedaPalabra.toUpperCase());
        });

    }


    if (nuevoTicket) {
        return <NuevoTicket setNuevoTicket={setNuevoTicket}/>
    }

    return (
        <div className={"p-3"}>
            <header>
                <section className={"d-flex justify-content-between"}>
                    <h2>Tickets</h2>
                    {usuario.rol === Rol.USUARIO &&
                        <button className={"btn btn-success"} onClick={mostrarNuevoTicket}>Nuevo ticket</button>
                    }
                </section>
                <section className={"d-flex justify-content-end mt-4"}>
                    <Buscar busquedaPalabra={busquedaPalabra} setBusquedaPalabra={setBusquedaPalabra}/>
                </section>
            </header>
            <main className={"mt-4"}>
                {filtrarTickets().map((ticket) => {
                    return <Ticket key={ticket.id} ticket={ticket}/>
                })}
                {filtrarTickets().length === 0 && listaTickets.length > 0 &&
                    <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>No se han encontrado tickets con
                        esa palabra.</p>}
                {listaTickets.length === 0 &&
                    <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>Aún no has creado ningún
                        ticket.</p>}
            </main>
        </div>
    );
}