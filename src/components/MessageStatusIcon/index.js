import React from 'react'
import PropTypes from 'prop-types'
import noreadedPng from '../../assets/img/noreaded.png'
import readedPng from '../../assets/img/readed.png'

const MessageStatusIcon = ({isMe, isReaded}) => {
    return (
        isMe &&
        ( isReaded
        ? ( <img className='message__icon-readed' src={readedPng} alt="Readed icon"/> )
        : ( <img className='message__icon-noreaded' src={noreadedPng} alt="NotReaded icon"/>)
        )
    )
}

MessageStatusIcon.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default MessageStatusIcon
