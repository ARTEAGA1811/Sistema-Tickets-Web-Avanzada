import InfoColor from "./InfoColor";
import ModalTicket from "./ModalTicket";
import {ITicket} from "../interfaces";

export interface ITicket_Info_Respuesta {
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
}

export default function Ticket_Respuesta({info}: { info: ITicket_Info_Respuesta }) {
    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>{info.titulo}</h5>
                <p>{info.fechaCreacion.toDateString()}</p>
            </section>
            <p>{info.descripcion}</p>
        </div>
    );

}