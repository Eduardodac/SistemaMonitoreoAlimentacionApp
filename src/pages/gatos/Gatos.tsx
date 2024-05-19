import { useEffect, useState } from "react"
import { CardGato } from "../../components/gatos/cards/CardGato"
import { CrearNuevoGato } from "../../components/gatos/perfil/CrearNuevoGato"
import { useAuthStore } from "../../store/authStore";
import { crearGatosApi } from "../../services/httpclient";
import { ListaGatosType } from "../../helpers/types";

export const Gatos = () => {

    const { jwt } = useAuthStore();
    const GatosAPI = crearGatosApi(jwt);

    const [listaGatos, setListaGatos] = useState<ListaGatosType[] | null>(null);

    useEffect(() => {
        let active = true;
        if (active) {
            GatosAPI.apiGatosGet().then((response) => {
                const lista:any = response.data;
                if(lista.length == 0){
                    setListaGatos(null);
                }else{
                    setListaGatos(lista);
                }
            }).catch(() => {
                console.log("gatos, error en llamada de datos")
            })
        }
        return () => {
            active = false;
        };
    }, [])

    useEffect(()=>{
        console.log(listaGatos)
    },[listaGatos])

    
  return (
    <article>
        <section className="text-2xl font-bold text-paletaIpn-guinda self-start mb-5">Perfil de tus mascotas</section>
        {listaGatos != null ? listaGatos.map((gato, index)=>{
            return (<article className="my-10" key={"gatcard"+ index}>
                <CardGato datos={gato}/>
            </article>)
        })
        :<div className="text-md text-paletaIpn-guinda font-bold text-center mt-16">¡No has regitrado ningún gato todavía, adelante!</div>}
        
        <CrearNuevoGato/>
    </article>
  )
}
