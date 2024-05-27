import { useEffect, useState } from "react";
import { EliminarHorarioBoton } from "./botones/EliminarHorarioBoton";
import { EditarHorarioBoton } from "./botones/EditarHorarioBoton";
import { motion } from "framer-motion";
import { IHorarioDate } from "../../store/horarioStore";

export const EditarHorario = ({ horarioId, hora }: IHorarioDate) => {
    const [horas, setHoras] = useState<string[]>(["0", "0"]);
    const [minutos, setMinutos] = useState<string[]>(["0", "0"]);

    const [hoverEditar, setHoverEditar] = useState<boolean>(false);
    const [hoverEliminar, setHoverEliminar] = useState<boolean>(false);
    const [eliminado, setEliminado] = useState<boolean>(false);

    useEffect(() => {
        let hor = hora.getHours();
        let min = hora.getMinutes();
        if (min < 10) {
            setMinutos(["0", min.toString()])
        } else {
            setMinutos([min.toString()[0], min.toString()[1]])
        }
        if (hor
            < 10) {
            setHoras(["0", hor.toString()])
        } else {
            setHoras([hor.toString()[0], hor.toString()[1]])
        }

    }, [hora])

    const switchHoverEditar = () => {
        setHoverEditar(!hoverEditar);
        setHoverEliminar(false);
    };

    const switchHoverEliminar = () => {
        setHoverEditar(false);
        setHoverEliminar(!hoverEliminar);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ delay: 0.5, duration: 0.75 }}
        >
            <motion.div
                initial={false}
                animate={eliminado ? { y: 50, opacity: 0 }: { y: 0, opacity: 1}}
                transition={{ delay: 0, duration: 0.75 }}
            >
                {/* <div className="text-lg font-monse">{`${horas[0]}${horas[1]}:${minutos[0]}${minutos[1]}`}</div> */}
                <section className="flex flex-row w-full items-center justify-center text-lg mb-2 relative">
                    <EliminarHorarioBoton
                        horarioId={horarioId}
                        hoverEliminar={hoverEliminar}
                        switchHoverEliminar={switchHoverEliminar} 
                        setEliminado = {setEliminado}/>
                    <div className="flex flex-row items-center w-fit">
                        <article className=" bg-[#37515F] font-monse  text-center  w-32 p-2">
                            <span className="font-monse text-fondo">{`${horas[0]}${horas[1]} : ${minutos[0]}${minutos[1]} hrs.`}</span>
                        </article>
                    </div>
                    <EditarHorarioBoton hoverEditar={hoverEditar} switchHoverEditar={switchHoverEditar} />
                </section>
            </motion.div>
        </motion.div>
    )
}
