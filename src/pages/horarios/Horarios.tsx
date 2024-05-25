import { useEffect, useState } from "react";
import { crearDiadelaSemanaApi, crearHorariosApi } from "../../services/httpclient";
import { useAuthStore } from "../../store/authStore"
import { DiadelaSemana } from "../../openAPI";
import { Horario } from "../../components/horarios/Horario";

export const Horarios = () => {
    const { jwt } = useAuthStore();
    const HorariosApi = crearHorariosApi(jwt);
    const DiadelaSemana = crearDiadelaSemanaApi(jwt);

    const [diaSemanaList, setDiaSemanList] = useState<DiadelaSemana[]>([{diadelaSemanaId:1, dia: "Lunes"}])

    useEffect(() => {
        let active = true;
        if (active) {
            DiadelaSemana.apiDiasdelaSemanaGet().then((response)=>{
                //console.log(response)
                let listaDiaSemana:DiadelaSemana[] = []
                response.data.map((diaSemana)=>{
                    listaDiaSemana.push(diaSemana)
                });
                setDiaSemanList(listaDiaSemana);
            }).catch(()=>{
                console.error("Error al cargar días de la semana");
            });

            HorariosApi.apiHorariosGet().then(()=>{
                //console.log(response)
            }).catch(()=>{
                console.error("Error al cargar días de la semana");
            });
        }
        return () => {
            active = false;
        }
    }, [])

    return (
        <div className="flex flex-row flex-wrap justify-center ">
            {diaSemanaList.map((diaSemana, index)=>{
                return(
                    <Horario dia={diaSemana.dia} diaId = {diaSemana.diadelaSemanaId} horarios={[]} key={"horarios"+index}/>
                )
            })}
        </div>
    )
}
