import { motion } from "framer-motion"

export const Avisos = () => {
  return (
    <motion.div
            className='flex justify-around items-center max-w-200 m-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        >
        </motion.div>
  )
}
