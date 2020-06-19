import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import toDate from 'date-fns/toDate'
import ruLocale from 'date-fns/locale/ru'

const Time = ({ date }) => formatDistanceToNow(toDate(date), {addSuffix: true, locale: ruLocale})

Time.propTypes = {
    date: PropTypes.instanceOf(Date)
}

export default Time
