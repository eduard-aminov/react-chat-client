import React from 'react'
import PropTypes from 'prop-types'
import notReadPng from '../../assets/img/notRead.png'
import readPng from '../../assets/img/read.png'

const MessageStatusIcon = ({isRead}) => {
    return (
        isRead
            ? ( <img className='message__icon-read' src={readPng} alt="Read icon"/> )
            : ( <img className='message__icon-notRead' src={notReadPng} alt="NotRead icon"/>)
    )
}

MessageStatusIcon.propTypes = {
    isRead: PropTypes.bool
}

export default MessageStatusIcon
