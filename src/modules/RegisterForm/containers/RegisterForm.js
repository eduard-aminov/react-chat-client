import {withFormik} from 'formik'
import {connect} from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import { register } from '../../../store/reducers/authReducer'

const EnhancedForm = withFormik({
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
        let errors = {}

        if (!values.firstName) {
            errors.firstName = 'Введите имя'
        } else if (!/^[A-ZА-Я]+$/iu.test(values.firstName)) {
            errors.firstName = 'Некорректное имя'
        }

        if (!values.lastName) {
            errors.lastName = 'Введите фамилию'
        } else if (!/^[A-ZА-Я]+$/iu.test(values.lastName)) {
            errors.lastName = 'Некорректная фамилия'
        }

        if (!values.username) {
            errors.username = 'Введите логин'
        } else if (!/^[a-z0-9]+$/.test(values.username)) {
            errors.password2 = 'Некорректный логин'
        }

        if (!values.email) {
            errors.email = 'Введите email'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.password2 = 'Некорректный email'
        }

        if (!values.password) {
            errors.password = 'Введите пароль'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
            errors.password = 'Слишком легкий пароль'
        }

        if (!values.password2) {
            errors.password2 = 'Введите пароль'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password2)) {
            errors.password2 = 'Слишком легкий пароль'
        }
        else if (values.password !== values.password2) {
            errors.password2 = 'Пароли не совпадают'
        }

        return errors
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        props.register(values)
        setSubmitting(false)
    },

    displayName: 'RegisterForm',
})(RegisterForm)

const mapStateToProps = (state) => ({
    isRegistered: state.auth.isRegistered,
    authErrors: state.auth.errors,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {register})(EnhancedForm)