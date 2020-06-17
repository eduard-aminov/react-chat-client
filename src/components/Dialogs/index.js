import {orderBy} from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import './Dialogs.scss'
import {DialogItem} from '../index'

const Dialogs = ({items, currentUserId}) => {
    return (
        <div className="dialogs">
            {orderBy(items, ['message.createdAt'], ['desc']).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={currentUserId === item.message.owner}
                    fullName={item.user.fullName}
                    avatar={item.user.avatar}
                    isOnline={item.user.isOnline}
                    lastMessage={item.message.lastMessage}
                    createdAt={item.message.createdAt}
                    unreadMessagesCount={item.message.unreadMessagesCount}
                    isRead={item.message.isRead}
                />
            ))}
        </div>
    )
}

Dialogs.propTypes = {
    currentUserId: PropTypes.number,
    items: PropTypes.array
}

export default Dialogs