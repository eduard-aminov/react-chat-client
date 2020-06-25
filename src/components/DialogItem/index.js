import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {DefaultAvatar, MessageStatusIcon} from '../'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'
import './DialogItem.scss'

const DialogItem = (props) => {
    const {
        id,
        fullName,
        avatar,
        lastMessage,
        createdAt,
        unreadMessagesCount,
        isOnline,
        isMe,
        isRead,
        onSelectDialog,
        currentDialog
    } = props

    const formatMessageTime = (time) => {
        const toDateTime = new Date(time)
        return isToday(toDateTime)
            ? format(toDateTime, 'HH:mm')
            : format(toDateTime, 'dd.MM.yyyy')
    }

    const dialogItemClasses = classNames({
        'dialogs__item': true,
        'dialogs__item--online': isOnline,
        'dialogs__item--selected': currentDialog === id
    })

    return (
        <div
            onClick={() => onSelectDialog(id)}
            className={dialogItemClasses}
        >
            <div className="dialogs__item-avatar">
                {avatar
                    ? <img src={avatar} alt={`Avatar of ${fullName}`} />
                    : <DefaultAvatar fullName={fullName} />
                }
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
                    {isMe && <MessageStatusIcon isRead={isRead}/>}
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
    createdAt: PropTypes.string,
    unreadMessagesCount: PropTypes.number,
    isRead: PropTypes.bool,
    isMe: PropTypes.bool
}

export default DialogItem
