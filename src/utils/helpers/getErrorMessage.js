const getErrorMessage = (errors) => {
    const errorMessages = {
        1: 'Что-то пошло не так',
        12: 'Неверные авторизационные данные',
        22: 'Пользователь не существует',
        21: 'Ошибка при создании пользователя',
        23: 'Пользователь уже существует',
        20: 'Пользователь не найден',
        30: 'Диалог не найден',
        31: 'Диалоги не найдены',
        40: 'Сообщение не найдено',
        41: 'Сообщения не найдены'
    }

    const result = []

    for (let error of errors) {
        result.push(errorMessages[error.code])
    }
    return result
}

export default getErrorMessage