import React from 'react'
import PropTypes, {object} from 'prop-types'
import classNames from 'classnames'
import {MessageStatusIcon, Time} from '../'
import AudioMessage from './AudioMessage'
import './MessageItem.scss'

const MessageItem = (props) => {
    const {
        fullName,
        avatar,
        messageType,
        text,
        audio,
        attachments,
        createdAt,
        isMe,
        isRead
    } = props

    const isTyping = messageType === 'isTyping'
    const isAudio = messageType === 'audio'

    const messageClasses = classNames(
        {
            'message': true,
            'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--is-audio': messageType === 'audio',
            'message--image': attachments && attachments.length === 1
        }
    )

    return (
        <div className={messageClasses}>
            <div className='message__content'>
                {isMe && <MessageStatusIcon isRead={isRead} />}
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar of ${fullName}`} />
                </div>
                <div className="message__info">
                    {(isAudio || text || isTyping) && (
                        <div className='message__bubble'>
                            {text && (
                                <p className='message__text'>
                                    {text}
                                </p>
                            )}
                            {isTyping && (
                                <div className="message__typing">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            )}
                            {(isAudio) && (
                              <AudioMessage audio={audio}/>
                            )}
                        </div>
                    )}
                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map(item => (
                                <div key={item.url} className="message__attachments-item">
                                    <img src={item.url} alt={item.image}/>
                                </div>
                            ))}
                        </div>
                    )}
                    {createdAt && (
                        <span className='message__date'>
                        <Time date={createdAt} />
                    </span>
                    )}
                </div>
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    fullName: PropTypes.string,
    avatar: PropTypes.string,
    messageType: PropTypes.string,
    text: PropTypes.string,
    audio: PropTypes.string,
    attachments: PropTypes.arrayOf(object),
    createdAt: PropTypes.instanceOf(Date),
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
}

export default MessageItem
