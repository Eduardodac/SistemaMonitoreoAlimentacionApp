import * as yup from 'yup';

export const LoginSchema= yup.object().shape({
    UserName: yup.string().required("El UserName es requerido"),
    Password: yup.string().required("La constraseña es requerida")
});