import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import useUserStore, { IClavesForm } from "../../store/cuentaStore";
import { useEffect } from "react";

export const ClavesForm = () => {
    const { userData } = useUserStore();
    const defaultValues: IClavesForm = {
        userName: '',
        email: ''
    }

    useEffect(() => {
        ActualizarValores(userData.clavesForm);
    }, [userData.clavesForm])

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const { handleSubmit, setValue } = methods;

    const ActualizarValores = (valores: IClavesForm) => {
        setValue('userName', valores.userName);
        setValue('email', valores.email);
    }

    const onSubmit = () => {

    }

    return (
        <article className="my-5 border-2 border-paletaIpn-guinda w-3/4 m-auto max-w-175">
            <FormProvider {...methods}>
                <section className="text-base p-5 font-bold text-paletaIpn-guinda">Información de Cuenta</section>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-row justify-center">
                    <section className=" flex flex-row justify-center">
                        <div className="w-2/5 mr-10">
                            <InputTextCustom name="userName" id="userName" label="Username" className="w-full" disabled={true} />
                        </div>
                        <div className="w-2/5 ml-10">
                            <InputTextCustom name="email" id="email" label="Correo Electrónico" className="w-full" disabled={true} />
                        </div>
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
