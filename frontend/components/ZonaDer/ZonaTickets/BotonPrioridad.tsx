import {Dropdown, DropdownButton} from "react-bootstrap";
import {ITicket, Prioridad} from "../../../interfaces";

export default function BotonPrioridad({ticket}: { ticket: ITicket }) {
    const cambiarPrioridad = (prior: Prioridad) => {
        //ticket.prioridad = prior;
        alert("cambiar prioridad a " + prior);
    }
    return (
        <DropdownButton
            id="dropdown-basic-button"
            title="Cambiar prioridad"
            size="sm"
        >
            <Dropdown.Item  onClick={() => cambiarPrioridad(Prioridad.ALTA)}>Alta</Dropdown.Item>
            <Dropdown.Item  onClick={() => cambiarPrioridad(Prioridad.MEDIA)}>Media</Dropdown.Item>
            <Dropdown.Item  onClick={() => cambiarPrioridad(Prioridad.BAJA)}>Baja</Dropdown.Item>
        </DropdownButton>
    );

}