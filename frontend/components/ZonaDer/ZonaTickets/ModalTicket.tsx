import {Button, Modal} from 'react-bootstrap';
import {ReactNode} from "react";

export default function ModalTicket(props: { setMostrarInfoTicket: any, children: ReactNode }) {
    const cerrarModal = () => {
        props.setMostrarInfoTicket(false);
    }
    return (
        <>
            <Modal show={true} onHide={cerrarModal} size={"xl"}>
                <Modal.Header closeButton>
                    <Modal.Title>Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={cerrarModal}>
                        Cerrar
                    </Button>
                    {/*<Button variant="primary" onClick={cerrarModal}>*/}
                    {/*    Guardar cambios*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
}