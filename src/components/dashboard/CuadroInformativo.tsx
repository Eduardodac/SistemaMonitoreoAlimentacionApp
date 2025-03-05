type CuadroInformativoProps = {
    text: string
    icon: string
    numero: string
}

export const CuadroInformativo = ({text, icon, numero}:CuadroInformativoProps) => {

  return (
    <div className="cuadroInformativo ">
        <div className="flex flex-row h-full">
            <div className="w-7/10">
                <div className="w-full h-1/2 p-3 text-center text-base">{text}</div>
                <img src={icon} width={60} height={60} className="m-auto"/>
            </div>
            <div className="w-3/10  m-auto text-4xl">{numero}</div>
        </div>
    </div>
  )
}
