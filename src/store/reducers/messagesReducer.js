import API from '../../api/api'
import {setIsFetching, setMessages} from '../actions'
import {SET_IS_FETCHING, SET_MESSAGES} from '../types'

const initialState = {
    items: null,
    isFetching: false
}

const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_MESSAGES:
            return {...state, items: payload}
        case SET_IS_FETCHING:
            return {...state, isFetching: payload}
        default: return state
    }
}

export const getMessages = (dialogId) => (dispatch) => {
    dispatch(setIsFetching(true))
    API.fetchMessages(dialogId)
        .then(res => {
            dispatch(setMessages(res.data))
        }).catch(() => {
        dispatch(setIsFetching(false))
    })
    dispatch(setIsFetching(false))
}

export default messagesReducer