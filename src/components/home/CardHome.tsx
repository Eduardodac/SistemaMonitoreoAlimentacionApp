type CuadroProps = {
    text: string
    numero: string
}

export const CardHome = ({text, numero}:CuadroProps) => {

  return (
    <div className="flex flex-col max-w-72 min-w-52 m-auto">
        <div className="m-auto text-paletaIpn-guinda text-6xl">{numero}</div>
        <div className="cardHome mx-3">
            <div className="w-full p-3 text-center text-base">{text}</div>
        </div>
    </div>
  )
}
