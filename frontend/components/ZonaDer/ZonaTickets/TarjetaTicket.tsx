import InfoBadget from "./InfoBadget";

export interface ITarjetaTicket {
    id: string;
    fechaCreacion: Date;
    fechaResolucion: Date;
    estado: string;
    prioridad: string;
}

export default function TarjetaTicket(props: ITarjetaTicket) {
    return (
        <div className={"border p-3 rounded shadow-sm mb-3 w-75"}>
            <section className={""}>
                <h5>Ticket info</h5>
                <p className={"d-flex justify-content-between"}>
                    <span>Ticket ID:</span>
                    <InfoBadget/>
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span>Creado: </span>
                    {props.fechaCreacion.toDateString()}
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span>Resuelto: </span>
                    {props.fechaResolucion.toDateString()}
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span>Estado: </span>
                    <InfoBadget/>
                </p>
                <p className={"d-flex justify-content-between"}>
                    <span>Prioridad:</span>
                    <InfoBadget/>
                </p>
            </section>
        </div>
    )
}