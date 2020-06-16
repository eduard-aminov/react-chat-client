import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './DialogItem.scss'
import {MessageStatusIcon, Time} from '../../components'

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

    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': isOnline})}>
            <div className="dialogs__item-avatar">
                <img src={avatar} alt={`Avatar of ${fullName}`} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{fullName}</b>
                    <span>
                        {/*<Time date={new Date(2020, 1, 30)} />*/}
                        {createdAt}
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
    createdAt: PropTypes.string,
    unreadMessagesCount: PropTypes.number,
    isRead: PropTypes.bool,
}

export default DialogItem
