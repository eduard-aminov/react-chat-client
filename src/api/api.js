import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

const API = {
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
            return e.response.data
        }
    }
}
export default API