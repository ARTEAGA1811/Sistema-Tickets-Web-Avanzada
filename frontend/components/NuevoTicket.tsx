import {Button, Form} from "react-bootstrap";

export default function NuevoTicket() {
    return (
        <div className={"p-3"}>
            <header className={"d-flex justify-content-between mb-5"}>
                <h3>Nuevo Ticket</h3>
                <button className={"btn btn-success"}>Regresar</button>
            </header>
            <Form className={"d-flex flex-column"}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={"text-primary fs-5 fw-semibold"}>Título</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa el título"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={"text-primary fs-5 fw-semibold"}>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder={"Agrega una descripción de tu problema"} />
                </Form.Group>
                <Button variant="primary" type="submit" className={"text-center align-self-center"}>
                    Crear ticket
                </Button>
            </Form>
        </div>
    );
}