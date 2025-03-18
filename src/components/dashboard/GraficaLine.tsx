import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IDatosDashboard } from '../../helpers/manejoDatosDash';
import { useEffect } from 'react';


// const data = [
//     {
//       name: 'Lunes',
//       Simbad: 400,
//       Pusa: 240
//     },
//     {
//       name: 'Martes',
//       Simbad: 300,
//       Pusa: 139
//     },
//     {
//       name: 'Miércoles',
//       Simbad: 200,
//       Pusa: 980
//     },
//     {
//       name: 'Jueves',
//       Simbad: 278,
//       Pusa: 398
//     },
//     {
//       name: 'Viernes',
//       Simbad: 189,
//       Pusa: 480
//     },
//     {
//       name: 'Sábado',
//       Simbad: 239,
//       Pusa: 380
//     },
//     {
//       name: 'Domingo',
//       Simbad: 349,
//       Pusa: 430
//     },
//   ];

type GraficaLineProps = {
    data: IDatosDashboard[]
    claves: string[]
}

export const GraficaLine = ({ data, claves }: GraficaLineProps) => {
    useEffect(() => {
        console.log("clav", claves)
    })
    return (
        <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey={claves[0]}
                    stroke="#8884d8"
                ></Line>
                <Line
                    type="monotone"
                    dataKey={claves[1]}
                    stroke="#82ca9d">
                </Line>
                <Line
                    type="monotone"
                    dataKey={claves[2]}
                    stroke="#d88484">
                </Line>
            </LineChart>
        </ResponsiveContainer>
    )
}
