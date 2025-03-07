
import { Dropdown } from 'primereact/dropdown';
import { Controller, useFormContext } from "react-hook-form"

type optionType = {
    name:string, 
    code: number | string,
}

type DropdownProps =
    {
        name: string,
        id: string,
        label: string,
        className?: string,
        disabled?: boolean,
        filter?: boolean,
        options: optionType[] 
    }

export const DropdownCustom = ({ name, id, label, className="", disabled=false, filter = false, options}: DropdownProps) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className={`field ${className}`}>
            <span className="p-float-label">
                <Controller name={name} control={control} render={({ field }) => (
                    <Dropdown
                        disabled={disabled} 
                        filter={filter}
                        options={options}
                        {...field}
                        optionLabel='name'
                        optionValue='code'
                        className={`${errors[id] ? 'p-invalid' : ''}`} 
                    />
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
