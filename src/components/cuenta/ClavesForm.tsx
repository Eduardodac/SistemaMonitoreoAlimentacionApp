import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom"
import { Toast } from "primereact/toast";
import { useRef } from "react";

type DefaultType = {
    username: string,
    email: string
}

export const ClavesForm = () => {

    const defaultValues: DefaultType = {
        username: '',
        email: ''
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
                <section className="text-base p-5 font-bold text-paletaIpn-guinda">Información de Cuenta</section>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-row justify-center">
                    <section className=" flex flex-row justify-center">
                        <div className="w-2/5 mr-10">
                            <label htmlFor="">Username:</label>
                            <InputTextCustom name="username" id="username" label="Username" className="w-full" disabled={true} />
                        </div>
                        <div className="w-2/5 ml-10">
                            <label htmlFor="">Correo Electrónico:</label>
                            <InputTextCustom name="email" id="email" label="Correo Electrónico" className="w-full" disabled={true} />
                        </div>
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
