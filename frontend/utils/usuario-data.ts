import {IUsuario, Rol} from "../interfaces";

export const usuarioFakeData: IUsuario = {
    id: 1,
    nombre: "David Arteaga",
    correo: "bryan.arteaga@epn.edu.ec",
    password: "123456",
    rol: Rol.USUARIO
}