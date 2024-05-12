import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    UserName: yup.string().required("El UserName es requerido"),
    Password: yup.string().required("La constraseña es requerida")
});

export const RegistroSchema = yup.object().shape({
    UserName: yup.string().required("El UserName es requerido"),
    Email: yup
    .string()
    .required("El email es requerido")
    .email("Debe ser un correo válido")
    .matches(/^(?!.*@[^,]*,)/, "Debe ser un correo válido"),
    Password: yup
        .string()
        .required('Ingrese una contraseña')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Debe contener 8 caracteres, una mayuscula, una minúscula, un número y un caracter especial"
        ),
    ConfirmPassword: yup
        .string()
        .required("Confirme la contraseña")
        .oneOf([yup.ref("Password")], "Las contraseñas no coinciden")
});