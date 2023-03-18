import st from '../styles/principal.module.css'
import Seccion from "./Seccion";
import Usuario from "./Usuario";

export interface ISeccion {
    id: number;
    nombre: string;
    seleccionado: boolean;
}

export default function ZonaNavegacion() {

    const misSecciones: ISeccion[] = [
        {id: 1, nombre: 'Tickets', seleccionado: true},
        {id: 2, nombre: 'Notificaciones', seleccionado: false},
    ];

    return (
        <div className={st.zonaNavegacion + " border-end border-dark py-2 px-2"}>
            <header className={st.header}>
                <h1 className={"text-primary fs-2 text-center"}>Soporte <br/> EPN</h1>
                <Seccion misSecciones={misSecciones}/>
            </header>
            <Usuario/>
        </div>
    );
}