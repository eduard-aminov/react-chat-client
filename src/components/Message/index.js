import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import './Message.scss'
import readedPng from '../../assets/img/readed.png'
import noreadedPng from '../../assets/img/noreaded.png'

const Message = ({user, avatar, text, date, isMe, isReaded}) => {
    return (
        <div className={classNames('message', {'message--isme': isMe})}>
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
                    <div className='message__bubble'>
                        <p className='message__text'>
                            {text}
                        </p>
                    </div>
                    <span
                        className='message__date'
                    >
                    {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                </span>
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
    date: PropTypes.instanceOf(Date)
}

export default Message
