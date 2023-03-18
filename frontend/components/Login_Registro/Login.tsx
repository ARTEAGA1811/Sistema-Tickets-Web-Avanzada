import login from "../../styles/login.module.css";
import FormularioLogin from "./FormularioLogin";
import Head from "next/head";
import React, {Dispatch, SetStateAction} from "react";
import {log} from "util";

export default function Login(props: { setEstaLogeado:  Dispatch<SetStateAction<boolean>> }) {
    return (
        <div>
            <Head>
                <title>{"Login"}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                      crossOrigin="anonymous"/>

            </Head>

            <div className={login.contenedor}>
                <div className={login.parte_izq + " p-3"}>
                    <h1 className={"text-primary fs-1 fw-bolder"}>Soporte EPN</h1>
                    <p className={"fs-4 text-dark text-center"}>Realiza tus solicitudes de soporte de manera rápida y
                        efectiva</p>
                </div>
                <div className={" mx-5 px-5" }>
                    <FormularioLogin setEstaLogeado={props.setEstaLogeado}/>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                    crossOrigin="anonymous"></script>

        </div>

    );
}