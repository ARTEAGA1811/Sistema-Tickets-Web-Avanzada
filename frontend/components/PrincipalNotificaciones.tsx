import Ticket from "./Ticket";
import {listaTickets} from "../utils/listaTickets";

export default function PrincipalNotificaciones() {
    return (
        <div className={"p-3"}>
            <h2>Mis Notificaciones</h2>
            <main className={"mt-4"}>
                {listaTickets.map((ticket) => {
                    return <Ticket key={ticket.id} ticket={ticket}/>
                })}
            </main>
        </div>


    );
}