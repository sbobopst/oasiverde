import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Registerform from '../components/userforms/Registerform'

const Register = () => {
    const schema = yup.object().shape({
        Name: yup.string().required("Nome obbligatorio"),
        Surname: yup.string().required("Cognome obbligatorio"),
        Email: yup.string().email("Email non valida").required("Email non valida"),
        Password: yup.string().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/,
            "Minimo 6 caratteri e una maiuscola"
        ).required(),
        confirmPassword: yup.string().oneOf([yup.ref("Password")], "Le Password non combaciano").required("Conferma richiesta"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <Registerform register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} />
    )
}

export default Register