export type LoginType = 
{
    UserName : string,
    Password : string
}

//gatos
export type ListaGatosType={
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
    fechaSalida: Date,
    FechaActivacion?: Date | null,
    NumeroRegistro: string,
    EstatusActivacion: boolean
}