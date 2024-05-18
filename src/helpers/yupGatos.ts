import * as yup from 'yup';

export const CrearGatoSchema = yup.object().shape({
    nombre: yup.string().required("El nombre es requerido"),
    raza: yup.string(),
    sexo: yup.string(),
    edad: yup.number().required("Edad necesaria"),
});