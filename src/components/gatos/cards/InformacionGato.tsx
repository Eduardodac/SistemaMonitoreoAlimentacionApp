import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { ListaGatosType } from "../../../helpers/types";
import { DateTime } from "luxon";

type CardGatoProps = {
    datos: ListaGatosType | null
}

export const InformacionGato = ({ datos }: CardGatoProps) => {
    const [hover, setHover] = useState(false);
    const [collarInfo, setCollarInfo] = useState({
        fechaActivacion: "",
        numeroRegistro: "",
        estatusActivacion: ""
    });

    useEffect(()=>{
        let active = true;
        if(active){
            const Nregistro = datos?.collar?.numeroRegistro != null? datos?.collar?.numeroRegistro: "Sin asignar";
            const fechaISO = datos?.collar?.fechaActivacion != null? datos?.collar?.fechaActivacion.toString() : DateTime.now().toLocaleString();
            const FActivacion = DateTime.fromISO(fechaISO).toFormat('DD');
            setCollarInfo({
                fechaActivacion: datos?.collar?.fechaActivacion != null? FActivacion.toString(): "Sin Fecha",
                numeroRegistro: Nregistro,
                estatusActivacion: datos?.collar?.estatusActivacion? "Activo": "Inactivo"
            })
        }

        return () => {
            active = false;
        };
    },[datos])

    return (
        <article className="flex flex-col h-full justify-center relative" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <div className={`pl-10 my-auto ${hover ? '' : 'visible'}`}>
                <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Ficha Informativa</section>
                <div className="w-11/12">
                    <section className="grid grid-cols-2 text-base font-semibold text-fondo bg-fondoCards p-2 rounded-lg">
                        <div className="space-y-2 flex flex-col">
                            <span>Nombre: <span className="font-extrabold text-paletaIpn-guinda">{datos?.nombre}</span></span>
                            <span>Raza: <span className="font-extrabold text-paletaIpn-guinda">{datos?.raza}</span></span>
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <span>Sexo: <span className="font-extrabold text-paletaIpn-guinda">{datos?.sexo}</span></span>
                            <span>Edad: <span className="font-extrabold text-paletaIpn-guinda">{datos?.edad}</span></span>
                        </div>
                    </section>

                    <div className="flex justify-end">
                        <Button label="Editar" icon='pi pi-pencil' className={'mt-1 text-sm '} />
                    </div>
                </div>
            </div>
            <motion.div
                className="h-full bg-fondoCards absolute"
                initial={false}
                animate={{ width: hover ? '100%' : '0%' }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="pl-10 my-auto mt-4"
                    initial={false}
                    animate={{ opacity: hover ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Información de Collar</section>
                    <div className="w-11/12">
                        <section className="grid grid-cols-2 text-base font-semibold text-fondoCards bg-fondo p-2 rounded-lg">
                            <div className="space-y-2 flex flex-col">
                                <span>Registro: <span className="font-extrabold text-paletaIpn-guinda">{collarInfo.numeroRegistro}</span></span>
                                <span>Estatus: <span className="font-extrabold text-paletaIpn-guinda">{collarInfo.estatusActivacion}</span></span>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <span>F. Activacion: <span className="font-extrabold text-paletaIpn-guinda">{collarInfo.fechaActivacion}</span></span>

                            </div>
                        </section>
                        <div className="flex justify-end pb-5">
                            <Button label="Editar" icon='pi pi-pencil' className={`mt-1 text-sm ${hover ? "visible" : "hidden"}`} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </article>
    )
}
