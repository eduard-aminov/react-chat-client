import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './DialogItem.scss'
import {MessageStatusIcon} from '../'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'

const DialogItem = (props) => {
    const {
        fullName,
        avatar,
        isOnline,
        lastMessage,
        createdAt,
        unreadMessagesCount,
        isRead
    } = props

    const formatMessageTime = (time) => (
        isToday(time)
            ? format(time, 'HH:mm')
            : format(time, 'dd.MM.yyyy')
    )

    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': isOnline})}>
            <div className="dialogs__item-avatar">
                <img src={avatar} alt={`Avatar of ${fullName}`} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{fullName}</b>
                    <span>
                        {formatMessageTime(createdAt)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage}</p>
                    <MessageStatusIcon isMe={false} isReaded={isRead}/>
                    {unreadMessagesCount > 0 && (
                        <div className='dialogs__item-info-bottom-count'>
                            {
                                unreadMessagesCount > 9
                                    ? '+9'
                                    : unreadMessagesCount
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    fullName: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    lastMessage: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    unreadMessagesCount: PropTypes.number,
    isRead: PropTypes.bool,
}

export default DialogItem
