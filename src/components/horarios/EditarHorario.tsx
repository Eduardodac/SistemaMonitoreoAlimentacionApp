import { useEffect, useState } from "react";
import { IHorarioDate } from "./Horario";
import { motion } from "framer-motion";

export const EditarHorario = ({ horarioId, hora }: IHorarioDate) => {
    const [horas, setHoras] = useState<string[]>(["0", "0"]);
    const [minutos, setMinutos] = useState<string[]>(["0", "0"]);

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
            <section className="flex flex-row w-full items-center justify-around text-lg mb-2">
                <motion.div
                    className="text-center p-1 rounded-md cursor-pointer"
                    onClick={console.log}
                    initial={false}
                    whileHover={{ scale: 1.05  }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="pi pi-angle-double-right text-[#FF4365] font-extra-bold"></span>
                </motion.div>


                <div className="flex flex-row items-center w-fit">
                    <article className=" bg-[#37515F] font-monse card-hour text-center  w-28 p-2">
                        <span className="font-monse text-fondo">{`${horas[0]}${horas[1]} : ${minutos[0]}${minutos[1]} hrs.`}</span>
                    </article>
                </div>

                <motion.div
                    className="text-center p-1 rounded-md cursor-pointer"
                    onClick={console.log}
                    initial={false}
                    whileHover={{ scale: 1.05  }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="pi pi-angle-double-left text-[#84A98C] font-extra-bold"></span>
                </motion.div>
            </section>
        </article>
    )
}
