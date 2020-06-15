import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import './Message.scss'
import readedPng from '../../assets/img/readed.png'
import noreadedPng from '../../assets/img/noreaded.png'

const Message = (props) => {
    const {
        user,
        avatar,
        text,
        date,
        isMe,
        isReaded,
        isTyping,
        attachments
    } = props

    const messageClasses = classNames(
        {
            'message': true,
            'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1
        }
    )

    return (
        <div className={messageClasses}>
            <div className='message__content'>
                {isMe && ( isReaded
                    ? (
                        <img className='message__icon-readed' src={readedPng} alt="Readed icon"/>
                    )
                    : (
                        <img className='message__icon-noreaded' src={noreadedPng} alt="NotReaded icon"/>
                    ))}
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar of ${user.fullName}`} />
                </div>
                <div className="message__info">
                    {(text || isTyping) && (
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
                        </div>
                    )}
                    <div className="message__attachments">
                        {attachments &&
                        (
                            attachments.map(item => (
                                <div key={item.url} className="message__attachments-item">
                                    <img src={item.url} alt={item.image}/>
                                </div>
                            ))
                        )}
                    </div>
                    {date && (
                        <span className='message__date'>
                        {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                    </span>
                    )}
                </div>
            </div>
        </div>
    )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    user: PropTypes.object,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    attachments: PropTypes.array,
    isTyping: PropTypes.bool
}

export default Message
