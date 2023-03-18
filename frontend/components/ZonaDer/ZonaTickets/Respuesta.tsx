import InfoBadget from "./InfoBadget";
import ModalTicket from "./ModalTicket";
import {ITicket} from "../../../interfaces";
import presentarFecha from "../../../utils/fechas";


export default function Respuesta({ticket}: { ticket: ITicket }) {
    const infoRespuesta = {
        titulo: "Respuesta",
        descripcion: ticket.descripcion,
        fechaCreacion: ticket.fechaCreacion
    }
    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>Respuesta</h5>
                <p>{presentarFecha(infoRespuesta.fechaCreacion)}</p>
            </section>
            <p>{infoRespuesta.descripcion}</p>
        </div>
    );

}