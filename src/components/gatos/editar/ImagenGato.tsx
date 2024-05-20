import { useEffect, useRef, useState } from 'react'
import avatar from "../../../assets/cat-avatar.webp";
import { useAuthStore } from '../../../store/authStore';
import { crearGatosApi } from '../../../services/httpclient';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';
import { Image } from "primereact/image";
import useGatoStore from '../../../store/gatoStore';
import { useParams } from 'react-router-dom';

export const ImagenGato = () => {

    const fileUploadRef = useRef<FileUpload>(null);
    const { jwt } = useAuthStore();
    const GatosApi = crearGatosApi(jwt);
    const { gatoData, setGatoData } = useGatoStore();
    const { gatoId } = useParams();

    const [imagen, setImagen] = useState(avatar);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        if (gatoData.imagen.imagenGato != "") {
            setImagen(gatoData.imagen.imagenGato);
        } else {
            setImagen(avatar);
        }
    }, [gatoData.gato])


    const uploadImage = (e: FileUploadHandlerEvent) => {
        if (gatoId != null) {
            GatosApi.apiGatosImagenGatoIdPut(gatoId, e.files[0]).then((response:any) => {
                setGatoData({
                    imagen: {
                        imagenGato: response.data
                    }
                })
                showSuccess("Carga de imagen exitoso");
            }).catch(error => {
                try {
                    showError(error.response.data.errors.Imagen[0]);
                } catch {
                    showError("Carga de Imagen fallido");
                }
            })
            onClear();
        }

    }

    const showSuccess = (message: string) => {
        toast.current?.show({ severity: 'info', summary: 'Éxito', detail: message, life: 3000 });
    }
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const onClear = () => {
        fileUploadRef.current?.clear();
    };

    return (
        <article className='flex flex-col items-center'>
            <Toast ref={toast} />
            <Image src={imagen} width="200" alt="profile-picture" className="mb-5 rounded-md" preview />
            <FileUpload
                ref={fileUploadRef}
                mode="basic"
                name="demo[]"
                accept="image/*"
                maxFileSize={100000000000}
                uploadHandler={(event) => { uploadImage(event) }}
                customUpload
                auto
                chooseLabel="Cambiar Imagen" />
        </article>
    )
}
