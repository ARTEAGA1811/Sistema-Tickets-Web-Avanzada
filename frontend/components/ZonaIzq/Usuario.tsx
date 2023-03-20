import imgUsuario from '../../assets/perfilUsuario.png';
import imgCerrarSesion from '../../assets/cerrar-sesion.png';
import {Rol} from "../../interfaces";
import st from '../../styles/principal.module.css'
import {useContext} from "react";
import {UsuarioContext} from "../UsuarioContext";

export default function Usuario() {
    const {usuario} = useContext(UsuarioContext);
    return (
        <div className={st.usuario_container}>
            <div className={"d-flex  align-items-center"}>
                <img src={imgUsuario.src} alt="imagenUsuario" className={st.imgUsuario}/>
                <div className={"d-flex flex-column  justify-content-center"}>
                    <h5 className={"mb-0"}>{usuario.nombre}</h5>
                    <p className={"m-0"}>{usuario.correo}</p>
                    <p className={"m-0 fw-semibold text-secondary align-self-center"}>{usuario.rol === Rol.SOPORTE ? "SOPORTE" : "USUARIO"}</p>
                </div>
            </div>
            <a href={"/"} className="btn btn-outline-light d-flex align-items-center"><img className={st.imgCerrar} src={imgCerrarSesion.src}
                                                           alt="imagen cerrar sesión"/></a>


        </div>
    );
}