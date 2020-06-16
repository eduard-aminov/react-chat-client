import React from 'react'
import './Dialogs.scss'
import {DialogItem} from '../index'

const Dialogs = ({items}) => {
    return (
        <div className="dialogs">
            {items.map(item => (
                <DialogItem
                    fullname={item.user.fullName}
                    avatar={item.user.avatar}
                    isOnline={item.user.isOnline}
                    lastMessage={item.message.lastMessage}
                    createdAt={item.message.createdAt}
                    unreadMessagesCount={item.message.unreadMessagesCount}
                    isReaded={item.message.isRead}
                />
            ))}
        </div>
    )
}

export default Dialogs
