import {create} from 'zustand';

// Interfaces
export interface IInformacionForm {
    apellidoMaterno: string | null;
    apellidoPaterno: string | null;
    nombre: string | null;
}

export interface IClavesForm {
    userName: string;
    email: string;
}

export interface IImagenUsuario {
    imagenUsuario: string;
}

export interface IUserData {
    imagenCuenta:IImagenUsuario,
    clavesForm:IClavesForm,
    informacionForm:IInformacionForm
}


interface UserStore {
  userData: IUserData;
  setUserData: (data: Partial<IUserData>) => void;
}

// Crear el store
const useUserStore = create<UserStore>((set) => ({
  userData: {
    imagenCuenta:{
        imagenUsuario: ""
    },
    clavesForm:{
        userName: "",
        email: ""
    },
    informacionForm:{
        apellidoMaterno: "",
        apellidoPaterno: "",
        dosificadorId: "",
        nombre: ""
    }
},
  setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),
}));

export default useUserStore;