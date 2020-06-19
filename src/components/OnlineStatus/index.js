import React from 'react'
import PropTypes from 'prop-types'
import './OnlineStatus.scss'
import classNames from 'classnames'

const OnlineStatus = ({online}) => {
    const statusClasses = classNames('status', {'status--online': online})

    return (
        <div className={statusClasses}>
            {online ? 'онлайн' : 'офлайн'}
        </div>
    )
}

OnlineStatus.propTypes = {
    online:PropTypes.bool
}

export default OnlineStatus
