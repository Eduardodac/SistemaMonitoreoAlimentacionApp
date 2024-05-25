import * as yup from 'yup';

export const HorarioSchema = yup.object().shape({
    hora: yup
        .date()
        .required("Inserte la hora")
});