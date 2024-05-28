import { DateTime } from "luxon"

export type LoginType = 
{
    UserName : string,
    Password : string
}

//gatos
export type ListaGatosType={
    gatoId: string,
    nombre: string,
    raza?: string | null,
    sexo?: string | null,
    edad: number,
    imagenGato?: string | null,
    collar?: null | CollarType
}

//Collares
export type CollarType = {
    collarId: string,
    fechaSalida: DateTime,
    fechaActivacion?: DateTime | null,
    numeroRegistro: string,
    estatusActivacion: boolean
}

//dosificadores 
export type CuentaType={
    apellidoMaterno?: string | null,
    apellidoPaterno?: string | null,
    dosificadorId: string | null,
    email: string,
    nombre: string,
    imagenUsuario?: string | null,
    dosificador?: null | DosificadorType
}

export type DosificadorType = {
    dosificadorId: string,
    fechaSalida: DateTime,
    fechaActivacion?: DateTime | null,
    numeroRegistro: string,
    estatusActivacion: boolean
}