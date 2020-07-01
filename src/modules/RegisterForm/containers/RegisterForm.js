import {withFormik} from 'formik'
import {baseValidate} from '../../../utils'
import RegisterForm from '../components/RegisterForm'

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        password2: ''
    }),
    validate: values => {
        let errors = {
            firstName: baseValidate({
                validationType: 'name',
                validationValue: values['firstName'],
                onEmptyErrorMessage: 'Введите имя',
                onValidationErrorMessage: 'Некорректное имя',
            }),
            lastName: baseValidate({
                validationType: 'name',
                validationValue: values['lastName'],
                onEmptyErrorMessage: 'Введите фамилию',
                onValidationErrorMessage: 'Некорректная фамилия',
            }),
            email: baseValidate({
                validationType: 'email',
                validationValue: values['email'],
                onEmptyErrorMessage: 'Введите email',
                onValidationErrorMessage: 'Некорректный email',
            }),
            username: baseValidate({
                validationType: 'username',
                validationValue: values['username'],
                onEmptyErrorMessage: 'Введите логин',
                onValidationErrorMessage: 'Некорректный логин',
            }),
            password: baseValidate({
                validationType: 'password',
                validationValue: values['password'],
                onEmptyErrorMessage: 'Введите пароль',
                onValidationErrorMessage: 'Слишком лёгкий пароль',
            }),
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

        return errors
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm)