import {Button, Modal} from "react-bootstrap";
import {ReactNode} from "react";

export default function ModalMensaje(props: {children: ReactNode}) {
    const irALogin = () => {
        window.location.href = "/";
    }
    return (
        <>
            <Modal show={true} onHide={irALogin} size={"sm"}>
                <Modal.Header closeButton>
                    <Modal.Title>Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={irALogin}>
                        Ir al inicio
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}