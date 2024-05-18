import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useState } from "react";

export const InformacionGato = () => {
    const [hover, setHover] = useState(false);
    return (
        <article className="flex flex-col h-full justify-center relative" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <div className={`pl-10 my-auto ${hover ? '' : 'visible'}`}>
                <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Ficha Informativa</section>
                <section className="grid grid-cols-2 text-base text-fondo bg-fondoCards w-3/4 p-2 rounded-lg">
                    <div className="space-y-2 text-lg flex flex-col">
                        <span>Nombre:</span>
                        <span>Raza:</span>
                    </div>
                    <div className="space-y-2 text-lg flex flex-col">
                        <span>Sexo:</span>
                        <span>Edad:</span>
                    </div>
                </section>

                <div className="flex justify-end">
                    <Button type="submit" label="Editar" className={'mt-1 mr-5 text-sm '} outlined />
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
                    <section className="grid grid-cols-2 text-base text-fondoCards bg-fondo w-3/4 p-2 rounded-lg">
                        <div className="space-y-2 text-lg flex flex-col">
                            <span>Registro:</span>
                            <span>Estatus:</span>
                        </div>
                        <div className="space-y-2 text-lg flex flex-col">
                            <span>F. Activacion:</span>
                            
                        </div>
                    </section>
                    <div className="flex justify-end pb-5">
                        <Button type="submit" label="Editar" className={`mt-1 mr-5 text-sm ${hover ? "visible" : "hidden"}`} />
                    </div>

                </motion.div>
            </motion.div>
        </article>
    )
}
