import { motion } from "framer-motion";
import plus from "../../../assets/plus.svg";

export const CrearNuevoGato = () => {
    return (

        <article className="mt-16 w-full ">
            <motion.div
                className="rounded-full h-14 bg-fondoCards w-56 p-3 m-auto flex flex-row items-center card-cats"
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <div className="bg-fondo rounded-full text-fondoCards w-fit p-1">
                    <img src={plus} alt="plus" width={30}></img>
                </div>
                <div className="ml-3 text-xl font-extrabold text-fondo">Nuevo Perfil</div>
            </motion.div>
        </article>
    )
}
