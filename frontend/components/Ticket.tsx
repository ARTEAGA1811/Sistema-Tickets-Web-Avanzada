import {ITicket} from "../interfaces";
import InfoColor from "./InfoColor";
import {useState} from "react";
import ModalTicket from "./ModalTicket";
import Ticket_Respuesta, {ITicket_Info_Respuesta} from "./Ticket_Respuesta";
import TarjetaTicket, {ITarjetaTicket} from "./TarjetaTicket";
import DescripcionTicket from "./DescripcionTicket";

export default function Ticket({ticket}: { ticket: ITicket }) {
    const [mostrarInfoTicket, setMostrarInfoTicket] = useState(false);
    const abrirInfoTicket = () => {
        setMostrarInfoTicket(true);
    }

    const infoTicket: ITicket_Info_Respuesta = {
        titulo: ticket.titulo,
        descripcion: ticket.descripcion,
        fechaCreacion: new Date('2021-01-01'),
    }

    const infoRespuesta:ITicket_Info_Respuesta = {
        titulo: "Respuesta",
        descripcion: "Descripcion de la respuesta",
        fechaCreacion: new Date('2021-01-01'),
    }

    const miTarjeta: ITarjetaTicket = {
        id: ticket.id,
        estado: ticket.estado,
        fechaCreacion: ticket.fechaCreacion,
        fechaResolucion: new Date('2021-01-01'),
        prioridad: "Alta",
    }
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
                    <button className={"btn btn-outline-primary"}
                            onClick={abrirInfoTicket}
                    >Abrir
                    </button>
                </div>
            </section>
            {
                mostrarInfoTicket &&
                <ModalTicket setMostrarInfoTicket={setMostrarInfoTicket}>
                    <DescripcionTicket infoTicket={infoTicket} infoRespuesta={infoRespuesta} miTarjeta={miTarjeta}/>
                </ModalTicket>
            }
        </div>
    );
}