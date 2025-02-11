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
    const [horaMostrada, setHoraMostrada] = useState<Date>(new Date());

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

        setHoraMostrada(hora);
    }, [hora])

    const switchHoverEditar = () => {
        setHoverEditar(!hoverEditar);
        setHoverEliminar(false);
    };

    const switchHoverEliminar = () => {
        setHoverEditar(false);
        setHoverEliminar(!hoverEliminar);
    };

    const editarHoraMinuto = (horaEdit: string) =>{
        var horaDiferente = new Date(horaEdit);
        let hor = horaDiferente.getHours();
        let min = horaDiferente.getMinutes();
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
        setHoraMostrada(horaDiferente);
    }

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
                animate={eliminado ? { y: 50, opacity: 0, display:"none" }: { y: 0, opacity: 1, display:"block"}}
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
                    <EditarHorarioBoton 
                        horarioId={horarioId}
                        horaActual = {horaMostrada}
                        hoverEditar={hoverEditar} 
                        switchHoverEditar={switchHoverEditar}
                        editarHoraMinuto = {editarHoraMinuto} />
                </section>
            </motion.div>
        </motion.div>
    )
}
