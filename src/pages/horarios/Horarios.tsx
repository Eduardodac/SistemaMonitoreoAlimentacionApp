import { useEffect, useState } from "react";
import { crearDiadelaSemanaApi, crearHorariosApi } from "../../services/httpclient";
import { useAuthStore } from "../../store/authStore"
import { DiadelaSemana } from "../../openAPI";
import { Horario } from "../../components/horarios/Horario";
import { motion } from "framer-motion";
import { IHorario } from "../../store/horarioStore";

interface IHorariosList {
    [key: number]: IHorario[];
}

export const Horarios = () => {
    const { jwt } = useAuthStore();
    const HorariosApi = crearHorariosApi(jwt);
    const DiadelaSemana = crearDiadelaSemanaApi(jwt);

    const [diaSemanaList, setDiaSemanList] = useState<DiadelaSemana[]>([{diadelaSemanaId:1, dia: "Domingo"}])
    const [horariosList, setHorariosList] = useState<IHorariosList>({
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
        '6':[],
        '7':[],
    });

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

            HorariosApi.apiHorariosGet().then((response)=>{
                const horas = response.data as { horarioId: string, diaDeLaSemanaId: number, hora: string }[];
                const newHorariosList = { ...horariosList };
                horas.map((horarios)=>{
                    //console.log(index);
                    newHorariosList[horarios.diaDeLaSemanaId] = [...newHorariosList[horarios.diaDeLaSemanaId], {horarioId: horarios.horarioId, hora: horarios.hora}];
                })
                setHorariosList(newHorariosList);
            }).catch(()=>{
                console.error("Error al cargar horarios");
            });
        }
        return () => {
            active = false;
        }
    }, [])

    return (
        <motion.div
            className="flex flex-row flex-wrap justify-center "
            initial={{ opacity: 0, y: 50 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{ delay:0.2, duration: 0.75 }}
        >
            {diaSemanaList.map((diaSemana, index)=>{
                return(
                    <Horario dia={diaSemana.dia} diaId = {diaSemana.diadelaSemanaId} horarios={horariosList[index+1]} key={"horarios"+index}/>
                )
            })}
        </motion.div>
    )
}
