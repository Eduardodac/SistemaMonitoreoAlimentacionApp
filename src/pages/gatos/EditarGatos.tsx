import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { crearGatosApi } from "../../services/httpclient";
import { motion } from "framer-motion";
import { ImagenGato } from '../../components/gatos/editar/ImagenGato';
import { InfoGatoForm } from "../../components/gatos/editar/InfoGatoForm";
import { ConectarCollares } from "../../components/gatos/editar/ConectarCollares";
import useGatoStore, { IGatoData } from "../../store/gatoStore";
import { TabView, TabPanel } from 'primereact/tabview';

export const EditarGatos = () => {
    const { jwt } = useAuthStore();
    const GatosAPI = crearGatosApi(jwt);
    const { setGatoData } = useGatoStore();
    const { gatoId } = useParams();

    useEffect(() => {
        let active = true;
        if (active && gatoId != null) {
            GatosAPI.apiGatosGatoIdGet(gatoId).then((response) => {
                const respuesta = response.data;
                const data: IGatoData = {
                    gato: {
                        nombre: respuesta.nombre ? respuesta.nombre : "",
                        raza: respuesta.raza ? respuesta.raza : "",
                        sexo: respuesta.sexo ? respuesta.sexo : "",
                        edad: respuesta.edad ? respuesta.edad : 0,
                    },
                    imagen: {
                        imagenGato: respuesta.imagenGato ? respuesta.imagenGato : "",
                    },
                    collar: {
                        collarId: respuesta.collarId ? respuesta.collarId : "",
                        fechaSalida: respuesta.collar?.fechaSalida ? respuesta.collar?.fechaSalida : "",
                        fechaActivacion: respuesta.collar?.fechaActivacion ? respuesta.collar?.fechaActivacion : "",
                        numeroRegistro: respuesta.collar?.numeroRegistro ? respuesta.collar?.numeroRegistro : "",
                        estatusActivacion: respuesta.collar?.estatusActivacion ? respuesta.collar?.estatusActivacion : false,
                    },
                }
                setGatoData(data)
            }).catch(() => {
                console.log("gatos, error en llamada de datos gatoId")
            })
        }
        return () => {
            active = false;
        };
    }, [])

    return (
        <motion.div
            className='flex justify-around items-center max-w-200 m-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        >
            <ImagenGato />
                <TabView className="m-auto bg-fondo" >
                    <TabPanel header="Gato" className="bg-fondo">
                        <InfoGatoForm />
                    </TabPanel>
                    <TabPanel header="Collar" className="bg-fondo">
                        <ConectarCollares />
                    </TabPanel>
                </TabView>
        </motion.div>
    )
}
