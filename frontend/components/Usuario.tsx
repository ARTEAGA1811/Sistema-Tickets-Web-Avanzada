import imgUsuario from '../assets/perfilUsuario.png';
import imgCerrarSesion from '../assets/cerrar-sesion.png';
import {IUsuario} from "../interfaces";
import st from '../styles/principal.module.css'

export default function Usuario() {
    const miUsuario: IUsuario = {
        id: 1,
        nombre: 'David',
        correo: 'bryan.arteaga@epn.edu.ec',
        rol: 'usuario',
    }
    return (
        <div className={st.usuario_container}>
            <div className={"d-flex  align-items-center"}>
                <img src={imgUsuario.src} alt="imagenUsuario" className={st.imgUsuario}/>
                <div className={"d-flex flex-column  justify-content-center"}>
                    <h5 className={"mb-0"}>{miUsuario.nombre}</h5>
                    <p>{miUsuario.correo}</p>
                </div>
            </div>
            <button className="btn btn-outline-light"><img  className={st.imgCerrar} src={imgCerrarSesion.src}
                                                                          alt="imagen cerrar sesión"/></button>


        </div>
    );
}