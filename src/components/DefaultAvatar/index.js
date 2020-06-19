import React from 'react'
import PropTypes from 'prop-types'
import './DefaultAvatar.scss'

const DefaultAvatar = ({fullName}) => {
    const colors = {
        '#00008B': ['a','b', 'c', 'd', 'e','а', 'б', 'в', 'г', 'д', 'е', 'ё'],
        '#800080': ['f','g', 'h', 'i', 'j', 'ж', 'з', 'и', 'й', 'к', 'л', 'м'],
        '#FF0000': ['k', 'l', 'm', 'n', 'o','н', 'о', 'п', 'р', 'с', 'т', 'у'],
        '#008000': ['p', 'q', 'r', 's', 't', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ'],
        '#008080': ['u', 'v', 'w', 'x', 'y', 'z', 'ы', 'ь', 'э', 'ю', 'я']
    }

    const firstLetter = fullName[0].toUpperCase()

    const getAvatarColor = (symbol) => {
        return Object.keys(colors)
                .find(key => colors[key]
                .find(item => item === symbol.toLowerCase()))
    }

    return (
        <div className="default-avatar" style={{backgroundColor: getAvatarColor(firstLetter)}}>
            <span className='default-avatar-symbol'>{firstLetter}</span>
        </div>
    )
}

DefaultAvatar.propTypes = {
    fullName: PropTypes.string
}

export default DefaultAvatar
