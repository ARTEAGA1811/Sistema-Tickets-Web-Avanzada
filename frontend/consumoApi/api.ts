import {IUsuario, Rol} from "../interfaces";

const URL_API_USUARIO = 'http://localhost:3001/usuario';

export async function apiCrearUsuario(usuario: IUsuario) {
    const response = await fetch(URL_API_USUARIO, {
        method: "POST",
        //mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: usuario.nombre,
            correo: usuario.correo,
            contrasena: usuario.password,
            rol: usuario.rol
        })
    });
    return response;
}

export async function apiLoginUsuario(correo: string, pass: string) {
    const response = await fetch(URL_API_USUARIO, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo: correo,
            contrasena: pass
        })
    });
    return response;
}