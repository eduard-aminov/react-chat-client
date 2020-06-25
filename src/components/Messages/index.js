import {orderBy} from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import {MessageItem, Preloader} from '../../components'
import './Messages.scss'

const Messages = ({items, currentUserId, messagesRef, messagesIsFetching}) => {

    return (
        (messagesIsFetching)
            ? (
                <Preloader text='Загрузка сообщений' />
            )
            : (
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
    )
}

Messages.propTypes = {
    currentUserId: PropTypes.number,
    items: PropTypes.array
}

export default Messages
