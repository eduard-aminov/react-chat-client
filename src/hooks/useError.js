import {useEffect} from 'react'
import {getErrorMessage, openNotification} from '../utils'

const useError = (errors = '') => {
    useEffect(() => {
        if (!errors.length) {
            return
        }
        const errorsList = getErrorMessage(errors)

        for (const message of errorsList) {
            openNotification('error', 'Ошибка', message)
        }
    }, [errors])
}

export default useError