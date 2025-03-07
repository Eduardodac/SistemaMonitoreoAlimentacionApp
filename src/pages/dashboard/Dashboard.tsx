import { motion } from "framer-motion"
import best from "../../assets/best-day.svg"
import worst from "../../assets/worstday.svg"
import food from "../../assets/animal-food.svg"
import time from "../../assets/time.svg"
import { SegundoCuadroInformativo } from "../../components/dashboard/SegundoCuadroInformativo"
import { GraficaLine } from "../../components/dashboard/GraficaLine"
import { GraficaPie } from "../../components/dashboard/GraficaPie"
import { useForm, FormProvider } from "react-hook-form";
import { DropdownCustom } from "../../shared/Form/DropdownCustom"
import { Button } from "primereact/button"
import { crearActividadesFelinasApi, crearGatosApi } from "../../services/httpclient"
import { useAuthStore } from "../../store/authStore"
import { useEffect, useState } from "react"
import { getDatosPieAlimento, getDatosPietiempo, IDatosSalida, IDatosTransformados, obtenerClavesDinamicas, transformarDatosDias, transformarDatosDiasTiempo, transformarDatosHoras, transformarDatosHorasTiempo } from "../../helpers/manejoDatosDash"

type dashboardFormType = {
    guid: string,
    periodo: number
}

const defaultValues: dashboardFormType = {
    guid: "",
    periodo: 1
}

const periodoOpciones = [
    { name: 'Por horas', code: 1 },
    { name: 'Por dias', code: 2 },
];

type optionType = {
    name: string,
    code: string,
}

export const Dashboard = () => {
    const { jwt } = useAuthStore();
    const GatosAPI = crearGatosApi(jwt);
    const ActividadFelinaApi = crearActividadesFelinasApi(jwt);

    const [gatosOpciones, setGatosOpciones] = useState<optionType[]>([]);
    const [datosTransformadosDias, setDatosTransformadosDias] = useState<IDatosTransformados[]>([]);
    const [datosTransformadosTiempo, setDatosTransformadosTiempo] = useState<IDatosTransformados[]>([]);
    const [clavesDinamicas, setClavesDinamicas] = useState<string[]>([]);
    const [datosPieAlimento, setDatosPieAlimento] = useState<IDatosSalida[]>([]);
    const [datosPieTiempo, setDatosPieTiempo] = useState<IDatosSalida[]>([]);

    useEffect(() => {
        let active = true;
        if (active) {
            GatosAPI.apiGatosComboBoxGet().then((response) => {
                const gatosOp: optionType[] = [{ name: "Todos", code: "0" }];
                response.data.forEach((gato: any) => {
                    gatosOp.push(gato);
                })
                setGatosOpciones(gatosOp);
            }).catch(() => {
                console.log("gatos, error en llamada de datos")
            })
        }
        return () => {
            active = false;
        };
    }, [])

    useEffect(() => {
        console.log(datosTransformadosDias)
        console.log(datosTransformadosTiempo)
    }, [datosTransformadosDias,datosTransformadosTiempo])

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: dashboardFormType) => {
        console.log(data)
        ActividadFelinaApi.apiActividadFelinaPut()
            .then(() => {
                if (data.guid != '0') {
                    return ActividadFelinaApi.apiActividadFelinaGatoIdPeriodoGet(data.guid, data.periodo);
                } else {
                    return ActividadFelinaApi.apiActividadFelinaPeriodoGet("", data.periodo);
                }
            })
            .then((resultado: any) => {
                if (data.periodo === 1) {
                    const datosTransformados = transformarDatosHoras(resultado.data);
                    setDatosTransformadosDias(datosTransformados);
                    const datosTransformadosTiempo = transformarDatosHorasTiempo(resultado.data);
                    setDatosTransformadosTiempo(datosTransformadosTiempo);
                    setClavesDinamicas(obtenerClavesDinamicas(datosTransformados))
                    setDatosPieAlimento(getDatosPieAlimento(resultado.data))
                    setDatosPieTiempo(getDatosPietiempo(resultado.data))
                } else {
                    const datosTransformados = transformarDatosDias(resultado.data);
                    setDatosTransformadosDias(datosTransformados);
                    const datosTransformadosTiempo = transformarDatosDiasTiempo(resultado.data);
                    setDatosTransformadosTiempo(datosTransformadosTiempo);
                    setClavesDinamicas(obtenerClavesDinamicas(datosTransformados))
                    setDatosPieAlimento(getDatosPieAlimento(resultado.data))
                    setDatosPieTiempo(getDatosPietiempo(resultado.data))
                }
            })
            .catch((error) => {
                console.error("Error en actualizar la data:", error);
            });
    }

    return (
        <motion.div
            className=''
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 0.75 }}
        >
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row justify-between p-fluid mt-5">
                    <DropdownCustom
                        name={'guid'}
                        id='guid'
                        label='Gato'
                        className="w-1/3 max-w-72 ml-5"
                        options={gatosOpciones}
                    />
                    <DropdownCustom
                        name={'periodo'}
                        id='periodo'
                        label='Periodo'
                        className="w-1/3 max-w-72"
                        options={periodoOpciones}
                    />
                    <div className='w-1/2 max-w-72 mr-5'>
                        <Button type="submit" label="Actualizar" className={"p-button-danger"} outlined />
                    </div>
                </form>
            </FormProvider>
            <div className="flex flex-row justify-around">
                <SegundoCuadroInformativo text="Total alimento consumido en gramos" icon={food} dia="4724" />
                <SegundoCuadroInformativo text="Tiempo de consumo en minutos" icon={time} dia="100" />
                <SegundoCuadroInformativo text="Día de más consumo" icon={best} dia="Miércoles" />
                <SegundoCuadroInformativo text="Día de menos consumo" icon={worst} dia="Martes" />
            </div>
            <section className="text-center text-xl font-bold text-paletaIpn-guinda self-start mt-5 mb-5">Análisis de consumo (gramos)</section>
            <div className="flex flex-row">
                <div className="w-7/10"><GraficaLine data={datosTransformadosDias} claves={clavesDinamicas}/></div>
                <div className="w-3/10 m-auto"><GraficaPie data={datosPieAlimento} /></div>
            </div>
            <section className="text-center text-xl font-bold text-paletaIpn-guinda self-start mb-5">Análisis de tiempo (segundos)</section>
            <div className="flex flex-row">
                <div className="w-7/10"><GraficaLine data={datosTransformadosTiempo} claves={clavesDinamicas}/></div>
                <div className="w-3/10 m-auto"><GraficaPie data={datosPieTiempo} /></div>
            </div>
        </motion.div>
    )
}


