import { useEffect, useState } from "react"
import { usuariosApi } from "../../services/httpclient"
import { DataTable } from 'primereact/datatable';
import { InputText } from "primereact/inputtext"
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'
import {v4 as uuidv4} from 'uuid';

export const Perfil = () => {
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [usuariosCorreo, setusuariosCorreo] = useState("");
    const [cambio, setCambio] = useState(false)

    const [products, setProducts] = useState([{
        usuarioId: "",
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        usuariosCorreo: "",
        password: null,
        imagenUsuario: null,
        dosificadorId: null
    }])

    useEffect(() => {
        console.log("prueba GET de API")
        usuariosApi.apiUsuariosGet().then((response: any) => {
            console.log(response)
            setProducts(response.data)
        })
    }, [cambio])

    const envioUsuario = (()=>{
        const usuario ={
            usuarioId: uuidv4(),
            nombre: nombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            usuariosCorreo: usuariosCorreo,
            password: null,
            imagenUsuario: null,
            dosificadorId: null
        }
        usuariosApi.apiUsuariosPost(usuario).then((response:any)=>{
            console.log("prueba POST de API")
            console.log(response)
            setCambio(!cambio)
        })
    });

    return (
        <div>
            <p className="font-bold">Ingrese nuevo usuario</p>
            <div className="flex flex-col my-5">
                <div className="flex justify-around mb-4">
                    <InputText value={nombre} onChange={(e: any) => setNombre(e.target.value)} placeholder="Nombre" />
                    <InputText value={apellidoPaterno} onChange={(e: any) => setApellidoPaterno(e.target.value)} placeholder="Apellido Paterno" />
                </div>
                <div className="flex justify-around">
                    <InputText value={apellidoMaterno} onChange={(e: any) => setApellidoMaterno(e.target.value)} placeholder="Apellido Materno" />
                    <InputText value={usuariosCorreo} onChange={(e: any) => setusuariosCorreo(e.target.value)} placeholder="Correo" />
                </div>
                <Button className = {"mt-5 ml-24 w-1/4"} label="Crear Usuario" onClick={envioUsuario}/>
            </div>



            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="apellidoPaterno" header="Apellido Paterno"></Column>
                <Column field="apellidoMaterno" header="Apellido Materno"></Column>
                <Column field="usuariosCorreo" header="Email"></Column>
            </DataTable>
        </div>
    )
}
