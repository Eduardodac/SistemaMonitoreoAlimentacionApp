import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { useState } from "react";

export const InformacionGato = () => {
    const [hover, setHover] = useState(false);
    return (
        <article className="flex flex-col h-full justify-center relative" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <div className={`pl-10 my-auto ${hover ? '' : 'visible'}`}>
                <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Información de {"gato"}</section>
                <section className="flex flex-row text-base">
                    <div className="w-2/5 space-y-2 text-lg flex flex-col">
                        <span className="bg-fondoCards rounded-md p-1 text-fondo w-fit">Raza:</span>
                        <span className="bg-fondoCards rounded-md p-1 text-fondo w-fit">Sexo:</span>
                    </div>
                    <div className="w-2/5 space-y-2 text-lg flex flex-col">
                        <span className="bg-fondoCards rounded-md p-1 text-fondo w-fit">Edad:</span>
                        <span className="bg-fondoCards rounded-md p-1 text-fondo w-fit">Registro Collar:</span>
                    </div>
                </section>

                <div className="flex justify-end">
                    <Button type="submit" label="Editar" className={'mt-2 mr-5 text-sm '} outlined />
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
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <section className="text-xl font-bold text-paletaIpn-guinda mb-3">Información de {"gato"}</section>
                    <section className="flex flex-row text-base">
                        <div className="w-2/5 space-y-2 text-lg flex flex-col">
                            <span className="bg-fondo rounded-md p-1 text-fondoCards w-fit">Raza:</span>
                            <span className="bg-fondo rounded-md p-1 text-fondoCards w-fit">Sexo:</span>
                        </div>
                        <div className="w-2/5 space-y-2 text-lg flex flex-col">
                            <span className="bg-fondo rounded-md p-1 text-fondoCards w-fit">Edad:</span>
                            <span className="bg-fondo rounded-md p-1 text-fondoCards w-fit">Registro Collar:</span>
                        </div>
                    </section>

                    <div className="flex justify-end pb-5">
                        <Button type="submit" label="Editar" className={'mt-2 mr-5 text-sm '} />
                    </div>

                </motion.div>
            </motion.div>
        </article>
    )
}
