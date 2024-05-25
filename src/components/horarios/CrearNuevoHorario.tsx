import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { v4 as uuidv4 } from 'uuid';
import { Dialog } from "primereact/dialog";
import { FormProvider, useForm } from "react-hook-form";
import { CalendarTimeCustom } from "../../shared/Form/CalendarTimeCustom";
import { Button } from "primereact/button";
import { DateTime } from "luxon";
import { HorarioSchema } from "../../helpers/yupHorario";
import { yupResolver } from "@hookform/resolvers/yup";
import { crearHorariosApi } from "../../services/httpclient";
import { useAuthStore } from "../../store/authStore";
import { ObtenerMensajeErrorGato } from "../../helpers/manejoErrores";


type DefaultType = {
    hora: Date
}

const defaultValues: DefaultType = {
    hora: DateTime.now().toJSDate()
}

type crearHorarioProp={
    dia: string,
    diaId: number | undefined
}

export const CrearNuevoHorario = ({dia, diaId}: crearHorarioProp) => {
    const [visible, setVisible] = useState<boolean>(false);
    const { jwt } = useAuthStore();
    const HorariosAPi = crearHorariosApi(jwt);

    const toast = useRef<Toast>(null);
    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(HorarioSchema),
        defaultValues: defaultValues,
    });

    useEffect(()=>{
        methods.setValue('hora',DateTime.now().toJSDate(),{ shouldValidate: true });
    },[])


    const showSuccess = (message: string) => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: message, life: 3000 });
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const { getValues, formState: { errors }, reset } = methods;

    const onSubmit = () => {

        const hours = getValues().hora.getHours();
        const minutes = getValues().hora.getMinutes();
        const hora:any = DateTime.utc(1,1,1,hours, minutes).toISO();
        console.log(hora)
        const values = {
            horarioId: uuidv4(),
            diaDeLaSemanaId: diaId || 0,
            hora: hora
        }

        if (Object.keys(errors).length == 0) {
            HorariosAPi.apiHorariosPost(values).then((response) => {
                console.log(response);
                setVisible(false)
                reset();
                showSuccess("Creación exitosa");
            }).catch((error) => {
                console.log(error)
                showError(ObtenerMensajeErrorGato(error, "Error al crear el horario"));
            })
        }
    }

    const resetForm =()=>{
        reset();
        methods.setValue('hora', DateTime.now().toJSDate(),{ shouldValidate: true });
        setVisible(false)
    }

    const visibleForm =()=>{
        methods.setValue('hora', DateTime.now().toJSDate(),{ shouldValidate: true });
        setVisible(true)
    }

    const footerContent = (
        <div>
            <Button label="Cancelar" severity="secondary" icon="pi pi-times" onClick={resetForm} className="p-button-text" />
            <Button label="Confirmar" severity="secondary" icon="pi pi-check" className="" onClick={onSubmit} />
        </div>
    );

    const headerContent = (
        <div className="text-md text-paletaIpn-guinda">Nuevo Horario en {dia}</div>
    );

    return (

        <article className="mt-16 w-full ">
            <Toast ref={toast} />
            <motion.div
                className="h-10 rounded-xl bg-paletaIpn-rojo w-48 p-3 m-auto flex flex-row items-center card-cats cursor-pointer"
                onClick={visibleForm}
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >

                <span className="pi pi-plus text-fondo"></span>

                <div className="ml-3 text-base font-extrabold text-fondo ">Nuevo Horario</div>
            </motion.div>
            <Dialog header={headerContent} visible={visible} position={'center'} style={{ width: '40vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                <FormProvider {...methods}>
                    <article className="mt-5 space-y-5">
                        <section className="flex flex-row justify-center m-auto ">
                            <div className="w-2/5">
                                <CalendarTimeCustom name="hora" id="hora" label="Horario" className="w-full" />
                            </div>
                        </section>
                    </article>
                </FormProvider>
            </Dialog>
        </article>
    )
}
