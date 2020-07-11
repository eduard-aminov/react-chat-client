import {connect} from 'react-redux'
import {login} from '../../../store/reducers/authReducer'
import LoginForm from '../components/LoginForm'

import {withFormik} from 'formik'

const EnhancedForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),
    validate: values => {
        let errors = {}

        if (!values.username) {
            errors.username = 'Введите логин'
        }

        if (!values.password) {
            errors.password = 'Введите пароль'
        }

        return errors
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        props.login(values)
        setSubmitting(false)
    },

    displayName: 'LoginForm',
})(LoginForm)

const mapStateToProps = (state) => ({
    authErrors: state.auth.errors,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {login})(EnhancedForm)