import {number} from "prop-types";

export default function presentarFecha(fecha: Date) {
    if (fecha === null) return "";
    //const meses = ["", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dia = fecha.getDate() < 10 ? `0${fecha.getDate()}` : fecha.getDate();
    const mes = fecha.getMonth() + 1 < 10 ? `0${fecha.getMonth() + 1}` : fecha.getMonth() + 1;
    const anio = fecha.getFullYear() < 10 ? `0${fecha.getFullYear()}` : fecha.getFullYear();
    //return `${dia}-${meses[mes]}-${anio}`;
    return `${dia}-${mes}-${anio}`;
}