import {ITicket} from "../interfaces";
import InfoColor from "./InfoColor";

export default function Ticket({ticket}: { ticket: ITicket }) {
    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>{ticket.titulo}</h5>
                <p>{ticket.fechaCreacion.toDateString()}</p>
            </section>
            <p>{ticket.descripcion}</p>
            <section className={"d-flex justify-content-between"}>
                <div className={"d-flex gap-2"}>
                    <InfoColor/>
                    <InfoColor/>
                </div>
                <div>
                    <button className={"btn btn-outline-primary"}>Abrir</button>
                </div>
            </section>
        </div>
    );
}