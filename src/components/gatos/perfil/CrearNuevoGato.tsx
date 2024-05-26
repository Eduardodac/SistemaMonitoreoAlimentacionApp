import { motion } from "framer-motion";
import plus from "../../../assets/plus.svg";
import { useEffect, useRef, useState } from "react";
import { Dialog } from 'primereact/dialog'
import { Button } from "primereact/button";
import { FormProvider, useForm } from "react-hook-form";
import { CrearGatoSchema } from "../../../helpers/yupGatos";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTextCustom } from "../../../shared/Form/InputTextCustom";
import { InputNumberCustom } from "../../../shared/Form/InputNumberCustom";
import { Toast } from "primereact/toast";
import { useAuthStore } from "../../../store/authStore";
import { crearGatosApi } from "../../../services/httpclient";
import { v4 as uuidv4 } from 'uuid';
import { ObtenerMensajeErrorGato } from "../../../helpers/manejoErrores";

type DefaultType = {
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

export const CrearNuevoGato = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const { jwt } = useAuthStore();
    const GatosApi = crearGatosApi(jwt);
    const toast = useRef<Toast>(null);
    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(CrearGatoSchema),
        defaultValues: defaultValues,
    });

    useEffect(()=>{
        methods.setValue('nombre','',{ shouldValidate: true });
    },[])


    const showSuccess = (message: string) => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: message, life: 3000 });
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const { getValues, formState: { errors }, reset } = methods;
    
    const onSubmit = () => {

        const values = getValues();
        const gatoId = uuidv4();
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length == 0) {
            GatosApi.apiGatosGatoIdPost(gatoId, values).then((response) => {
                console.log(response);
                setVisible(false)
                reset();
                showSuccess("Creación exitosa");
            }).catch((error) => {
                showError(ObtenerMensajeErrorGato(error, "Error al crear el gato"));
            })
        }
    }

    const resetForm =()=>{
        reset();
        methods.setValue('nombre','',{ shouldValidate: true });
        setVisible(false)
    }

    const footerContent = (

        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={resetForm} className="p-button-text" />
            <Button label="Confirmar" icon="pi pi-check" onClick={onSubmit} autoFocus />
        </div>
    );

    const headerContent = (
        <div className="text-md text-paletaIpn-guinda">Nuevo Perfil Gato</div>
    );

    return (

        <article className="mt-16 w-full ">
            <Toast ref={toast} />
            <motion.div
                className="rounded-full h-14 bg-paletaGatos-Caribbean w-56 p-3 m-auto flex flex-row items-center card-cats cursor-pointer"
                onClick={() => { setVisible(true); }}
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <div className="bg-fondo rounded-full text-paletaGatos-Caribbean w-fit p-1">
                    <img src={plus} alt="plus" width={30}></img>
                </div>
                <div className="ml-3 text-xl font-extrabold text-fondo ">Nuevo Perfil</div>
            </motion.div>
            <Dialog header={headerContent} visible={visible} position={'center'} style={{ width: '40vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                <FormProvider {...methods}>
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
                </FormProvider>
            </Dialog>
        </article>
    )
}
