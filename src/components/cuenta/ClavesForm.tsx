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

    const { setValue } = methods;

    const ActualizarValores = (valores: IClavesForm) => {
        setValue('userName', valores.userName);
        setValue('email', valores.email);
    }

    return (
        <article className="border-2 p-5 m-auto w-160">
            <FormProvider {...methods}>
                <section className="text-base mb-5 font-bold text-paletaIpn-guinda">Información de Cuenta</section>
                <form  className=" flex flex-row justify-center">
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
