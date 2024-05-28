import { CuentasApi, DiasdelaSemanaApi, DosificadoresApi, GatosApi, HorariosApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";

const createApiConfig =((token:string | null)=>{
    const openApiConfig = new Configuration();
    openApiConfig.baseOptions = {
        headers: { 
            Authorization: 'Bearer ' + token,
        },
    };
    openApiConfig.basePath = "http://localhost:7090"
    //openApiConfig.basePath = "https://sistemamonitoreoalimentacionapi.azurewebsites.net"
    return openApiConfig
})

export const crearCuentasApi = ((token:string | null)=>{
    return new CuentasApi(createApiConfig(token));
})

export const crearGatosApi = ((token:string | null)=>{
    return new GatosApi(createApiConfig(token));
})

export const crearHorariosApi = ((token:string | null)=>{
    return new HorariosApi(createApiConfig(token));
})

export const crearDiadelaSemanaApi = ((token:string | null)=>{
    return new DiasdelaSemanaApi(createApiConfig(token));
})

export const crearDosificadorApi = ((token:string | null)=>{
    return new DosificadoresApi(createApiConfig(token));
})



