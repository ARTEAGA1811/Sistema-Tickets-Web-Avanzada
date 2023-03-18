import Respuesta from "./Respuesta";
import TarjetaTicket from "./TarjetaTicket";
import st from "../../../styles/principal.module.css";
import {ITicket} from "../../../interfaces";
import TicketParcial from "./TicketParcial";

export default function DescripcionTicket({ticket}: { ticket: ITicket }) {

    return (
        <div className={st.descripcion_container}>
            <section>
                <TicketParcial ticket={ticket}/>
                <Respuesta ticket={ticket}/>
            </section>
            <section className={"d-flex  align-items-center justify-content-center border-start"}>
                <TarjetaTicket ticket={ticket} />
            </section>
        </div>
    );
}