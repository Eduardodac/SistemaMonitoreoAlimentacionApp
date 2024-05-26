import { motion } from "framer-motion"
import { variantsEditar } from "../../../helpers/variantsHorarios";

type EditarBotonType = {
    hoverEditar:boolean,
    switchHoverEditar: ()=>void
}

export const EditarHorarioBoton = ({hoverEditar, switchHoverEditar}:EditarBotonType) => {

    return (

        <motion.nav
            initial={false}
            className="h-full absolute w-3/4 cursor-pointer right-3 flex justify-end items-center bg-[#84A98C] rounded-md"
            animate={hoverEditar ? "open" : "closed"}
            variants={variantsEditar}
        >
            <motion.div
                className="self-center w-full flex justify-center items-center space-x-3 text-fondo mr-4"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}>
                <span className="pi pi-pencil"></span>
                <span>Editar</span>
            </motion.div>
            <motion.div
                className="mr-1 bg-fondo rounded-full flex justify-center"
                initial={false}
                animate={{ rotate: hoverEditar ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className="pi pi-angle-double-left text-[#84A98C] p-1 font-extra-bold"
                    initial={false}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={switchHoverEditar}
                >
                </motion.span>
            </motion.div>
            
        </motion.nav>
    )
}
