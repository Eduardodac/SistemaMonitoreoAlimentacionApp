import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { crearGatosApi } from "../../services/httpclient";
import { motion } from "framer-motion";

export const EditarGatos = () => {
    const { jwt } = useAuthStore();
    const GatosAPI = crearGatosApi(jwt);
    const { gatoId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let active = true;
        if (active && gatoId != null) {
            GatosAPI.apiGatosGatoIdGet(gatoId).then((response: any) => {
                console.log(response)
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
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        ></motion.div>
    )
}
