import React, {useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {Messages} from '../components'
import {getMessages} from '../store/reducers/messagesReducer'

const MessagesContainer = ({ items, getMessages, currentDialog, messagesIsFetching}) => {
    const messagesRef = useRef(null)

    useEffect(() => {
        if (!messagesRef.current) {
            return
        }

        messagesRef.current.scrollTop = messagesRef.current.scrollHeight - messagesRef.current.clientHeight
    },[items])

    useEffect(() => {
        if (currentDialog === null) {
            return
        }

        getMessages(currentDialog)
    },[getMessages, currentDialog])

    return (
        <Messages
            items={items}
            messagesRef={messagesRef}
            messagesIsFetching={messagesIsFetching}
        />
    )
}

const mapStateToProps = (state) => ({
    items: state.messages.items,
    currentDialog: state.dialogs.currentDialog,
    messagesIsFetching: state.messages.isFetching
})

export default connect(mapStateToProps, {getMessages})(MessagesContainer)