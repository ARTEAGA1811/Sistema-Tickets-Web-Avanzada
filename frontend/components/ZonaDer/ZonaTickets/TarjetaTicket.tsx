import InfoBadget from "./InfoBadget";
import {Estado, ITicket, Prioridad} from "../../../interfaces";
import {Colores} from "../../../interfaces/enums";
import presentarFecha from "../../../utils/fechas";


export default function TarjetaTicket({ticket}: { ticket: ITicket }) {
    const obtenerColorEstado = () => {
        switch (ticket.estado) {
            case Estado.ABIERTO:
                return Colores.AMARILLO
            case Estado.CERRADO:
                return Colores.VERDE
            default:
                return Colores.GRIS
        }
    }

    const obtenerColorPrioridad = () => {
        switch (ticket.prioridad) {
            case Prioridad.BAJA:
                return Colores.VERDE
            case Prioridad.MEDIA:
                return Colores.AMARILLO
            case Prioridad.ALTA:
                return Colores.ROJO
            default:
                return Colores.GRIS
        }
    }

    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={""}>
                <h5 className={"text-success fw-bold text-center"}>Ticket info</h5>
                <p className={"d-flex justify-content-between"}>
                    <span className={"me-3 text-secondary"}>Ticket ID:</span>
                    <InfoBadget variante={Colores.GRIS}>
                        {ticket.id}
                    </InfoBadget>
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span className={"me-3 text-secondary"}>Creado: </span>
                    {presentarFecha(ticket.fechaCreacion)}
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span className={"me-3 text-secondary"}>Resuelto: </span>
                    {presentarFecha(ticket.fechaResolucion)}
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span className={"me-3 text-secondary"}>Estado: </span>
                    <InfoBadget variante={obtenerColorEstado()}>
                        {ticket.estado}
                    </InfoBadget>
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span className={"me-3 text-secondary"}>Prioridad:</span>
                    <InfoBadget variante={obtenerColorPrioridad()}>
                        {ticket.prioridad}
                    </InfoBadget>
                </p>
            </section>
        </div>
    )
}