import { motion } from "framer-motion"
import { variantsEditar } from "../../../helpers/variantsHorarios";
import { useAuthStore } from "../../../store/authStore";
import { crearHorariosApi } from "../../../services/httpclient";
import useToastStore from "../../../store/toastStore";
import { ObtenerMensajeErrorGato } from "../../../helpers/manejoErrores";
import { Button } from "primereact/button";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HorarioSchema } from "../../../helpers/yupHorario";
import { DateTime } from "luxon";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { CalendarTimeCustom } from "../../../shared/Form/CalendarTimeCustom";

type EditarBotonType = {
    hoverEditar: boolean,
    horaActual: Date,
    switchHoverEditar: () => void,
    horarioId: string,
    editarHoraMinuto: (horaEdit: string) => void
}

type DefaultType = {
    hora: Date
}

const defaultValues: DefaultType = {
    hora: DateTime.now().toJSDate()
}

export const EditarHorarioBoton = ({ hoverEditar, switchHoverEditar, horarioId, horaActual, editarHoraMinuto }: EditarBotonType) => {

    const { jwt } = useAuthStore();
    const HorariosApi = crearHorariosApi(jwt);
    const getToast = useToastStore();
    const [visible, setVisible] = useState<boolean>(false);

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(HorarioSchema),
        defaultValues: defaultValues,
    });

    const { getValues, formState: { errors }, reset } = methods;

    const editarHorario = () => {

        const hours = getValues().hora.getHours();
        const minutes = getValues().hora.getMinutes();
        const hora:any = DateTime.utc(2000, 1, 1, hours, minutes).toISO({includeOffset: false, suppressMilliseconds:true});

        const values = {
            hora: hora
        }

        if (Object.keys(errors).length == 0) {
            HorariosApi.apiHorariosHorarioIdPut(horarioId, values).then(() => {
                //console.log(response);
                setVisible(false)
                reset();
                editarHoraMinuto(hora)
                switchHoverEditar();
                getToast.activateToast(!getToast.change, 'info', "Éxito", "Horario editada exitosamente");
            }).catch((error) => {
                const msj = ObtenerMensajeErrorGato(error, "Error en la edición");
                getToast.activateToast(!getToast.change, 'error', "Error", msj);
            })
        }
    }

    const resetForm = () => {
        reset();
        methods.setValue('hora', horaActual, { shouldValidate: true });
        setVisible(false)
    }

    const visibleForm = () => {
        methods.setValue('hora', horaActual, { shouldValidate: true });
        setVisible(true)
    }

    const footerContent = (
        <div>
            <Button label="Cancelar" severity="secondary" icon="pi pi-times" onClick={resetForm} className="p-button-text" />
            <Button label="Confirmar" severity="secondary" icon="pi pi-check" className="" onClick={editarHorario} />
        </div>
    );

    const headerContent = (
        <div className="text-md text-paletaIpn-guinda">Modificar Horario</div>
    );

    return (

        <motion.nav
            initial={false}
            className="h-full absolute w-3/4 cursor-pointer right-3 flex justify-end items-center bg-[#84A98C] rounded-md"
            animate={hoverEditar ? "open" : "closed"}
            variants={variantsEditar}
        >
            <motion.div
                className="self-center w-full flex justify-center items-center space-x-3 text-fondo mr-4"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={visibleForm}>
                <span className="pi pi-pencil"></span>
                <span>Editar</span>
            </motion.div>
            <motion.div
                className="mr-1 bg-fondo rounded-full flex justify-center"
                initial={false}
                animate={{ rotate: hoverEditar ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className="pi pi-angle-double-left text-[#84A98C] p-1 font-extra-bold"
                    initial={false}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={switchHoverEditar}
                >
                </motion.span>
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
        </motion.nav>
    )
}
