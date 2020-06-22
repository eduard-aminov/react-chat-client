import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9999/'
})

const API = {
    fetchDialogs() {
        return instance.get('dialogs').then(res => res)
    }
}

export default API