import {ReactNode} from "react";
import {Colores} from "../../../interfaces/enums";

export default function InfoBadget(props: { children: ReactNode, variante: Colores}) {
    const obtenerColorPorVariante = () => {
        switch (props.variante) {
            case Colores.ROJO:
                return "text-bg-danger";
            case Colores.AMARILLO:
                return "text-bg-warning";
            case Colores.VERDE:
                return "text-bg-success";
            case Colores.GRIS:
                return "text-bg-secondary";
            default:
                return "text-bg-dark";
        }
    }
    return (
        <div>
            <p className={obtenerColorPorVariante() + " badge rounded-pill mb-0"}>
                {props.children}
            </p>

        </div>
    );
}