import avatar from "../../assets/avatar.jpg";
import { FileUpload } from 'primereact/fileupload';
import { Avatar } from 'primereact/avatar';

export const ImagenCuenta = () => {

    const uploadImage = ()=>{

    }
  return (
    <article className='flex flex-col items-center'>
        <Avatar image={avatar} shape="circle" style={{width:'200px', height: '200px'}}/>
        <FileUpload 
            mode="basic" 
            name="demo[]" 
            url="/api/upload" 
            accept="image/*" 
            maxFileSize={1000000} 
            onUpload={uploadImage} 
            auto 
            chooseLabel="Cambiar Imagen" />
    </article>
  )
}
