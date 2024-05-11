import { InputText } from "primereact/inputtext";
import { Controller, useFormContext } from "react-hook-form"

type InputProps = 
{
    name: string,
    id : string
}

export const InputTextCustom = ({name, id}:InputProps) => {
    const {control} = useFormContext();

    return (
        <div className="field w-3/4 m-auto">
            <span className="p-float-label">
                <Controller name={name} control={control} render={({field}) => (
                    <InputText {...field} className={''} />
                )} />
                <label htmlFor={name} >{name}</label>
            </span>
        </div>
    )
}
