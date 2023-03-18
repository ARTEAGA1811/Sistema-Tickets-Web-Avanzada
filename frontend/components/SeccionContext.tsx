
import React from "react";
import {EnumSeccionActual} from "../interfaces/enums";

export interface SeccionContext {
    seccionActual: EnumSeccionActual;
    setSeccionActual:  React.Dispatch<React.SetStateAction<EnumSeccionActual>>
}

export const SeccionContext = React.createContext<SeccionContext>({} as SeccionContext);