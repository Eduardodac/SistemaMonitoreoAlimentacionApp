import { Image } from "primereact/image"
import cat from "../assets/gatito.png";

export const HomePage = () => {

    return (
        <>
            <div className="my-3 text-xl text-paletaIpn-guinda">Bienvenido al Sistema de Monitoreo de Alimentación para Gatos</div>
            <article className="text-base space-y-2">
                <div>Puedes configurar tus datos de usuario y dosificador desde el menú 'Cuenta'.</div>
                <div>Crea perfiles de gato desde el menú 'Gatos' y conectar collares. También puedes revisar su actividad en 'Dashboard'</div>
                <div>Crea 'horarios' y mantente al tanto desde 'avisos' </div>
            </article>
            <div className="w-full flex justify-center">
                <Image src={cat} width="500" />
            </div>
        </>
    )
}
