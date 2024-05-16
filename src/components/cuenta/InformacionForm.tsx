import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";
import useUserStore, { IInformacionForm } from '../../store/cuentaStore';

export const InformacionForm = () => {

    const { userData } = useUserStore();

    const defaultValues: IInformacionForm = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    }

    const toast = useRef<Toast>(null);
    const showSuccess = () => {
        toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    useEffect(()=>{
        ActualizarValores(userData.informacionForm);
    },[userData.informacionForm])

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const { handleSubmit, setValue } = methods;

    const ActualizarValores = (valores:IInformacionForm) =>{
        setValue('nombre', valores.nombre);
        setValue('apellidoPaterno', valores.apellidoPaterno);
        setValue('apellidoMaterno', valores.apellidoMaterno);
    }

    const onSubmit = (data: IInformacionForm) => {

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
                            <InputTextCustom name="apellidoPaterno" id="apellidoPaterno" label="Apellido Paterno" className="w-full" />
                        </div>
                    </section>
                    <section className=" flex flex-row justify-center m-auto">
                        <div className="w-2/5 mr-10">
                            <InputTextCustom name="apellidoMaterno" id="apellidoMaterno" label="Apellido Materno" className="w-full" />
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
