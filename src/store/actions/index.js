import {SET_CURRENT_DIALOG, SET_DIALOGS} from '../types'

export const setDialogs = (items) => ({
    type: SET_DIALOGS,
    payload: items
})

export const setCurrentDialog = (id) => ({
    type: SET_CURRENT_DIALOG,
    payload: id
})