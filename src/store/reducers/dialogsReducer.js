import API from '../../api/api'
import {setDialogs, setIsFetching} from '../actions'
import {SET_CURRENT_DIALOG, SET_DIALOGS, SET_IS_FETCHING} from '../types'

const initialState = {
    items: null,
    currentDialog: null,
    isFetching: false
}

const dialogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DIALOGS:
            return {...state, items: payload}
        case SET_CURRENT_DIALOG:
            return {...state, currentDialog: payload}
        case SET_IS_FETCHING:
            return {...state, isFetching: payload}
        default: return state
    }
}

export const getDialogs = () => (dispatch) => {
    dispatch(setIsFetching(true))
    API.fetchDialogs()
        .then(res => {
            dispatch(setDialogs(res.data))
        })
        .catch(() => {
            dispatch(setIsFetching(false))
        })
    dispatch(setIsFetching(false))
}

export default dialogsReducer