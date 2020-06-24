import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'

const Time = ({ date }) => {
    const toDateTime = new Date(date)
    return formatDistanceToNow(toDateTime, {addSuffix: true, locale: ruLocale})
}

Time.propTypes = {
    date: PropTypes.string
}

export default Time
