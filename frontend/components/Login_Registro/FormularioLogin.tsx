import login from "../../styles/login.module.css" ;
import {Dispatch, SetStateAction, useContext, useState} from "react";
import {UsuarioContext} from "../UsuarioContext";
import {usuarioFakeData} from "../../utils/usuario-data";
import {apiLoginUsuario} from "../../consumoApi/api";

function FormularioLogin(props: { setEstaLogeado: Dispatch<SetStateAction<boolean>> }) {
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    const {usuario, setUsuario} = useContext(UsuarioContext);

    const handleCorreo = (e: any) => {
        setCorreo(e.target.value);
    }

    const handleContra = (e: any) => {
        setContra(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //Aquí va la lógica para enviar los datos al backend

        //por ahora se usa el fake data
        const ingresarLogin = async () => {
            try {
                const respuesta = await apiLoginUsuario(correo, contra);
                if (respuesta.status !== 200) {
                    alert("Error al logearse");
                } else {
                    const data = await respuesta.json();
                    console.log(data);

                    console.log("Usuario logeado");
                    const idUsuario = data.id;
                    const userToken = data.accessToken;

                    props.setEstaLogeado(true);

                    setUsuario({
                        ...usuario,
                        id: idUsuario,
                        userToken: userToken,
                        password: contra,
                        correo: correo
                    });
                }

            } catch (e) {
                console.error("Error al logearse");
                alert("Error al logearse");
            }
        }
        ingresarLogin().then().catch((e) => {
            console.error(e)
        });
    }

    return (
        <div className={"bg-light px-4 py-5 rounded"}>
            <h1 className={"text-center text-dark fw-bold mb-5"}>Login</h1>
            <form className={login.formulario} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label text-primary fs-5 fw-semibold">Correo
                        electrónico</label>
                    <input type="email" className="form-control"
                           id="correo" required={true}
                           placeholder={"Ingresa tu correo electrónico"}
                           onChange={handleCorreo}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contra" className="form-label text-primary fs-5 fw-semibold">Contraseña</label>
                    <input type="password" className="form-control"
                           id="contra"
                           required={true}
                           placeholder={"Ingresa tu contraseña"}
                           onChange={handleContra}
                    />
                </div>

                <button type="submit" className="btn btn-primary text-center px-3">Ingresar</button>
            </form>
            <div className={"align-self-center text-center mt-4"}>
                <p className={"text-dark m-1"}>¿No tienes una cuenta?</p>
                <a href="/registro" className={"btn btn-outline-primary"}>Regístrate aquí</a>
            </div>
        </div>
    );
}

export default FormularioLogin;