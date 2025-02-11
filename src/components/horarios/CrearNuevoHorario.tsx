import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
import { IHorario } from "../../store/horarioStore";
import useToastStore from "../../store/toastStore";


type DefaultType = {
    hora: Date
}

const defaultValues: DefaultType = {
    hora: DateTime.now().toJSDate()
}

type crearHorarioProp={
    dia: string,
    diaId: number | undefined,
    agregarHora: (hora:IHorario)=>void
}

export const CrearNuevoHorario = ({dia, diaId, agregarHora}: crearHorarioProp) => {
    const [visible, setVisible] = useState<boolean>(false);
    const { jwt } = useAuthStore();
    const HorariosAPi = crearHorariosApi(jwt);
    const getToast = useToastStore();

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(HorarioSchema),
        defaultValues: defaultValues,
    });

    useEffect(()=>{
        methods.setValue('hora',DateTime.now().toJSDate(),{ shouldValidate: true });
    },[])


    const { getValues, formState: { errors }, reset } = methods;

    const onSubmit = () => {

        const hours = getValues().hora.getHours();
        const minutes = getValues().hora.getMinutes();
        const hora:any = DateTime.utc(2000,1,1,hours, minutes).toISO({includeOffset: false, suppressMilliseconds:true});
        const values = {
            horarioId: uuidv4(),
            diaDeLaSemanaId: diaId || 0,
            hora: hora
        }

        if (Object.keys(errors).length == 0) {
            HorariosAPi.apiHorariosPost(values).then(() => {
                //console.log(response);
                setVisible(false)
                reset();
                getToast.activateToast(!getToast.change, 'info', "Éxito", "Horario creada exitosamente");
                agregarHora({horarioId: values.horarioId, hora: values.hora});
            }).catch((error) => {
                console.log(error)
                const msj = ObtenerMensajeErrorGato(error, "Error creando horario");
                getToast.activateToast(!getToast.change, 'error', "Error", msj);
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
        <div className="flex justify-around flex-wrap">
            <Button label="Cancelar" severity="secondary" icon="pi pi-times" onClick={resetForm} className="p-button-text" />
            <Button label="Confirmar" severity="secondary" icon="pi pi-check" className="w-fit" onClick={onSubmit} />
        </div>
    );

    const headerContent = (
        <div className="text-md text-paletaIpn-guinda">Nuevo Horario en {dia}</div>
    );

    return (

        <article className="mt-2 w-full ">
            <motion.div
                className="h-10 rounded-xl bg-paletaIpn-guinda w-48 p-3 mx-auto flex flex-row items-center card-hour cursor-pointer"
                onClick={visibleForm}
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >

                <span className="pi pi-plus text-fondo"></span>

                <div className="ml-3 text-base font-extrabold text-fondo ">Nuevo Horario</div>
            </motion.div>
            <Dialog header={headerContent} visible={visible} position={'center'} style={{ width: '30vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                <FormProvider {...methods}>
                    <article className="mt-5">
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
