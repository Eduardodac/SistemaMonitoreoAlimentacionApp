import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";
import { RegistroSchema } from "../../helpers/yupLogin";
import { PasswordCustom } from "../../shared/Form/PasswordCustom";

type DefaultType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const Register = () => {
    const defaultValues: DefaultType = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegistroSchema),
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
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-3">
                    <div className='text-xl mb-8 text-paletaIpn-guinda' >Registro</div>
                    <InputTextCustom name='username' id='username' label='Username'/>
                    <InputTextCustom name='email' id='email' label='Correo Electrónico' />
                    <PasswordCustom name='password' id='password' label='Contraseña' />
                    <PasswordCustom name='confirmPassword' id='confirmPassword' label='Confirmar Contraseña' />
                    <div className='w-3/4 m-auto '>
                        <Button type="submit" label="Submit" className={'mt-2'} outlined />
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}
