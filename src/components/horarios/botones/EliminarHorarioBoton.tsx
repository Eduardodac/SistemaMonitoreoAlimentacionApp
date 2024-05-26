import { motion } from "framer-motion"
import { variantsEliminar } from "../../../helpers/variantsHorarios";

type EliminarBotonType = {
    hoverEliminar:boolean,
    switchHoverEliminar: ()=>void
}

export const EliminarHorarioBoton = ({hoverEliminar, switchHoverEliminar}: EliminarBotonType) => {
      
  return (
    <motion.nav
    initial={false}
    className="h-full absolute w-3/4 cursor-pointer left-3 flex justify-start items-center bg-[#FF4365] rounded-md"
    animate={hoverEliminar ? "open" : "closed"}
    variants={variantsEliminar}
>
    <motion.div
        className="ml-1 bg-fondo rounded-full flex justify-center"
        initial={false}
        animate={{ rotate: hoverEliminar ? 180 : 0 }}
        transition={{ duration: 0.5 }}
    >
        <motion.span
            className="pi pi-angle-double-right text-[#FF4365] p-1 font-extra-bold"
            initial={false}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={switchHoverEliminar}
        >
        </motion.span>
    </motion.div>
    <motion.div
        className="self-center w-full flex justify-center items-center space-x-3 text-fondo"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}>
        <span className="pi pi-trash"></span>
        <span>Eliminar</span>
    </motion.div>
</motion.nav>
  )
}
