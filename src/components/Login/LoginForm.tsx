import { InputText } from 'primereact/inputtext'
import { useForm, Controller } from "react-hook-form";
import { classNames } from 'primereact/utils';

type DefaultType = {
    UserName: string,
    Password: string
}

export const LoginForm = () => {
    const defaultValues: DefaultType = {
        UserName: '',
        Password: ''
    }

    const { control, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: defaultValues
    });
    const onSubmit = (data: any) => {
        console.log(data)
        reset();
    }

    return (
        <article className="w-5/12 p-2 bg-fondo text-paletaIpn-guinda ">
            Inicio de Sesión
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-around mb-4">
                <div className="field">
                    <span className="p-float-label">
                        <Controller name="UserName" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                            <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                        )} />
                        <label htmlFor="UserName" className={classNames({ 'p-error': errors.UserName })}>Name*</label>
                    </span>
                </div>
            </form>
        </article>
    )
}
