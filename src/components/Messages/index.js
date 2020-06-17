import {orderBy} from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import {MessageItem} from '../../components'
import './Messages.scss'

const Messages = ({items, currentUserId}) => {
    return (
        <div className="messages">
            {orderBy(items, ['message.createdAt'], ['desc']).map(item => (
                <MessageItem
                    key={item._id}
                    isMe={currentUserId === item.message.ownerId}
                    fullName={item.user.fullName}
                    avatar={item.user.avatar}
                    messageType={item.message.type}
                    text={item.message.message}
                    audio={item.message.audio}
                    attachments={item.message.attachments}
                    createdAt={item.message.createdAt}
                    isRead={item.message.isRead}
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
