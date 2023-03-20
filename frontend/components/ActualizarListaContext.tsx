import {createContext, Dispatch, SetStateAction} from "react";

export interface IActualizarListaContext {
    actualizarLista: boolean;
    setActualizarLista:  Dispatch<SetStateAction<boolean>>
}

export const ActualizarListaContext = createContext<IActualizarListaContext>({} as IActualizarListaContext);