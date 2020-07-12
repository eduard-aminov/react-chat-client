import {useCallback, useEffect, useState} from 'react'
import useLocalStorage from './useLocalStorage'

const useAuth = () => {
    const storageName = 'userData'
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [value, setValue] = useLocalStorage(storageName)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        setValue({userId, token})
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(value)
        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    return { login, logout, token, userId }
}

export default useAuth