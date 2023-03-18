import Link from 'next/link'
import Layout from '../components/Layout'
import Login from "../components/Login_Registro/Login";
import React, {useState} from "react";
import PrincipalTickets from "../components/ZonaDer/PrincipalTickets";
import SeccionDerecha from "../components/ZonaDer/SeccionDerecha";
import Registro from "../components/Login_Registro/Registro";
import {IUsuario} from "../interfaces";
import {IUsuarioContext, UsuarioContext} from "../components/UsuarioContext";
import ZonaNavegacion from "../components/ZonaIzq/ZonaNavegacion";
import {SeccionContext} from "../components/SeccionContext";
import {EnumSeccionActual} from "../interfaces/enums";

const IndexPage = () => {
    const [estaLogeado, setEstaLogeado] = useState(false);
    const [miUsuario, setMiUsuario] = useState({} as IUsuario);
    const [seccionActual, setSeccionActual] = useState(EnumSeccionActual.Tickets);

    const objetoUsuarioContext: IUsuarioContext = {
        usuario: miUsuario,
        setUsuario: setMiUsuario
    }
    const objetoSeccionContext: SeccionContext = {
        seccionActual: seccionActual,
        setSeccionActual: setSeccionActual
    }

    return (
        <>
            <UsuarioContext.Provider value={objetoUsuarioContext}>
                {estaLogeado ?
                    <Layout title={"Menú principal"}>
                        <SeccionContext.Provider value={objetoSeccionContext}>
                            <ZonaNavegacion/>
                            <SeccionDerecha/>
                        </SeccionContext.Provider>
                    </Layout>
                    :
                    <Login setEstaLogeado={setEstaLogeado}/>
                }
            </UsuarioContext.Provider>
        </>
    )
}
export default IndexPage
