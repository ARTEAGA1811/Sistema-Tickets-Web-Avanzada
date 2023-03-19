import {Button, Form} from "react-bootstrap";
import presentarFecha from "../../../utils/fechas";
import {ITicket} from "../../../interfaces";
import {useState} from "react";

export default function AgregarRespuesta({ticket}: { ticket: ITicket }) {
    const [inputTextArea, setInputTextArea] = useState<string>("");

    const infoRespuesta = {
        titulo: "Respuesta",
        descripcion: ticket.descripcion,
        fechaCreacion: ticket.fechaCreacion
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        //Se envia la respuesta
        alert("Se envia la respuesta" + inputTextArea);
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