import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ListaGatosType } from "../../../helpers/types";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

type CardGatoProps = {
    datos: ListaGatosType | null
}

const variants = {
    open: (height = 200) => ({
        clipPath: `circle(${height * 2 + 200}px at 100px 100px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: "circle(0px at -100px 100px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 75,
            damping: 40
        }
    }
}

export const InformacionGato = ({ datos }: CardGatoProps) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const [collarInfo, setCollarInfo] = useState({
        fechaActivacion: "",
        numeroRegistro: "",
        estatusActivacion: ""
    });

    useEffect(() => {
        let active = true;
        if (active) {
            const Nregistro = datos?.collar?.numeroRegistro != null ? datos?.collar?.numeroRegistro : "Sin asignar";
            const fechaISO = datos?.collar?.fechaActivacion != null ? datos?.collar?.fechaActivacion.toString() : DateTime.now().toLocaleString();
            const FActivacion = DateTime.fromISO(fechaISO).toFormat('DD');
            setCollarInfo({
                fechaActivacion: datos?.collar?.fechaActivacion != null ? FActivacion.toString() : "Sin Fecha",
                numeroRegistro: Nregistro,
                estatusActivacion: datos?.collar?.estatusActivacion ? "Activo" : "Inactivo"
            })
        }

        return () => {
            active = false;
        };
    }, [datos])

    const redireccionar = (id: string | null | undefined) => {
        if (id != null) {
            navigate("/gatos/" + id);
        }
    }

    return (
        <article className="flex flex-col h-full justify-center relative" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <div className={`pl-10 my-auto ${hover ? '' : 'visible'}`}>
                <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Ficha Informativa</section>
                <div className="w-11/12">
                    <section className="grid grid-cols-2 text-base font-semibold text-fondo bg-paletaGatos-Caribbean p-2 rounded-lg">
                        <div className="space-y-2 flex flex-col">
                            <span>Nombre: <span className="font-extrabold text-paletaGatos-dutchWhite">{datos?.nombre}</span></span>
                            <span>Raza: <span className="font-extrabold text-paletaGatos-dutchWhite">{datos?.raza}</span></span>
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <span>Sexo: <span className="font-extrabold text-paletaGatos-dutchWhite">{datos?.sexo}</span></span>
                            <span>Edad: <span className="font-extrabold text-paletaGatos-dutchWhite">{datos?.edad}</span></span>
                        </div>
                    </section>

                    <div className="flex justify-end mt-1.5">
                        <motion.div
                            className="rounded-lg h-12 bg-paletaGatos-Caribbean w-fit p-3 flex flex-row items-center justify-end cursor-pointer"
                            onClick={() => { redireccionar(datos?.gatoId) }}
                            initial={false}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="pi pi-pencil text-fondo"></span>

                            <div className="ml-3 text-sm font-extrabold text-fondo ">Editar</div>
                        </motion.div>
                    </div>

                </div>
            </div>
            <motion.div
                className="h-full bg-paletaGatos-Caribbean absolute w-full"
                animate={hover ? "open" : "closed"}
                variants={variants}
            >
                <div className="pl-10 my-auto mt-5">
                    <section className="text-xl font-bold text-fondo mb-3">Información de Collar</section>
                    <div className="w-11/12">
                        <section className="grid grid-cols-2 text-base font-semibold text-fondoCards bg-fondo p-2 rounded-lg">
                            <div className="space-y-2 flex flex-col">
                                <span>Registro: <span className="font-extrabold text-paletaGatos-Caribbean">{collarInfo.numeroRegistro}</span></span>
                                <span>Estatus: <span className="font-extrabold text-paletaGatos-Caribbean">{collarInfo.estatusActivacion}</span></span>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <span>F. Activacion: <span className="font-extrabold text-paletaGatos-Caribbean">{collarInfo.fechaActivacion}</span></span>

                            </div>
                        </section>
                        <div className="flex justify-end mt-1.5">
                        <motion.div
                            className="rounded-lg h-12 bg-fondo w-fit p-3 flex flex-row items-center justify-end cursor-pointer"
                            onClick={() => { redireccionar(datos?.gatoId) }}
                            initial={false}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="pi pi-pencil text-paletaGatos-Caribbean"></span>

                            <div className="ml-3 text-sm font-extrabold text-paletaGatos-Caribbean ">Editar</div>
                        </motion.div>
                    </div>

                    </div>
                </div>
            </motion.div>
        </article>
    )
}
