import {Estado, ITicket} from "../../../interfaces";
import presentarFecha from "../../../utils/fechas";


export default function Respuesta({ticket}: { ticket: ITicket }) {
    const infoRespuesta = {
        titulo: "Respuesta",
        descripcion: ticket.descripcion,
        fechaCreacion: ticket.fechaCreacion
    }

    const colocarRespuesta = () => {
        if (ticket.estado === Estado.ABIERTO) {
            return <p>Aún no hay respuesta a este ticket.</p>
        }
        return <p>{infoRespuesta.descripcion}</p>
    }

    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>Respuesta</h5>
                {ticket.estado === Estado.CERRADO &&
                    <p>{presentarFecha(infoRespuesta.fechaCreacion)}</p>
                }
            </section>
            <p>{colocarRespuesta()}</p>
        </div>
    );

}