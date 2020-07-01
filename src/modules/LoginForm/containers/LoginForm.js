import LoginForm from '../components/LoginForm'

import {withFormik} from 'formik'

export default withFormik({
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

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(LoginForm)