import { Password } from "primereact/password";
import { Controller, useFormContext } from "react-hook-form"

type InputProps =
    {
        name: string,
        id: string
    }

export const PasswordCustom = ({ name, id }: InputProps) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="field w-3/4 m-auto pt-2 max-w-72">
            <span className="p-float-label">
                <Controller name={name} control={control} render={({ field }) => (
                    <Password feedback={false} {...field} className={`${errors[id] ? 'p-invalid' : ''}`} />
                )} />
                <label htmlFor={name} className={`${errors[id] ? 'p-error' : ''}`}>{name}</label>

            </span>
            <div className='mt-1 w-full text-justify max-w-72'>
                {errors[id] ? ( <span className='text-sm text-red-500'>{errors[id]?.message?.toString()}</span>)
                : ( <span className='text-sm text-red-500'>&nbsp;</span> )
                } 
            </div>
        </div>
    )
}
