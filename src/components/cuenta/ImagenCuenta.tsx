import avatar from "../../assets/avatar.jpg";
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../store/cuentaStore";
import { crearCuentasApi } from "../../services/httpclient";
import { useAuthStore } from "../../store/authStore";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";

export const ImagenCuenta = () => {

    const fileUploadRef = useRef<FileUpload>(null);
    const { jwt } = useAuthStore();
    const CuentasApi = crearCuentasApi(jwt);

    const { userData, setUserData } = useUserStore();
    const [imagen, setImagen] = useState(avatar);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        setImagen(userData.imagenCuenta.imagenUsuario);
    }, [userData.imagenCuenta])


    const uploadImage = (e:FileUploadHandlerEvent)=>{
        CuentasApi.apiCuentasImagenPut(e.files[0]).then((response)=>{
            const URL = response.data? response.data : "";
            setUserData({ imagenCuenta:{ imagenUsuario: URL}})
            showSuccess("Carga de imagen exitoso");
        }).catch(error=>{
            try{
                showError(error.response.data.errors.Imagen[0]);
            }catch{
                showError("Carga de Imagen fallido");
            }
        })
        onClear();
    }

    const showSuccess = (message: string) => {
        toast.current?.show({severity:'info', summary: 'Éxito', detail:message, life: 3000});
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
        <Image src={imagen} width="200" alt="profile-picture" className="mb-5 rounded-md" preview/>
        <FileUpload 
            ref={fileUploadRef}
            mode="basic" 
            name="demo[]" 
            accept="image/*" 
            maxFileSize={100000000000} 
            uploadHandler={(event)=>{uploadImage(event)}} 
            customUpload 
            auto 
            chooseLabel="Cambiar Imagen" />
    </article>
  )
}
