import { InputTextCustom } from "../../../shared/Form/InputTextCustom"
import { Button } from "primereact/button";

export const InformacionGato = () => {

    return (
        <article className="flex flex-col justify-center  pl-10">
            <section className="text-lg font-bold text-paletaIpn-guinda mb-3">Información de {"gato"}</section>
            <section className="flex flex-row text-base">
                <div className="w-1/4 space-y-2">
                    <div>Raza:</div>
                    <div>Sexo:</div>
                </div>
                <div className="w-1/4 space-y-2">
                    <div>Edad:</div>
                    <div>Registro de collar:</div>
                </div>
            </section>

            <Button type="submit" label="Editar" className={'mt-2 mr-5 self-end text-sm'} outlined />
        </article>
    )
}
