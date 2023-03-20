import Head from "next/head";
import React from "react";
import st from "../../styles/principal.module.css";
import {Alert, Button, Form} from "react-bootstrap";
import ModalMensaje from "./ModalMensaje";
import {IUsuario, Rol} from "../../interfaces";
import {apiCrearUsuario} from "../../consumoApi/api";

export default function () {
    const [nombreUsuario, setNombreUsuario] = React.useState("");
    const [correoElectronico, setCorreoElectronico] = React.useState("");
    const [contrasena, setContrasena] = React.useState("");
    const [registroCorrecto, setRegistroCorrecto] = React.useState(false);
    const [mostrarError, setMostrarError] = React.useState(false);
    const [mensajeError, setMensajeError] = React.useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        //Aquí va la petición al servidor
        crearUsuario()
            .then((respuesta) => {
                console.log("Usuario creado");
                console.log(respuesta);
                setRegistroCorrecto(true);
            })
            .catch((error) => {
                console.log("Error al crear el usuario");
                console.log(error);
                setMensajeError("Error al crear el usuario");
                setMostrarError(true);
            });

        //En caso de que sí se haya registrado correctamente se redirige a la página de login
        //window.location.href = "/";
    }

    const crearUsuario = async () => {
        const nuevoUsuario:IUsuario = {
            nombre: nombreUsuario,
            correo: correoElectronico,
            password: contrasena,
            rol: Rol.USUARIO
        }
        const response = await apiCrearUsuario(nuevoUsuario);
        const data = await response.json();
        console.log(data)
        return data;
    }

    const handleNombreUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombreUsuario(event.target.value);
    }

    const handleCorreoElectronico = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCorreoElectronico(event.target.value);
    }

    const handleContrasena = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContrasena(event.target.value);
    }


    return (
        <div>
            <Head>
                <title>{"Registro"}</title>
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
                    {mostrarError &&
                        <Alert variant={"danger"}>
                            {mensajeError}
                        </Alert>
                    }
                    <Form className={"d-flex flex-column"} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Nombre de usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" required={true}
                                          onChange={handleNombreUsuario}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCorreo">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required={true}
                                          onChange={handleCorreoElectronico}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={"text-primary fs-5 fw-semibold"}>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" required={true}
                                          onChange={handleContrasena}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className={"align-self-center"}>
                            Crear usuario
                        </Button>
                    </Form>
                    <a href="/" className={"mt-3 align-self-center btn btn-outline-primary"}>Regresar</a>
                </div>
            </main>
            {registroCorrecto &&
                <ModalMensaje>
                    <p>¡Tu cuenta ha sido creada!</p>
                </ModalMensaje>
            }
        </div>
    );
}