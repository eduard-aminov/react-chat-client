import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

const API = {
    error(e) {
        if (e.response) {
            return e.response.data
        }
        return {
            error: {
                code: 1,
                message: 'Something went wrong'
            }}
    },

    fetchDialogs() {
        return instance.get('dialogs')
    },

    fetchMessages(dialogId) {
        return instance.get(`messages?_id=${dialogId}`)
    },

    async register(payload) {
        try {
            const response = await instance.post('auth/register', {
                email: payload.email,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                password: payload.password
            })
            return response
        } catch (e) {
            return this.error(e)
        }
    },

    async login(payload) {
        try {
            const response = await instance.post('auth/login', {
                username: payload.username,
                password: payload.password
            })
            return response
        } catch (e) {
            return this.error(e)
        }
    }
}
export default API