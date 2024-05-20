import { create } from 'zustand';



export interface ICollar {
    collarId: string;
    fechaSalida: string;
    fechaActivacion: string;
    numeroRegistro: string;
    estatusActivacion: boolean;

}

export interface IGato {
    nombre: string;
    raza: string;
    sexo: string;
    edad: number;
}

export interface IImagen {
    imagenGato: string;
}

export interface IGatoData {
    gato: IGato,
    imagen: IImagen
    collar: ICollar
}

interface GatoState {
    gatoData: IGatoData;
    setGatoData: (data: Partial<IGatoData>) => void;
}

const useGatoStore = create<GatoState>((set) => ({
    gatoData: {
        gato: {
            nombre: "",
            raza: "",
            sexo: "",
            edad: 0,
        },
        imagen: {
            imagenGato:""
        },
        collar: {
            collarId: "",
            fechaSalida: "",
            fechaActivacion: "",
            numeroRegistro: "",
            estatusActivacion: false
        }
    },
    setGatoData: (data) => set((state) => ({ gatoData: { ...state.gatoData, ...data } })),
}));

export default useGatoStore;