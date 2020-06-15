import {withFormik} from 'formik'
import RegisterForm from '../components/RegisterForm'

export default withFormik({
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Введите email адрес';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Некорректный email адрес ';
        }

        if (!values.password) {
            errors.password = 'Введите пароль'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
            errors.password = 'Слишком легкий пароль.'
        }

        if (!values.password2) {
            errors.password2 = 'Введите пароль'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password2)) {
            errors.password2 = 'Слишком легкий пароль.'
        }
        else if (values.password !== values.password2) {
            errors.password2 = 'Пароли не совпадают'
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);