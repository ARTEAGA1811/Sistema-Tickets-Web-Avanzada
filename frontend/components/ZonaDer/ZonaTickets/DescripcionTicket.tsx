import Respuesta from "./Respuesta";
import TarjetaTicket from "./TarjetaTicket";
import st from "../../../styles/principal.module.css";
import {Estado, ITicket, Rol} from "../../../interfaces";
import TicketParcial from "./TicketParcial";
import {useContext} from "react";
import {UsuarioContext} from "../../UsuarioContext";
import AgregarRespuesta from "./AgregarRespuesta";
import TarjetaUsuario from "./TarjetaUsuario";
import BotonPrioridad from "./BotonPrioridad";

export default function DescripcionTicket({ticket, cerrarInfoTicket}: { ticket: ITicket, cerrarInfoTicket: any }) {
    const {usuario} = useContext(UsuarioContext)
    return (
        <div className={st.descripcion_container}>
            <section>
                <TicketParcial ticket={ticket}/>
                {
                    (usuario.rol === Rol.SOPORTE && ticket.estado === Estado.ABIERTO)
                        ?
                        <AgregarRespuesta ticket={ticket} cerrarInfoTicket={cerrarInfoTicket}/>
                        :
                        <Respuesta ticket={ticket}/>

                }
                {
                    usuario.rol === Rol.SOPORTE && <BotonPrioridad ticket={ticket}/>
                }

            </section>
            <section className={"d-flex flex-column align-items-center justify-content-center border-start"}>
                <TarjetaTicket ticket={ticket}/>
                {usuario.rol === Rol.SOPORTE && <TarjetaUsuario ticket={ticket}/>}
            </section>
        </div>
    );
}