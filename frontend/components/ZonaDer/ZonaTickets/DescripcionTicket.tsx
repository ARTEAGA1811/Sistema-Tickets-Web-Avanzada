import Ticket_Respuesta from "./Ticket_Respuesta";
import TarjetaTicket from "./TarjetaTicket";
import st from "../../../styles/principal.module.css";

export default function DescripcionTicket({infoTicket, infoRespuesta, miTarjeta}: { infoTicket: any, infoRespuesta: any, miTarjeta: any }) {
    return (
        <div className={st.descripcion_container}>
            <section>
                <Ticket_Respuesta info={infoTicket}/>
                <Ticket_Respuesta info={infoRespuesta}/>
            </section>
            <section className={"d-flex  align-items-center justify-content-center border-start"}>
                <TarjetaTicket {...miTarjeta} />
            </section>
        </div>
    );
}