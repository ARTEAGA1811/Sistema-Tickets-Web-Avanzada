import Buscar from "./Buscar";
import Ticket from "./Ticket";
import {useState} from "react";
import NuevoTicket from "./NuevoTicket";
import {listaTickets} from "../utils/listaTickets";




export default function PrincipalTickets() {

    const [nuevoTicket, setNuevoTicket] = useState(false);

    const mostrarNuevoTicket = () => {
        setNuevoTicket(true);
    }
    if (nuevoTicket) {
        return <NuevoTicket/>
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
            </main>
        </div>
    );
}