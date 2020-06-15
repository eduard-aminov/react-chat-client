import React from 'react'
import classNames from 'classnames'
import './DialogItem.scss'
import {MessageStatusIcon, Time} from '../../components'

const DialogItem = ({user, unreadMessagesCount}) => {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className="dialogs__item-avatar">
                {/*<img src={user.avatar} alt={`Avatar of ${user.fullname}`} />*/}
                <img src="https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1" alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Камиль файзрахманов</b>
                    <span>
                        {/*<Time date={new Date(2020, 1, 30)} />*/}
                        13:01
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Какой-то текстКакой-то текстКакой-то текст...Какой-то текст...Какой-то текст...</p>
                    <MessageStatusIcon isMe={false} isReaded={true}/>
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

export default DialogItem
