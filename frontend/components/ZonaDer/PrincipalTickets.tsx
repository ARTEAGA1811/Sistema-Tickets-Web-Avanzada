import Buscar from "./Buscar";
import Ticket from "./ZonaTickets/Ticket";
import {useContext, useEffect, useState} from "react";
import NuevoTicket from "./NuevoTicket";
import {ITicket, Rol} from "../../interfaces";
import {UsuarioContext} from "../UsuarioContext";
import {apiObtenerTodosTickets, apiObtenerTodosTickets_Soporte} from "../../consumoApi/api";
import {ActualizarListaContext, IActualizarListaContext} from "../ActualizarListaContext";


export default function PrincipalTickets() {

    const [nuevoTicket, setNuevoTicket] = useState(false);
    const [listaTickets, setListaTickets] = useState([] as ITicket[]);
    const [busquedaPalabra, setBusquedaPalabra] = useState<string>("");
    const [actualizarLista, setActualizarLista] = useState(false);

    const {usuario} = useContext(UsuarioContext)

    const mostrarNuevoTicket = () => {
        setNuevoTicket(true);
    }

    const obtenerTickets = () => {
        // const respuesta = await fetch("http://localhost:3000/api/tickets");
        // const tickets = await respuesta.json();
        // setListaTickets(tickets);

        const getMiListaTickets = async () => {
            try {
                console.log("Obteniendo tickets");
                console.log(usuario);
                let respuesta;
                if (usuario.rol === Rol.SOPORTE) {
                    console.log("Soy soporte");
                    respuesta = await apiObtenerTodosTickets_Soporte(usuario.userToken);

                } else {
                    console.log("Soy usuario");
                    respuesta = await apiObtenerTodosTickets(usuario.userToken);
                }
                const data = await respuesta.json() as [];
                const miVerdaderaListaTickets: ITicket[] = data.map((ticket: any) => {
                        return {
                            id: (ticket.id).toString(),
                            titulo: ticket.titulo,
                            descripcion: ticket.descripcion,
                            fechaCreacion: new Date(ticket.fechaCreacion),
                            fechaResolucion: (ticket.fechaResolucion) ? new Date(ticket.fechaResolucion) : null,
                            estado: ticket.estado.nombre,
                            prioridad: ticket.prioridad.nombre,
                            usuario: {
                                id: ticket.usuario.id,
                                nombre: ticket.usuario.nombreUsuario,
                                correo: ticket.usuario.correo,
                                rol: Rol.USUARIO
                            },
                            soporte: {
                                id: ticket.soporte.id,
                                nombre: ticket.soporte.nombreUsuario,
                                correo: ticket.soporte.correo,
                                rol: Rol.SOPORTE
                            },
                            respuesta: ticket.respuesta
                        }
                    }
                );
                setListaTickets(miVerdaderaListaTickets);

            } catch (e) {
                console.error("Error al obtener los tickets");
                console.error(e);
            }
        }
        getMiListaTickets().then().catch((e) => {
            console.error(e);
        });
    }

    useEffect(() => {
        obtenerTickets()
    }, []);

    useEffect(() => {
        if (actualizarLista) {
            obtenerTickets();
            setActualizarLista(false);
        }
    }, [actualizarLista]);

    const filtrarTickets = () => {
        if (busquedaPalabra === "") {
            return listaTickets;
        }
        return listaTickets.filter((ticket) => {
            return ticket.titulo.toUpperCase().includes(busquedaPalabra.toUpperCase()) || ticket.id.toUpperCase().includes(busquedaPalabra.toUpperCase());
        });

    }


    if (nuevoTicket) {
        return <NuevoTicket setNuevoTicket={setNuevoTicket} setActualizarLista={setActualizarLista}/>
    }

    const objetoActualizarLista: IActualizarListaContext = {
        actualizarLista: actualizarLista,
        setActualizarLista: setActualizarLista
    }
    return (
        <ActualizarListaContext.Provider value={objetoActualizarLista}>
            <div className={"p-3"}>
                <header>
                    <section className={"d-flex justify-content-between"}>
                        <h2>Tickets</h2>
                        {usuario.rol === Rol.USUARIO &&
                            <button className={"btn btn-success"} onClick={mostrarNuevoTicket}>Nuevo ticket</button>
                        }
                    </section>
                    <section className={"d-flex justify-content-end mt-4"}>
                        <Buscar busquedaPalabra={busquedaPalabra} setBusquedaPalabra={setBusquedaPalabra}/>
                    </section>
                </header>
                <main className={"mt-4"}>
                    {filtrarTickets().map((ticket) => {
                        return <Ticket key={ticket.id} ticket={ticket}/>
                    })}
                    {filtrarTickets().length === 0 && listaTickets.length > 0 &&
                        <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>No se han encontrado tickets
                            con
                            esa palabra.</p>}
                    {listaTickets.length === 0 && usuario.rol === Rol.USUARIO &&
                        <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>Aún no has creado ningún
                            ticket.</p>}
                    {listaTickets.length === 0 && usuario.rol === Rol.SOPORTE &&
                        <p className={"text-center mt-4 text-secondary fs-4 fst-italic"}>No hay tickets para
                            atender.</p>}

                </main>
            </div>
        </ActualizarListaContext.Provider>
    );
}