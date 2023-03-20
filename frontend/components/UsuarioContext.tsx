import {IUsuario} from "../interfaces";
import {createContext, Dispatch, SetStateAction} from "react";

export interface IUsuarioContext {
    usuario: IUsuario;
    setUsuario: Dispatch<SetStateAction<IUsuario>>
}

export const UsuarioContext = createContext<IUsuarioContext>({} as IUsuarioContext);