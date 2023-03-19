import {useContext} from "react";
import {UsuarioContext} from "../UsuarioContext";
import st from "../../styles/principal.module.css";
import {Form} from "react-bootstrap";
import {Rol} from "../../interfaces";

export default function PrincipalPerfil() {
    const {usuario} = useContext(UsuarioContext)
    const mostrarInfoUsuario = () => {
        return (
            <section className={"d-flex justify-content-evenly text-center mt-4"}>
                <div>
                    <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Tickets creados</p>
                    <Form.Control
                        type="text"
                        placeholder=""
                        aria-label="Disabled input example"
                        readOnly
                        value={4}
                        className={"text-center"}
                    />
                </div>
                <div>
                    <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Tickets activos:</p>
                    <Form.Control
                        type="text"
                        placeholder=""
                        aria-label="Disabled input example"
                        readOnly
                        value={3}
                        className={"text-center"}
                    />
                </div>
            </section>
        )
    }

    const mostrarInfoSoporte = () => {
        return (
            <section className={"d-flex justify-content-evenly text-center mt-4"}>
                <div>
                    <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Tickets asignados</p>
                    <Form.Control
                        type="text"
                        placeholder=""
                        aria-label="Disabled input example"
                        readOnly
                        value={4}
                        className={"text-center"}
                    />
                </div>
                <div>
                    <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Tickets solucionados</p>
                    <Form.Control
                        type="text"
                        placeholder=""
                        aria-label="Disabled input example"
                        readOnly
                        value={3}
                        className={"text-center"}
                    />
                </div>
            </section>
        )
    }


    return (
        <div className={"p-3"}>
            <header>
                <h2>Mi Perfil</h2>
            </header>
            <main className={st.perfil_container + " mt-4  rounded p-5"}>
                <p className={"text-primary fs-5 fw-semibold mb-1"}>Rol</p>
                <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    readOnly
                    value={usuario.rol}
                />
                <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Nombre</p>
                <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    readOnly
                    value={usuario.nombre}
                />
                <p className={"text-primary fs-5 fw-semibold mb-1 mt-3"}>Correo</p>
                <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    readOnly
                    value={usuario.correo}
                />
                {usuario.rol === Rol.USUARIO ? mostrarInfoUsuario() : mostrarInfoSoporte()}

            </main>
        </div>


    );
}