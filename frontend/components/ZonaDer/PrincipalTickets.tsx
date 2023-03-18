import Buscar from "./Buscar";
import Ticket from "./ZonaTickets/Ticket";
import {useEffect, useState} from "react";
import NuevoTicket from "./NuevoTicket";
import {ITicket} from "../../interfaces";
import {ticketsFakeData} from "../../utils/tickets-data";


export default function PrincipalTickets() {

    const [nuevoTicket, setNuevoTicket] = useState(false);
    const [listaTickets, setListaTickets] = useState([] as ITicket[]);
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

    if (nuevoTicket) {
        return <NuevoTicket setNuevoTicket={setNuevoTicket}/>
    }

    return (
        <div className={"p-3"}>
            <header>
                <section className={"d-flex justify-content-between"}>
                    <h2>Tickets</h2>
                    <button className={"btn btn-success"} onClick={mostrarNuevoTicket}>Nuevo ticket</button>
                </section>
                <section className={"d-flex justify-content-end mt-4"}>
                    <Buscar/>
                </section>
            </header>
            <main className={"mt-4"}>
                {listaTickets.map((ticket) => {
                    return <Ticket key={ticket.id} ticket={ticket}/>
                })}
                {listaTickets.length === 0 && <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>Aún no has creado ningún ticket.</p>}
            </main>
        </div>
    );
}