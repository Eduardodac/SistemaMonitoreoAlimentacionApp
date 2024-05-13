import { InputText } from "primereact/inputtext";
import { Controller, useFormContext } from "react-hook-form"

type InputProps =
    {
        name: string,
        id: string,
        label: string,
    }

export const InputTextCustom = ({ name, id, label }: InputProps) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="field w-3/4 m-auto pt-2 max-w-72">
            <span className="p-float-label">
                <Controller name={name} control={control} render={({ field }) => (
                    <InputText {...field} className={`${errors[id] ? 'p-invalid' : ''}`} />
                )} />
                <label htmlFor={name} className={`${errors[id] ? 'p-error' : ''}`}>{label}</label>

            </span>
            <div className='mt-1 w-full text-justify max-w-72'>
                {errors[id] ? ( <span className='text-sm text-red-500'>{errors[id]?.message?.toString()}</span>)
                : ( <span className='text-sm text-red-500'>&nbsp;</span> )
                } 
            </div>
        </div>
    )
}
