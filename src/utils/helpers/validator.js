const validator = (type, value) => {
    const name = !/^[A-ZА-Я]+$/iu.test(value)
    const email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    const username = !/^[a-z0-9]+$/.test(value)
    const password = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)

    switch(type) {
        case 'name':
            return name
        case 'email':
            return email
        case 'username':
            return username
        case 'password':
            return password
        default: return
    }
}

const baseValidate = ({validationType, validationValue, onEmptyErrorMessage, onValidationErrorMessage}) => {
        if (!validationValue) {
            return onEmptyErrorMessage
        } else if (validator(validationType, validationValue)) {
            return onValidationErrorMessage
        }
}

export default baseValidate