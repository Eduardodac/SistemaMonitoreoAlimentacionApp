import { UsuariosApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";


const openapiConfig = new Configuration();


// openapiConfig.baseOptions = {
//     headers: { 
//         Authorization: 'Bearer ' + tokenValue,
//      },
// };
openapiConfig.basePath = "http://20.75.148.109"


export const usuariosApi = new UsuariosApi(openapiConfig);


