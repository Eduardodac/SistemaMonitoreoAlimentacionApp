import { useForm, FormProvider } from "react-hook-form";
import { Button } from 'primereact/button';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { LoginSchema } from "../../helpers/yupLogin";

type DefaultType = {
    UserName: string,
    Password: string
}

export const Login = () => {
    const defaultValues: DefaultType = {
        UserName: '',
        Password: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(LoginSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        console.log(data)
        reset();
    }

    return (
        <article className="w-5/12 p-2 bg-fondo py-10">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-5">
                    <div className='text-xl mb-14 text-paletaIpn-guinda' >Inicio de Sesión</div>
                    <InputTextCustom name='UserName' id='UserName' />
                    <InputTextCustom name='Password' id='Password' />
                    <div className='w-3/4 m-auto'>
                        <Button type="submit" label="Submit" className={'mt-2'} outlined />
                    </div>
                    <section className='w-3/4 m-auto text-sm'>
                        <div>¿Perdiste tu&nbsp;
                            <a href='/usuario/registrar' className="underline text-blue-500">contraseña</a>
                            ?</div>
                        <div>¿No tienes cuenta?&nbsp;
                            <a href='/usuario/registrar' className="underline text-blue-500">Registrate.</a>
                        </div>
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
