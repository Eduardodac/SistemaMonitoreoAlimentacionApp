import { motion } from "framer-motion"
import best from "../../assets/best-day.svg"
import worst from "../../assets/worstday.svg"
import food from "../../assets/animal-food.svg"
import time from "../../assets/time.svg"
import { SegundoCuadroInformativo } from "../../components/dashboard/SegundoCuadroInformativo"
import { GraficaLine } from "../../components/dashboard/GraficaLine"
import { GraficaPie } from "../../components/dashboard/GraficaPie"


export const Dashboard = () => {
  return (
    <motion.div
            className=''
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        >
            <div className="flex flex-row justify-around">
                <SegundoCuadroInformativo text="Total alimento consumido en gramos" icon={food} dia="4724"/>
                <SegundoCuadroInformativo text="Tiempo de consumo en minutos" icon={time} dia="100"/>
                <SegundoCuadroInformativo text="Día de más consumo" icon={best} dia="Miércoles"/>
                <SegundoCuadroInformativo text="Día de menos consumo" icon={worst} dia="Martes"/>
            </div>
            <div className="flex flex-row">
                <div className="w-7/10"><GraficaLine/></div>
                <div className="w-3/10 m-auto"><GraficaPie/></div>
            </div>
        </motion.div>
  )
}
