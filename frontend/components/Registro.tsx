import Head from "next/head";
import React from "react";
import st from "../styles/principal.module.css";
import {Button, Form} from "react-bootstrap";

export default function () {
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
            <main className={st.registro_container}>
                <div className={"px-4 py-3 bg-light border  rounded d-flex flex-column"}>
                    <h1 className={"text-center text-dark fw-bold mb-5 "}>Registro</h1>
                    <Form className={"d-flex flex-column"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Nombre de usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" required={true}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required={true}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" required={true}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className={"align-self-center"}>
                            Crear usuario
                        </Button>
                    </Form>
                    <Button variant={"outline-primary"} className={"mt-3 align-self-center"}>Regresar</Button>
                </div>


            </main>
        </div>
    );
}