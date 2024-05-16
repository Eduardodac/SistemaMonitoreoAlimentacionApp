import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";
import { RegistroSchema } from "../../helpers/yupLogin";
import { PasswordCustom } from "../../shared/Form/PasswordCustom";
import { useAuthStore } from "../../store/authStore";
import { crearCuentasApi } from "../../services/httpclient";
import { Toast } from 'primereact/toast';
import { useRef } from "react";

type DefaultType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const Register = () => {
    const { jwt, setJWT } = useAuthStore();
    const CuentasApi = crearCuentasApi(jwt);

    const toast = useRef<Toast>(null);
    const showError = (message:string) => {
        toast.current?.show({severity:'error', summary: 'Error', detail:message, life: 4000});
    }
    
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

    const { handleSubmit} = methods;

    const onSubmit = (data: any) => {
        CuentasApi.apiCuentasRegistrarPost(data).then(response => {
            const jwtRecibido = response.data.token ?  response.data.token : null;
            setJWT(jwtRecibido);
        }).catch((errors)=>{
            const error = errors.response.data[0].description? errors.response.data[0].description: "Error";
            showError(error);
            console.log(errors)
        })
    }
    return (
        <article className="w-5/12 p-2 bg-fondo py-10">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-3">
                    <div className='text-xl mb-8 text-paletaIpn-guinda' >Registro</div>
                    <InputTextCustom name='username' id='username' label='Username'  className="max-w-72"/>
                    <InputTextCustom name='email' id='email' label='Correo Electrónico' className="max-w-72"/>
                    <PasswordCustom name='password' id='password' label='Contraseña' className="max-w-72" />
                    <PasswordCustom name='confirmPassword' id='confirmPassword' label='Confirmar Contraseña' className="max-w-72" />
                    <div className='w-3/4 m-auto '>
                        <Button type="submit" label="Submit" className={'mt-2'} outlined />
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}
