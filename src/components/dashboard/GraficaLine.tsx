import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Lunes',
      Simbad: 400,
      Pusa: 240
    },
    {
      name: 'Martes',
      Simbad: 300,
      Pusa: 139
    },
    {
      name: 'Miércoles',
      Simbad: 200,
      Pusa: 980
    },
    {
      name: 'Jueves',
      Simbad: 278,
      Pusa: 398
    },
    {
      name: 'Viernes',
      Simbad: 189,
      Pusa: 480
    },
    {
      name: 'Sábado',
      Simbad: 239,
      Pusa: 380
    },
    {
      name: 'Domingo',
      Simbad: 349,
      Pusa: 430
    },
  ];

export const GraficaLine = () => {
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
          dataKey="Simbad"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        ></Line>
        <Line 
            type="monotone" 
            dataKey="Pusa" 
            stroke="#82ca9d"></Line>
      </LineChart>
    </ResponsiveContainer>
  )
}
