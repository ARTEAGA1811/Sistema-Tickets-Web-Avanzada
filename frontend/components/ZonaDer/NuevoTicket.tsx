import {Button, Form} from "react-bootstrap";
import {Dispatch, SetStateAction, useState} from "react";

export default function NuevoTicket(props: { setNuevoTicket: Dispatch<SetStateAction<boolean>> }) {
    const [inputTitulo, setInputTitulo] = useState<string>("");
    const [inputDescripcion, setInputDescripcion] = useState<string>("");

    const regresar = () => {
        props.setNuevoTicket(false);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert("Ticket creado con éxito");

        //Logica con el backend

        //Luego se regresa
        regresar();
    }

    const handleTitulo = (event: any) => {
        setInputTitulo(event.target.value);
    }

    const handleDescripcion = (event: any) => {
        setInputDescripcion(event.target.value);
    }

    return (
        <div className={"p-3"}>
            <header className={"d-flex justify-content-between mb-5"}>
                <h3>Nuevo Ticket</h3>
                <button className={"btn btn-success"} onClick={regresar}>Regresar</button>
            </header>
            <Form className={"d-flex flex-column"} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={"text-primary fs-5 fw-semibold"}>Título</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el título"
                                  required={true}
                                  onChange={handleTitulo}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={"text-primary fs-5 fw-semibold"}>Descripción</Form.Label>
                    <Form.Control as="textarea"
                                  rows={5}
                                  placeholder={"Agrega una descripción de tu problema"}
                                  required={true}
                                  onChange={handleDescripcion}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className={"text-center align-self-center"}>
                    Crear ticket
                </Button>
            </Form>
        </div>
    );
}