import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9999/'
})

const API = {
    fetchDialogs() {
        return instance.get('dialogs')
    },
    fetchMessages(dialogId) {
        return instance.get(`messages?_id=${dialogId}`)
    },
}

export default API