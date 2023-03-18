import {ISeccion} from "./ZonaNavegacion";
import st from '../styles/principal.module.css'
export default function Seccion(props: { misSecciones: ISeccion[] }) {
    return (
        <div className={st.seccion_container}>
            {props.misSecciones.map((seccion) => {
                return (
                    <button type="button" className={ "btn py-2 " + (seccion.seleccionado? 'btn-primary' : 'btn-outline-primary')}>{seccion.nombre}</button>
                );
            })
            }
        </div>
    );
}