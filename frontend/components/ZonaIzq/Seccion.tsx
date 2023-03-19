import {ISeccion} from "./ZonaNavegacion";
import st from '../../styles/principal.module.css'
import {useContext} from "react";
import {SeccionContext} from "../SeccionContext";
import {EnumSeccionActual} from "../../interfaces/enums";


export default function Seccion(props: { misSecciones: ISeccion[], setMisSecciones: any }) {
    const {seccionActual, setSeccionActual} = useContext(SeccionContext)
    const seleccionarSeccion = (idSeccion: number) => {
        //Cambia el estado seleccionado de la seccion, si tiene el mismo id que el que se le pasa
        props.misSecciones.forEach((seccion) => {
            seccion.seleccionado = seccion.id === idSeccion;
        });

        const idSeccionRegistrada = seccionActual == EnumSeccionActual.Tickets ? 1 : 2;
        if(idSeccionRegistrada !== idSeccion){
            setSeccionActual(idSeccion === 1 ? EnumSeccionActual.Tickets : EnumSeccionActual.Perfil)
        }
    }
    return (
        <div className={st.seccion_container}>
            {props.misSecciones.map((seccion) => {
                return (
                    <button type="button"
                            className={"btn py-2 " + (seccion.seleccionado ? 'btn-primary' : 'btn-outline-primary')}
                            onClick={() => {
                                seleccionarSeccion(seccion.id);
                                props.setMisSecciones([...props.misSecciones]);
                            }}
                            key={seccion.id}
                    >
                        {
                            seccion.nombre
                        }
                    </button>
                )
                    ;
            })
            }
        </div>
    )
        ;
}