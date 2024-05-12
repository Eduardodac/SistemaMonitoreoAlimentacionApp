import { Outlet } from 'react-router-dom';
import { Image } from 'primereact/image';
import gato from "../../assets/gato.jpg"

export const UserConteiner = () => {
    return (
        <section className="w-full h-full flex justify-center align-middle bg-[url('/wallpaperLogin.avif')]">
            <section className="m-auto bg-white text-center flex flex-row rounded min-w-7/12">
                <article className="w-7/12 p-2 py-10 m-auto">
                    <div className="text-3xl text-paletaIpn-guinda"> Bienvenido a Mittens </div>
                    <div className="w-full flex justify-center">
                        <Image src={gato} alt={"gato"} width="400" />
                    </div>
                    <div> Sistema de monitoreo para alimentación de gatos </div>
                </article>
                <article className="border border-guinda"></article>
                <Outlet></Outlet>
            </section>

        </section>
    )
}
