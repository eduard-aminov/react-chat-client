import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Messages} from '../components'
import {getMessages} from '../store/reducers/messagesReducer'

const MessagesContainer = ({ items, getMessages, currentDialog}) => {

    useEffect(() => {
        if (currentDialog === null) {
            return
        }

        getMessages(currentDialog)
    },[getMessages, currentDialog])

    return (
        <Messages
            items={items}
        />
    )
}

const mapStateToProps = (state) => ({
    items: state.messages.items,
    currentDialog: state.dialogs.currentDialog
})

export default connect(mapStateToProps, {getMessages})(MessagesContainer)
