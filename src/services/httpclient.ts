import { CuentasApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";

const createApiConfig =((token:string)=>{
    const openApiConfig = new Configuration();
    openApiConfig.baseOptions = {
        headers: { 
            Authorization: 'Bearer ' + token,
        },
    };
    openApiConfig.basePath = "https://localhost:7090"
    return openApiConfig
})

export const crearCuentasApi = ((token:string)=>{
    return new CuentasApi(createApiConfig(token));
})


