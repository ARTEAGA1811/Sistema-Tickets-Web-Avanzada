import Buscar from "./Buscar";
import Ticket from "./Ticket";
import {ITicket} from "../interfaces";


export default function Principal() {
    const listaTickets: ITicket[] = [
        {
            id: "#EE1",
            titulo: "Ticket 1",
            descripcion: "Descripcion del ticket 1",
            fechaCreacion: new Date('2021-01-01'),
            estado: "Abierto",
        },
        {
            id: "#EE2",
            titulo: "Ticket 2",
            descripcion: "Descripcion del ticket 2",
            fechaCreacion: new Date('2021-01-01'),
            estado: "Abierto",
        },
        {
            id: "#EE3",
            titulo: "Ticket 3",
            descripcion: "Descripcion del ticket 3",
            fechaCreacion: new Date('2021-01-01'),
            estado: "Abierto",
        },
        {
            id: "#EE4",
            titulo: "Ticket 4",
            descripcion: "Descripcion del ticket 4",
            fechaCreacion: new Date('2021-01-01'),
            estado: "Abierto",
        }
    ];

    return (
        <div className={"p-3"}>
            <header>
                <section className={"d-flex justify-content-between"}>
                    <h2>Tickets</h2>
                    <button className={"btn btn-success"}>Nuevo ticket</button>
                </section>
                <section className={"d-flex justify-content-end mt-4"}>
                    <Buscar/>
                </section>
            </header>
            <main className={"mt-4"}>
                {listaTickets.map((ticket) => {
                    return <Ticket ticket={ticket}/>
                })}
            </main>
        </div>
    );
}