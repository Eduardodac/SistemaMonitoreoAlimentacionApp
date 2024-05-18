import { InputNumber } from 'primereact/inputnumber';
import { Controller, useFormContext } from "react-hook-form"

type InputProps =
    {
        name: string,
        id: string,
        label: string,
        className?: string,
        disabled?: boolean
    }

export const InputNumberCustom = ({ name, id, label, className="", disabled=false}: InputProps) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className={`field w-3/4 m-auto pt-2 ${className}`}>
            <span className="p-float-label">
                <Controller name={name} control={control} render={({ field }) => (
                    <InputNumber  
                    disabled={disabled} 
                    inputId="minmax"
                    id={field.name}
                    value={field.value} 
                    onChange={(e) => field.onChange(e.value)}
                    min = {0}
                    max = {25}
                    
                    className={`${errors[id] ? 'p-invalid' : ''}`} />
                    
                )} />
                <label htmlFor={name} className={`${errors[id] ? 'p-error' : ''}`}>{label}</label>

            </span>
            <div className={`mt-1 w-full text-justify ${className}`}>
                {errors[id] ? ( <span className='text-sm text-red-500'>{errors[id]?.message?.toString()}</span>)
                : ( <span className='text-sm text-red-500'>&nbsp;</span> )
                } 
            </div>
        </div>
    )
}
