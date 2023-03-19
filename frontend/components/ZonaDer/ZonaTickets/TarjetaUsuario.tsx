import {useContext} from "react";
import {UsuarioContext} from "../../UsuarioContext";
import InfoBadget from "./InfoBadget";
import {Colores} from "../../../interfaces/enums";
import presentarFecha from "../../../utils/fechas";
import {ITicket} from "../../../interfaces";
import {Form} from "react-bootstrap";

export default function TarjetaUsuario({ticket}: { ticket: ITicket }) {
    //A partir del ID del usuario que está en ticket se extrae el nombre y correo del usuario
    const obtenerDataUsuario = () => {
        //Por ahora se queman los datos.
        return {
            nombre: "Juan Perez",
            correo: "juan.perez@epn.edu.ec"
        }
    }
    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={""}>
                <h5 className={"text-success fw-bold text-center"}>Usuario</h5>
                <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    readOnly
                    value={obtenerDataUsuario().nombre}
                    className={"text-center"}
                />
                <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    readOnly
                    value={obtenerDataUsuario().correo}
                    className={"mt-2 text-center"}
                />
            </section>
        </div>
    );
}