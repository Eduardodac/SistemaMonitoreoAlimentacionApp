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
    const showError = (message:string) => {
        toast.current?.show({severity:'error', summary: 'Error', detail:message, life: 4000});
    }

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: DefaultType) => {

    }

    return (
        <article className="m-5 border-2 ">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <section className="text-base">Información de Cuenta</section>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-row justify-center">
                    <div className="w-1/4">
                        <InputTextCustom name="username" id="username" label="Username"/>
                    </div>
                    <div className="w-1/4">
                        <InputTextCustom name="email" id="email" label="Correo Electrónico" />
                    </div>
                </form>
                </FormProvider>
        </article>
    )
}
