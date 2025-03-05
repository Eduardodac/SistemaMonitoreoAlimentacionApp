type CuadroInformativoProps = {
    text: string
    icon: string
    dia: string
}

export const SegundoCuadroInformativo = ({text, icon, dia}:CuadroInformativoProps) => {

  return (
    <div className="cuadroInformativo ">
        <div className="flex flex-row h-full">
            <div className="w-7/10">
                <div className="w-full h-5/10 p-3 pt-5 text-center text-base flex" >{text}</div>
                <div className="w-full h-5/10 m-auto text-3xl text-center">{dia}</div>
            </div>
            <img src={icon} width={60} height={60} className="m-auto"/>
        </div>
    </div>
  )
}
