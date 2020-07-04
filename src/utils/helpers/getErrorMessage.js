const getErrorMessage = (errors) => {
    const errorMessages = {
        10: 'Пользователь существует'
    }

    const result = []

    for (let error of errors) {
        result.push(errorMessages[error.code])
    }
    return result
}

export default getErrorMessage