import { UsuariosApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";


const openapiConfig = new Configuration();


// openapiConfig.baseOptions = {
//     headers: { 
//         Authorization: 'Bearer ' + tokenValue,
//      },
// };
openapiConfig.basePath = "https://localhost:7090"


export const usuariosApi = new UsuariosApi(openapiConfig);


