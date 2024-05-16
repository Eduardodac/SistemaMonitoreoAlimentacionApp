import { Toast } from "primereact/toast";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";

type DefaultType = {
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
}

export const InformacionForm = () => {
    const defaultValues: DefaultType = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    }

    const toast = useRef<Toast>(null);
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: DefaultType) => {

    }

    return (
        <article className="my-5 border-2 border-paletaIpn-guinda w-3/4 m-auto max-w-175">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <section className="text-base p-5 font-bold text-paletaIpn-guinda">Información de Perfil</section>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
                    <section className="flex flex-row justify-center m-auto">
                        <div className="w-2/5 mr-10">
                            <InputTextCustom name="nombre" id="nombre" label="Nombre" className="w-full" />
                        </div>
                        <div className="w-2/5 ml-10">
                            <InputTextCustom name="email" id="email" label="Correo Electrónico" className="w-full" />
                        </div>
                    </section>
                    <section className=" flex flex-row justify-center m-auto">
                        <div className="w-2/5 mr-10">
                            <InputTextCustom name="username" id="username" label="Username" className="w-full" />
                        </div>
                        <div className="w-2/5 ml-10">
                            <div className={`field w-51 m-auto pt-2`}>
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-end pr-5 pb-5">
                        <Button type="submit" label="Editar" className={'mt-2 mr-5'} outlined />
                        <Button type="reset" label="Reset" className={'mt-2'} outlined />
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
