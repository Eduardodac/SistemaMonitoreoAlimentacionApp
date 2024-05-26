import { useEffect, useState } from "react";
import { IHorarioDate } from "./Horario";
import { motion } from "framer-motion";
import { variantsEditar, variantsEliminar } from "../../helpers/variantsHorarios";
import { EliminarHorario } from "./botones/EliminarHorario";
import { EditarHorarioBoton } from "./botones/EditarHorarioBoton";

export const EditarHorario = ({ horarioId, hora }: IHorarioDate) => {
    const [horas, setHoras] = useState<string[]>(["0", "0"]);
    const [minutos, setMinutos] = useState<string[]>(["0", "0"]);
    const [hoverEliminar, setHoverEliminar] = useState(false);
    const [hoverEditar, setHoverEditar] = useState(false);

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
    return (
        <article className="">
            {/* <div className="text-lg font-monse">{`${horas[0]}${horas[1]}:${minutos[0]}${minutos[1]}`}</div> */}
            <section className="flex flex-row w-full items-center justify-center text-lg mb-2 relative">
                <EliminarHorario/>
                <div className="flex flex-row items-center w-fit">
                    <article className=" bg-[#37515F] font-monse  text-center  w-28 p-2">
                        <span className="font-monse text-fondo">{`${horas[0]}${horas[1]} : ${minutos[0]}${minutos[1]} hrs.`}</span>
                    </article>
                </div>

                <EditarHorarioBoton/>
            </section>
        </article>
    )
}
