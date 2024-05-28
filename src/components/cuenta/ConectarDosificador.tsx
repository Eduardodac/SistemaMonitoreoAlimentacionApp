
import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { useAuthStore } from '../../store/authStore';
import { crearCuentasApi } from '../../services/httpclient';
import { ObtenerMensajeErrorGato } from '../../helpers/manejoErrores';
import useUserStore from '../../store/cuentaStore';
import useToastStore from '../../store/toastStore';

export const ConectarDosificador = () => {
    const { jwt } = useAuthStore();
    const CuentasApi = crearCuentasApi(jwt);
    const {userData} = useUserStore();
    const getToast = useToastStore();
    const [inputNumRegistro, setInputNumRegistro] = useState("");
    const [dosificadorInfo, setDosificadorInfo] = useState({
        fechaActivacion: "",
        numeroRegistro: "",
        estatusActivacion: "",
        estatus: false
    });

    useEffect(() => {
        let active = true;
        if (active) {
            const Nregistro = userData.dosificador?.numeroRegistro != "" ? userData?.dosificador?.numeroRegistro : "Sin asignar";
            const fechaISO = userData?.dosificador?.fechaActivacion != null ? userData?.dosificador?.fechaActivacion.toString() : DateTime.now().toString();
            const FActivacion = DateTime.fromISO(fechaISO).toFormat('DD');
            setDosificadorInfo({
                fechaActivacion: userData?.dosificador?.fechaActivacion != null ? FActivacion.toString() : "Sin Fecha",
                numeroRegistro: Nregistro,
                estatusActivacion: userData?.dosificador?.estatusActivacion ? "Activo" : "Inactivo",
                estatus: userData?.dosificador?.estatusActivacion ? true : false
            })
        }

        return () => {
            active = false;
        };
    }, [userData.dosificador])

    const alternarDosificador = () => {
        if (dosificadorInfo.estatus) {
            const registro = {
                numeroRegistro: dosificadorInfo.numeroRegistro,
            };
            CuentasApi.apiCuentasDesactivarDosificadorPut(registro).then(() => {
                setDosificadorInfo({
                    fechaActivacion: "Sin Fecha",
                    numeroRegistro: "Sin Asignar",
                    estatusActivacion: "Inactivo",
                    estatus: false
                })

                getToast.activateToast(!getToast.change, 'info', "Éxito", "Dosificador desactivado exitosamente");
            }).catch((error) => {
                console.log(error);
                const msj = ObtenerMensajeErrorGato(error, "Error en la desactivación")
                getToast.activateToast(!getToast.change, 'error', "Error", msj);
            })
        } else {
            const registro = {
                numeroRegistro: inputNumRegistro,
            };
            CuentasApi.apiCuentasActivarDosificadorPut(registro).then((response: any) => {
                setDosificadorInfo({
                    fechaActivacion: DateTime.fromISO(response.data.fechaActivacion).toFormat('DD').toString(),
                    numeroRegistro: response.data.numeroRegistro,
                    estatusActivacion: "Activo",
                    estatus: true
                })

                setInputNumRegistro("");
                getToast.activateToast(!getToast.change, 'info', "Éxito", "Dosificador activado exitosamente");
            }).catch((error) => {
                console.log(error);
                const msj = ObtenerMensajeErrorGato(error, "Error en la desactivación")
                getToast.activateToast(!getToast.change, 'error', "Error", msj);
            })
        }
    }

    return (
        <article className="border-2 p-5 w-160 m-auto h-96">
            <section className="text-base mb-5">
                <section className="text-lg mb-5 font-bold text-paletaIpn-guinda">Información de Dosificador</section>
                <div className="space-y-2 flex flex-col">

                    <span className={`font-extrabold text-fondo p-2 rounded-lg w-fit ${dosificadorInfo.estatus ? "bg-fondoCards" : "bg-paletaIpn-guinda"}`}>{dosificadorInfo.estatusActivacion}
                    </span>
                    <span>Fecha de Activación: <span className="font-extrabold text-paletaIpn-guinda">{dosificadorInfo.fechaActivacion}</span></span>
                    {dosificadorInfo.estatus ? <span>Número de registro: <span className="font-extrabold text-paletaIpn-guinda">{dosificadorInfo.numeroRegistro}</span></span>
                        : <InputText
                            className='w-fit'
                            value={inputNumRegistro}
                            onChange={(e: any) => setInputNumRegistro(e.target.value)}
                            placeholder='Numero Registro' />}
                </div>
            </section>
            <div className="flex justify-start">
                <Button
                    label={`${dosificadorInfo.estatus ? "Desactivar Dosificador" : "Activar Dosificador"}`}
                    icon='pi pi-sync'
                    severity={`${dosificadorInfo.estatus ? "danger" : "success"}`}
                    className={'mt-1 text-sm '}
                    onClick={() => { alternarDosificador() }} />
            </div>
        </article>
    )
}
