import {Dropdown, DropdownButton} from "react-bootstrap";
import {ITicket, Prioridad} from "../../../interfaces";
import {apiActualizarTicket} from "../../../consumoApi/api";
import {useContext} from "react";
import {UsuarioContext} from "../../UsuarioContext";
import {ActualizarListaContext} from "../../ActualizarListaContext";

export default function BotonPrioridad({ticket}: { ticket: ITicket }) {

    const {usuario} = useContext(UsuarioContext)
    const {setActualizarLista} = useContext(ActualizarListaContext)
    const cambiarPrioridad = (prior: Prioridad) => {
        //ticket.prioridad = prior;
        const cambiarMiPrioridad = async () => {
            try {

                const respuesta = await apiActualizarTicket(ticket.respuesta, prior, ticket.estado, parseInt(ticket.id), usuario.userToken);
                const data = await respuesta.json();
                console.log(data);
                setActualizarLista(true);
            } catch (e) {
                console.log(e);
            }
        }
        cambiarMiPrioridad().then().catch(e => console.log(e));
    }

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title="Cambiar prioridad"
            size="sm"
        >
            <Dropdown.Item onClick={() => cambiarPrioridad(Prioridad.ALTA)}>Alta</Dropdown.Item>
            <Dropdown.Item onClick={() => cambiarPrioridad(Prioridad.MEDIA)}>Media</Dropdown.Item>
            <Dropdown.Item onClick={() => cambiarPrioridad(Prioridad.BAJA)}>Baja</Dropdown.Item>
        </DropdownButton>
    );

}