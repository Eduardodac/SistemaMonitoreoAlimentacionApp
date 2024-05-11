import { useForm, FormProvider } from "react-hook-form";
import { Button } from 'primereact/button';
import { InputTextCustom } from '../../shared/Form/InputTextCustom';


type DefaultType = {
    UserName: string,
    Password: string
}

export const LoginForm = () => {
    const defaultValues: DefaultType = {
        UserName: '',
        Password: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        defaultValues: defaultValues,
    });

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        console.log(data)
        reset();
    }

    return (
        <article className="w-5/12 p-2 bg-fondo text-paletaIpn-guinda py-10">

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-7">
                    <div className='text-xl'>Inicio de Sesión</div>
                    <InputTextCustom name='UserName' id='' />
                    <InputTextCustom name='Password' id='' />
                    <div className='w-3/4 m-auto'>
                        <Button type="submit" label="Submit" className={'mt-2'} outlined />
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}
