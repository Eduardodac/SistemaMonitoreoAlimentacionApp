import { ClavesForm } from '../../components/cuenta/ClavesForm';
import { ImagenCuenta } from '../../components/cuenta/ImagenCuenta';
import { InformacionForm } from '../../components/cuenta/InformacionForm';
export const Perfil = () => {

    return (
        <article>
            <ImagenCuenta/>
            <ClavesForm/>
            <InformacionForm/>
        </article>
    )
}
