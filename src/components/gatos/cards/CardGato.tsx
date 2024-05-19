import { useEffect, useState } from "react";
import avatar from "../../../assets/cat-avatar.webp";
import { ListaGatosType } from "../../../helpers/types";
import { InformacionGato } from "./InformacionGato"

type CardGatoProps = {
    datos: ListaGatosType | null
}
export const CardGato = ({ datos }: CardGatoProps) => {
    const [image, setImage] = useState<string>(avatar)

    useEffect(() => {
        let active = true;
        if (active) {
            if (datos?.imagenGato != null) {
                setImage(datos?.imagenGato)
            }
        }
        return () => {
            active = false;
        };
    }, [datos])
    return (
        <article className="w-11/12 max-w-200 flex flex-row items-center card-cats rounded-md h-52 mx-auto">
            <section className="w-2/5 h-full bg-fondoCards flex justify-center rounded-l-md">
                <img src={image} alt="cat-picture" width="200" className="rounded-full" />
            </section>
            <section className="w-3/4 h-full">
                <InformacionGato datos={datos}/>
            </section>
        </article>
    )
}
