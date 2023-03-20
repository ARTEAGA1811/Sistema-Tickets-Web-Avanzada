import {Estado, IUsuario, Prioridad, Rol} from "../interfaces";

const URL_API_USUARIO = 'http://localhost:3001/usuario/';
const URL_API_TICKET = 'http://localhost:3001/ticket/';

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
    const response = await fetch(URL_API_USUARIO + "login", {
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


export async function apiObtenerUsuarioPorId(id: number, accessToken: string) {
    const response = await fetch(URL_API_USUARIO + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
    });
    return response;

}


export async function apiCrearTicket(titulo: string, descripcion: string, accessToken: string) {
    const response = await fetch(URL_API_TICKET, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            prioridad: Prioridad.SIN_PRIORIDAD,
        })
    });
    return response;
}


export async function apiObtenerTodosTickets(accessToken: string) {
    const response = fetch(URL_API_TICKET, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    return response;
}


export async function apiObtenerTodosTickets_Soporte(accessToken: string) {
    const response = fetch(URL_API_TICKET + "soporte", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    });
    return response;
}


export async function apiActualizarTicket(
    respuesta: string,
    prioridad: Prioridad,
    estado: Estado,
    idTicket: number,
    accessToken: string
) {
    const response = await fetch(URL_API_TICKET + "soporte/" + idTicket, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify({
            respuesta: respuesta,
            prioridad: prioridad,
            estado: estado
        })
    });
    return response;
}