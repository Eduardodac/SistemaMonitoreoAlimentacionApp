
import { useEffect, useRef, useState } from 'react';
import useGatoStore from '../../../store/gatoStore';
import { DateTime } from 'luxon';
import { Button } from 'primereact/button';
import { useAuthStore } from '../../../store/authStore';
import { crearGatosApi } from '../../../services/httpclient';
import { useParams } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { ObtenerMensajeErrorGato } from '../../../helpers/manejoErrores';
import { InputText } from 'primereact/inputtext';

export const ConectarCollares = () => {
    const { jwt } = useAuthStore();
    const GatosAPI = crearGatosApi(jwt);
    const { gatoData, setGatoData } = useGatoStore();
    const { gatoId } = useParams();
    const toast = useRef<Toast>(null);
    const [inputNumRegistro, setInputNumRegistro] = useState("");
    const [collarInfo, setCollarInfo] = useState({
        fechaActivacion: "",
        numeroRegistro: "",
        estatusActivacion: "",
        estatus: false
    });

    useEffect(() => {
        let active = true;
        if (active) {
            const Nregistro = gatoData?.collar?.numeroRegistro != "" ? gatoData?.collar?.numeroRegistro : "Sin asignar";
            const fechaISO = gatoData?.collar?.fechaActivacion != "" ? gatoData?.collar?.fechaActivacion.toString() : DateTime.now().toString();
            const FActivacion = DateTime.fromISO(fechaISO).toFormat('DD');
            console.log("gartodata", gatoData)
            setCollarInfo({
                fechaActivacion: gatoData?.collar?.fechaActivacion != "" ? FActivacion.toString() : "Sin Fecha",
                numeroRegistro: Nregistro,
                estatusActivacion: gatoData?.collar?.estatusActivacion ? "Activo" : "Inactivo",
                estatus: gatoData?.collar?.estatusActivacion ? true : false
            })
        }

        return () => {
            active = false;
        };
    }, [gatoData.collar])

    const alternarCollar = () => {
        if (gatoId != null) {
            if (collarInfo.estatus) {
                const registro = {
                    numeroRegistro: collarInfo.numeroRegistro,
                };
                GatosAPI.apiGatosDesactivarCollarGatoIdPut(gatoId, registro).then(() => {
                    setGatoData({
                        collar: {
                            collarId: '0',
                            fechaSalida: "Sin Fecha",
                            fechaActivacion: "",
                            numeroRegistro: "Sin Asignar",
                            estatusActivacion: false,
                        },
                    });

                    showSuccess("Desactivación exitosa");
                }).catch((error) => {
                    console.log(error);
                    const msj = ObtenerMensajeErrorGato(error, "Error en la Desactivación")
                    showError(msj);
                })
            } else {
                const registro = {
                    numeroRegistro: inputNumRegistro,
                };
                GatosAPI.apiGatosActivarCollarGatoIdPut(gatoId, registro).then((response: any) => {
                    const respuesta = response.data;
                    console.log("ac", respuesta);
                    setGatoData({
                        collar: {
                            collarId: respuesta.collarId ? respuesta.collarId : "",
                            fechaSalida: respuesta.fechaSalida ? respuesta.fechaSalida : "",
                            fechaActivacion: respuesta.fechaActivacion ? respuesta.fechaActivacion : "",
                            numeroRegistro: respuesta.numeroRegistro,
                            estatusActivacion: true,
                        },
                    });

                    setInputNumRegistro("");
                    showSuccess("Activación exitosa");
                }).catch((error) => {
                    console.log(error);
                    const msj = ObtenerMensajeErrorGato(error, "Error en la activación")
                    showError(msj);
                })
            }
        }
    }

    const showSuccess = (message: string) => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: message, life: 3000 });
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    return (
        <article className="border-2 p-5 w-full m-auto max-w-175 min-w-175 h-96">
            <Toast ref={toast} />
            <section className="text-base mb-5">
                <section className="text-lg mb-5 font-bold text-paletaIpn-guinda">Información de Collar</section>
                <div className="space-y-2 flex flex-col">

                    <span className={`font-extrabold text-fondo p-2 rounded-lg w-fit ${collarInfo.estatus ? "bg-fondoCards" : "bg-paletaIpn-guinda"}`}>{collarInfo.estatusActivacion}
                    </span>
                    <span>Fecha de Activación: <span className="font-extrabold text-paletaIpn-guinda">{collarInfo.fechaActivacion}</span></span>
                    {collarInfo.estatus ? <span>Número de registro: <span className="font-extrabold text-paletaIpn-guinda">{collarInfo.numeroRegistro}</span></span>
                        : <InputText
                            className='w-fit'
                            value={inputNumRegistro}
                            onChange={(e: any) => setInputNumRegistro(e.target.value)}
                            placeholder='Numero Registro' />}
                </div>
            </section>
            <div className="flex justify-start">
                <Button
                    label={`${collarInfo.estatus ? "Desactivar Collar" : "Activar Collar"}`}
                    icon='pi pi-sync'
                    severity={`${collarInfo.estatus ? "danger" : "success"}`}
                    className={'mt-1 text-sm '}
                    onClick={() => { alternarCollar() }} />
            </div>
        </article>
    )
}
