import {orderBy} from 'lodash'
import React, {useCallback, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

import {MessageItem} from '../../components'
import './Messages.scss'

const Messages = ({items, currentUserId}) => {

    const messagesRef = useRef(null)

    useEffect(() => {
        if (!messagesRef) {
            return
        }
        
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight - messagesRef.current.clientHeight
    },[items])

    return (
        <div className="messages" ref={messagesRef}>
            {orderBy(items, ['message.createdAt'], ['desc']).map(item => (
                <MessageItem
                    key={Math.random()}
                    isMe={currentUserId === item.authorId}
                    fullName={item.authorFullName}
                    avatar={item.authorAvatar}
                    // messageType={item.message.type}
                    message={item.message}
                    // audio={item.message.audio}
                    attachments={item.attachments}
                    createdAt={item.createdAt}
                    isRead={item.isRead}
                />
            ))}
        </div>
    )
}

Messages.propTypes = {
    currentUserId: PropTypes.number,
    items: PropTypes.array
}

export default Messages
