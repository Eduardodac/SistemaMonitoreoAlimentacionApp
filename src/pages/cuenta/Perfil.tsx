import { ClavesForm } from '../../components/cuenta/ClavesForm';
import { ImagenCuenta } from '../../components/cuenta/ImagenCuenta';
import { InformacionForm } from '../../components/cuenta/InformacionForm';
export const Perfil = () => {

    return (
        <article className='pb-10'>
            <ImagenCuenta/>
            <ClavesForm/>
            <InformacionForm/>
        </article>
    )
}
