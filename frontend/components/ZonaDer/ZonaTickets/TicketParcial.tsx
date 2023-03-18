import InfoBadget from "./InfoBadget";
import ModalTicket from "./ModalTicket";
import {ITicket} from "../../../interfaces";
import presentarFecha from "../../../utils/fechas";


export default function TicketParcial({ticket}: { ticket: ITicket }) {
    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5 className={"text-primary fw-bold"}>{ticket.titulo}</h5>
                <p>{presentarFecha(ticket.fechaCreacion)}</p>
            </section>
            <p>{ticket.descripcion}</p>
        </div>
    );

}