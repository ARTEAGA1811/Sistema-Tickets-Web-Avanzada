import {Button, Form} from "react-bootstrap";
import {Estado, ITicket} from "../../../interfaces";
import {useContext, useState} from "react";
import {apiActualizarTicket} from "../../../consumoApi/api";
import {UsuarioContext} from "../../UsuarioContext";
import {ActualizarListaContext} from "../../ActualizarListaContext";

export default function AgregarRespuesta({ticket, cerrarInfoTicket}: { ticket: ITicket, cerrarInfoTicket: any }) {
    const [inputTextArea, setInputTextArea] = useState<string>("");
    const {usuario} = useContext(UsuarioContext)
    const {setActualizarLista} = useContext(ActualizarListaContext)


    const handleSubmit = (event: any) => {
        event.preventDefault();

        const actualizarMiTicket = async () => {
            try {
                const respuesta = await apiActualizarTicket(inputTextArea, ticket.prioridad, Estado.CERRADO, parseInt(ticket.id), usuario.userToken)
                const data = await respuesta.json();
                console.log(data);
                setActualizarLista(true);
                cerrarInfoTicket();

            } catch (e) {
                console.log(e);
                alert("Error al actualizar el ticket")
            }
        }

        actualizarMiTicket().then().catch(e => console.error(e));
    }
    const handleInputTextArea = (event: any) => {
        setInputTextArea(event.target.value);
    }

    return (
        <div className={"border p-3 rounded shadow-sm mb-3"}>
            <section className={"d-flex justify-content-between mb-1"}>
                <h5>Añadir Respuesta</h5>
            </section>
            <Form className={"d-flex flex-column"} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder={"Agrega una solución..."}
                        required={true}
                        onChange={handleInputTextArea}
                    />
                </Form.Group>
                <Button variant="success" type="submit" className={"align-self-end"}>
                    Enviar
                </Button>
            </Form>
        </div>
    );
}