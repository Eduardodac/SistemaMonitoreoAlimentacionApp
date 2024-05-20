import { useEffect } from 'react';
import { ClavesForm } from '../../components/cuenta/ClavesForm';
import { ImagenCuenta } from '../../components/cuenta/ImagenCuenta';
import { InformacionForm } from '../../components/cuenta/InformacionForm';
import { useAuthStore } from '../../store/authStore';
import { crearCuentasApi } from '../../services/httpclient';
import useUserStore, { IUserData } from '../../store/cuentaStore';
import { motion } from 'framer-motion';

export const Perfil = () => {
    const { jwt } = useAuthStore();
    const { setUserData } = useUserStore();
    const CuentasApi = crearCuentasApi(jwt);

    useEffect(() => {
        let active = true;
        if (active) {
            CuentasApi.apiCuentasUsuarioGet().then((response) => {
                const respuesta = response.data;
                const data: IUserData = {
                    imagenCuenta: {
                        imagenUsuario: respuesta.imagenUsuario ? respuesta.imagenUsuario : ""
                    },
                    clavesForm: {
                        userName: respuesta.userName ? respuesta.userName : "",
                        email: respuesta.email ? respuesta.email : ""
                    },
                    informacionForm: {
                        apellidoMaterno: respuesta.apellidoMaterno ? respuesta.apellidoMaterno : "",
                        apellidoPaterno: respuesta.apellidoPaterno ? respuesta.apellidoPaterno : "",
                        nombre: respuesta.nombre ? respuesta.nombre : "",
                    }
                }
                setUserData(data)
            }).catch(() => {
                console.log("perfil, error en llamada de datos")
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
            <ImagenCuenta />
            <div className='flex flex-col h-fit'>
                <ClavesForm />
                <InformacionForm />
            </div>
        </motion.div>
    )
}
