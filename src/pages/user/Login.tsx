import { useForm, FormProvider } from "react-hook-form";
import { Button } from 'primereact/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { LoginSchema } from "../../helpers/yupLogin";
import { useAuthStore } from "../../store/authStore";
import { crearCuentasApi } from "../../services/httpclient";


type DefaultType = {
    username: string,
    password: string
}


export const Login = () => {
    const { jwt, setJWT } = useAuthStore();
    const navigate = useNavigate();

    const CuentasApi = crearCuentasApi(jwt);

    const defaultValues: DefaultType = {
        username: '',
        password: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(LoginSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: DefaultType) => {
        console.log(data);
        CuentasApi.apiCuentasLoginPost(data).then(response => {
            const jwtRecibido = response.data.token ?  response.data.token : null;
            setJWT(jwtRecibido);
        }).then(()=>{
            navigate("/home");
        }).catch((errors)=>{
            console.log(errors)
        })
    }

    return (
        <article className="w-5/12 p-2 bg-fondo py-10">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-5">
                    <div className='text-xl mb-14 text-paletaIpn-guinda' >Inicio de Sesión</div>
                    <InputTextCustom name='username' id='username' />
                    <InputTextCustom name='password' id='password' />
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
