import {SET_CURRENT_DIALOG, SET_DIALOGS, SET_IS_FETCHING, SET_MESSAGES} from '../types'

export const setDialogs = (items) => ({
    type: SET_DIALOGS,
    payload: items
})

export const setCurrentDialog = (id) => ({
    type: SET_CURRENT_DIALOG,
    payload: id
})

export const setMessages = (items) => ({
    type: SET_MESSAGES,
    payload: items
})

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING,
    payload: isFetching
})