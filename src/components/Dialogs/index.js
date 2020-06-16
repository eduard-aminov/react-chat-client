import React from 'react'
import PropTypes from 'prop-types'
import './Dialogs.scss'
import {DialogItem} from '../index'

const Dialogs = ({items}) => {
    return (
        <div className="dialogs">
            {items.map(item => (
                <DialogItem
                    key={item._id}
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
    items: PropTypes.array
}

export default Dialogs
