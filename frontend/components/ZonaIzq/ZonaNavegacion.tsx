import st from '../../styles/principal.module.css'
import Seccion from "./Seccion";
import Usuario from "./Usuario";
import {useContext, useEffect, useState} from "react";
import {UsuarioContext} from "../UsuarioContext";
import {Rol} from "../../interfaces";
import {SeccionContext} from "../SeccionContext";

export interface ISeccion {
    id: number;
    nombre: string;
    seleccionado: boolean;
}

const listaSecciones: ISeccion[] = [
    {id: 1, nombre: 'Tickets', seleccionado: true},
    {id: 2, nombre: 'Perfil', seleccionado: false},
];

export default function ZonaNavegacion() {
    const {usuario} = useContext(UsuarioContext)


    const [secciones, setSecciones] = useState<ISeccion[]>(listaSecciones)

    useEffect(() => {
        // if(usuario.rol === Rol.SOPORTE){
        //     //eliminar la seccion de notificaciones
        //     setSecciones(secciones.filter(seccion => seccion.id !== 2))
        // }
    }, [])



    return (
        <div className={st.zonaNavegacion + " border-end border-dark py-2 px-2"}>
            <header className={st.header}>
                <h1 className={"text-primary fs-2 text-center"}>Soporte <br/> EPN</h1>
                <Seccion misSecciones={secciones} setMisSecciones={setSecciones}/>
            </header>
            <Usuario/>
        </div>
    );
}