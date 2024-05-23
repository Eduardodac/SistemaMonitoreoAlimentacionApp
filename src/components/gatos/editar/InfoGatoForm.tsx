import { FormProvider, useForm } from "react-hook-form"
import { InputNumberCustom } from "../../../shared/Form/InputNumberCustom"
import { InputTextCustom } from "../../../shared/Form/InputTextCustom"
import { Toast } from "primereact/toast"
import { useEffect, useRef } from "react"
import { CrearGatoSchema } from "../../../helpers/yupGatos"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "primereact/button"
import useGatoStore from "../../../store/gatoStore"
import { crearGatosApi } from "../../../services/httpclient"
import { useAuthStore } from "../../../store/authStore"
import { ObtenerMensajeErrorGato } from "../../../helpers/manejoErrores"
import { useParams } from "react-router-dom"

interface DefaultType {
    nombre: string,
    raza?: string | undefined,
    sexo?: string | undefined,
    edad: number
}

const defaultValues: DefaultType = {
    nombre: '',
    raza: '',
    sexo: '',
    edad: 0
}

export const InfoGatoForm = () => {

    const { gatoData, setGatoData } = useGatoStore();
    const { jwt } = useAuthStore();
    const GatosApi = crearGatosApi(jwt);
    const toast = useRef<Toast>(null);
    const { gatoId } = useParams();

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(CrearGatoSchema),
        defaultValues: defaultValues,
    });

    useEffect(() => {
        ActualizarValores(gatoData.gato);
    }, [gatoData.gato])

    const { setValue, getValues, handleSubmit } = methods;

    const showSuccess = (message: string) => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: message, life: 3000 });
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const onSubmit = () => {

        const values = getValues();

        if (gatoId != null) {
            GatosApi.apiGatosGatoIdPut(gatoId, values).then((response) => {
                console.log(response);

                setGatoData({
                    gato: {
                        nombre: values.nombre,
                        raza: values.raza,
                        sexo: values.sexo,
                        edad: values.edad
                    }
                })
                showSuccess("Modificación exitosa");
            }).catch((error) => {
                showError(ObtenerMensajeErrorGato(error, "Error al crear el gato"));
            })

        }
    }

    const ActualizarValores = (valores: DefaultType) => {
        setValue('nombre', valores.nombre);
        setValue('raza', valores.raza);
        setValue('sexo', valores.sexo);
        setValue('edad', valores.edad);
    }

    return (
        <article className="border-2 w-full m-auto max-w-175 min-w-175 h-96">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
                    <section className="text-lg p-5 font-bold text-paletaIpn-guinda">Información de Gato</section>
                    <article className="mt-5 space-y-5">
                        <section className="flex flex-row justify-center m-auto ">
                            <div className="w-2/5 mr-10">
                                <InputTextCustom name="nombre" id="nombre" label="Nombre" className="w-full" />
                            </div>
                            <div className="w-2/5">
                                <InputTextCustom name="sexo" id="sexo" label="Sexo" className="w-full" />
                            </div>
                        </section>
                        <section className=" flex flex-row justify-center m-auto">
                            <div className="w-2/5 mr-10">
                                <InputTextCustom name="raza" id="raza" label="Raza" className="w-full" />
                            </div>
                            <div className="w-2/5">
                                <InputNumberCustom name="edad" id="edad" label="Edad" className="w-full" />
                            </div>
                        </section>
                    </article>
                    <section className="flex justify-end pr-5 pb-5">
                        <Button type="submit" label="Editar" className={'mt-2 mr-5'} outlined />
                        <Button type="reset" label="Reset" className={'mt-2'} onClick={() => { ActualizarValores(gatoData.gato) }} outlined />
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
