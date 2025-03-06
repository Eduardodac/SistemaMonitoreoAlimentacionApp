import { Image } from "primereact/image"
import cat from "../../assets/gatito.png";
import { CardHome } from "../../components/home/CardHome";
import { motion } from "framer-motion";

export const HomePage = () => {

    return (

        <motion.div
            className='max-w-200 m-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        >

            <div className="my-3 text-xl text-center text-paletaIpn-guinda">Bienvenido al Sistema de Monitoreo de Alimentación para Gatos</div>
            <article className="flex flex-row justify-around items-start text-base">
                <motion.div
                    className='w-1/4 mt-40'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{ delay: 1, duration: 0.75 }}
                >
                    <CardHome
                        text="Crea perfiles en 'Gatos' y asigna sus collares. Revisa su actividad en 'Dashboard"
                        numero="2"
                    />
                </motion.div>

                <motion.div
                    className='w-1/2'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{ duration: 0.75 }}
                >
                    <CardHome
                        text="Configura tus datos de usuario y dosificador desde 'Cuenta'"
                        numero="1" />
                    <div className="w-full flex justify-center">
                        <Image src={cat} width="400" />
                    </div>
                </motion.div>

                <motion.div
                    className='w-1/4 mt-40'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{ delay: 1, duration: 0.75 }}
                >
                    <CardHome
                        text="Crea 'horarios' y mantente al tanto desde 'avisos'"
                        numero="3"
                    />
                </motion.div>
            </article>



        </motion.div>

    )
}
