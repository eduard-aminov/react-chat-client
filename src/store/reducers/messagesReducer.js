import API from '../../api/'
import {setDialogs} from '../actions'
import {SET_CURRENT_DIALOG, SET_DIALOGS} from '../types'

const initialState = {
    items: [],
    currentDialog: null
}

const dialogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DIALOGS:
            return {...state, items: payload}
        case SET_CURRENT_DIALOG:
            return {...state, currentDialog: payload}
        default: return state
    }
}

export const getDialogs = () => (dispatch) => {
    API.fetchDialogs()
        .then(res => {
            dispatch(setDialogs(res.data))
        })
}

export default dialogsReducer