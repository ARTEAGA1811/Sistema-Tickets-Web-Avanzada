import Link from 'next/link'
import Layout from '../components/Layout'
import Login from "../components/Login_Registro/Login";
import React, {useEffect, useState} from "react";
import PrincipalTickets from "../components/ZonaDer/PrincipalTickets";
import SeccionDerecha from "../components/ZonaDer/SeccionDerecha";
import Registro from "../components/Login_Registro/Registro";
import {IUsuario} from "../interfaces";
import {IUsuarioContext, UsuarioContext} from "../components/UsuarioContext";
import ZonaNavegacion from "../components/ZonaIzq/ZonaNavegacion";
import {SeccionContext} from "../components/SeccionContext";
import {EnumSeccionActual} from "../interfaces/enums";
import {apiObtenerUsuarioPorId} from "../consumoApi/api";

const IndexPage = () => {
    const [estaLogeado, setEstaLogeado] = useState(false);
    const [datosUsuarioCargados, setDatosUsuarioCargados] = useState(false);
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

    useEffect(() => {
        //Se cargan los datos del usuario
        if (estaLogeado) {
            const obtenerDatosUsuario = async () => {
                console.log("Obteniendo datos del usuario");
                console.log(miUsuario);
                try {
                    const respuesta = await apiObtenerUsuarioPorId(miUsuario.id, miUsuario.userToken);
                    const data = await respuesta.json();
                    setMiUsuario(
                        {
                            ...miUsuario,
                            nombre: data.nombreUsuario,
                            correo: data.correo,
                            rol: data.rol.nombre
                        }
                    );
                    setDatosUsuarioCargados(true);
                } catch (e) {
                    console.error("Error al obtener los datos del usuario");
                    console.error(e);
                }
            }
            obtenerDatosUsuario().then().catch((e) => {
                console.error(e);
            });
        }
    }, [estaLogeado]);

    return (
        <>
            <UsuarioContext.Provider value={objetoUsuarioContext}>
                {(estaLogeado && datosUsuarioCargados) ?
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
