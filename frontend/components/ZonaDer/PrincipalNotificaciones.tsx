import Ticket from "./ZonaTickets/Ticket";
import Buscar from "./Buscar";
import {ticketsFakeData} from "../../utils/tickets-data";

export default function PrincipalNotificaciones() {
    return (
        <div className={"p-3"}>
            <header>
                <h2>Mis Notificaciones</h2>
                <section className={"d-flex justify-content-end mt-4"}>
                    <Buscar/>
                </section>
            </header>
            <main className={"mt-4"}>
                {ticketsFakeData.map((ticket) => {
                    return <Ticket key={ticket.id} ticket={ticket}/>
                })}
            </main>
        </div>


    );
}