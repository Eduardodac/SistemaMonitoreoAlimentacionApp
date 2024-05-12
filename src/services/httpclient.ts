import { CuentasApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";

const createApiConfig =((token:string | null)=>{
    const openApiConfig = new Configuration();
    openApiConfig.baseOptions = {
        headers: { 
            Authorization: 'Bearer ' + token,
        },
    };
    openApiConfig.basePath = "http://localhost:7090"
    return openApiConfig
})

export const crearCuentasApi = ((token:string | null)=>{
    return new CuentasApi(createApiConfig(token));
})


