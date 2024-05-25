import { DateTime } from "luxon"
import { useEffect } from "react"
import { CrearNuevoHorario } from './CrearNuevoHorario';

type horarioType = {
    dia: string,
    diaId: number | undefined, 
    horarios: DateTime[]
}
export const Horario = ({dia, diaId = 0}: horarioType) => {
    useEffect(()=>{
        //console.log(horarios);
    })

  return diaId != 0 ?(
    
    <div className="border min-w-50 m-5 flex flex-col items-center">
        <div>{dia}</div>
        <CrearNuevoHorario dia={dia} diaId={diaId}/>
    </div>
  ):
  <></>
}
