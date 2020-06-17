const convertCurrentTime = (number) => {
    const mins = Math.floor(number / 60)
    const secs = (number % 60).toFixed()
    return `${mins < 0 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
}

export default convertCurrentTime