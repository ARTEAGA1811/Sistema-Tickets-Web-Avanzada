import {Estado, ITicket, Prioridad} from "../../../interfaces";
import InfoBadget from "./InfoBadget";
import {useState} from "react";
import ModalTicket from "./ModalTicket";
import DescripcionTicket from "./DescripcionTicket";
import presentarFecha from "../../../utils/fechas";
import {Colores} from "../../../interfaces/enums";

export default function Ticket({ticket}: { ticket: ITicket }) {
    const [mostrarInfoTicket, setMostrarInfoTicket] = useState(false);
    const abrirInfoTicket = () => {
        setMostrarInfoTicket(true);
    }
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

    // const infoTicket: ITicket_Info_Respuesta = {
    //     titulo: ticket.titulo,
    //     descripcion: ticket.descripcion,
    //     fechaCreacion: new Date('2021-01-01'),
    // }
    //
    // const infoRespuesta: ITicket_Info_Respuesta = {
    //     titulo: "Respuesta",
    //     descripcion: "Descripcion de la respuesta",
    //     fechaCreacion: new Date('2021-01-01'),
    // }
    //
    // const miTarjeta: ITarjetaTicket = {
    //     id: ticket.id,
    //     estado: ticket.estado,
    //     fechaCreacion: ticket.fechaCreacion,
    //     fechaResolucion: new Date('2021-01-01'),
    //     prioridad: "Alta",
    // }

    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>{ticket.titulo}</h5>
                <p>{presentarFecha(ticket.fechaCreacion)}</p>
            </section>
            <p>{ticket.descripcion}</p>
            <section className={"d-flex justify-content-between"}>
                <div className={"d-flex gap-2"}>
                    <InfoBadget variante={obtenerColorEstado()}>{ticket.estado}</InfoBadget>
                    <InfoBadget variante={Colores.GRIS}>{ticket.id}</InfoBadget>
                    <InfoBadget variante={obtenerColorPrioridad()}>{ticket.prioridad}</InfoBadget>
                </div>
                <div>
                    <button className={"btn btn-outline-primary"}
                            onClick={abrirInfoTicket}
                    >Abrir
                    </button>
                </div>
            </section>
            {
                mostrarInfoTicket &&
                <ModalTicket setMostrarInfoTicket={setMostrarInfoTicket}>
                    <DescripcionTicket ticket={ticket}/>
                </ModalTicket>
            }
        </div>
    );
}