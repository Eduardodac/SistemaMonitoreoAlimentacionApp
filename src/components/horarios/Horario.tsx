import { useEffect, useState } from "react"
import { CrearNuevoHorario } from './CrearNuevoHorario';
import { EditarHorario } from "./EditarHorario";
import { IHorario } from "../../pages/horarios/Horarios";

export interface IHorarioDate {
    horarioId: string;
    hora: Date;
}

type horarioType = {
    dia: string,
    diaId: number | undefined,
    horarios: IHorario[]
}

export const Horario = ({ dia, diaId = 0, horarios }: horarioType) => {

    const [horariosOrdenados, setHorariosOrdenados] = useState<IHorarioDate[]>([{ horarioId: "", hora: new Date() }])

    useEffect(() => {
        const horasConvertidas: IHorarioDate[] = horarios.map(hora => {
            return { horarioId: hora.horarioId, hora: new Date(hora.hora) }
        });
        horasConvertidas.sort(compararHoras);

        setHorariosOrdenados(horasConvertidas);
    }, [horarios]);

    const compararHoras = (dateA: IHorarioDate, dateB: IHorarioDate): number => {
        const horaA = dateA.hora.getHours();
        const minutosA = dateA.hora.getMinutes();
        const horaB = dateB.hora.getHours();
        const minutosB = dateB.hora.getMinutes();

        if (horaA < horaB) return -1;
        if (horaA > horaB) return 1;
        if (minutosA < minutosB) return -1;
        if (minutosA > minutosB) return 1;
        return 0;
    };

    const agregarHora = (horaNueva: IHorarioDate) => {
        const horasConvertidas: IHorarioDate[] = horarios.map(hora => {
            return { horarioId: hora.horarioId, hora: new Date(hora.hora) }
        });
        horasConvertidas.push(horaNueva);
        horasConvertidas.sort(compararHoras);

        setHorariosOrdenados(horasConvertidas);
    }

    return diaId != 0 ? (

        <div className=" min-w-60 m-5 flex flex-col items-stretch justify-between">
            <div className="mx-auto mb-2 text-paletaIpn-guinda font-bold text-xl">{dia}</div>
            {
                horariosOrdenados.map((horario, index) => {
                    return (<EditarHorario horarioId={horario.horarioId} hora={horario.hora} key={"EditarHorario" + index} />)
                })
            }
            <CrearNuevoHorario dia={dia} diaId={diaId} agregarHora={agregarHora} />
        </div>
    ) :
        <></>
}
