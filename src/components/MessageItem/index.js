import React, {useEffect, useRef, useState} from 'react'
import PropTypes, {object} from 'prop-types'
import classNames from 'classnames'
import {MessageStatusIcon, Time} from '../'
import './MessageItem.scss'
import wavesSvg from '../../assets/img/audioWaves.svg'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'
import {convertCurrentTime} from '../../utils'

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

    const [isPlaying, setIsPlaying] = useState(false)
    const [audioCurrentTime, setAudioCurrentTime] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0)
    const audioElem = useRef(null)

    useEffect(() => {
        if (!audioElem.current) {
            return
        }

        audioElem.current.addEventListener('playing', () => {
            setIsPlaying(true)
        },false)

        audioElem.current.addEventListener('pause', () => {
            setIsPlaying(false)
        },false)

        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false)
            setAudioProgress(0)
            setAudioCurrentTime(0)
        },false)

        audioElem.current.addEventListener('timeupdate', () => {
            const duration = audioElem.current && audioElem.current.duration || 0
            setAudioCurrentTime(audioElem.current.currentTime)
            setAudioProgress((audioElem.current.currentTime / duration) * 100)
        },false)
    },[])

    const togglePlayAudio = () => {
        !isPlaying
            ? audioElem.current.play()
            : audioElem.current.pause()
    }

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
                            {isAudio && (
                              <div className="message__audio">
                                  <audio ref={audioElem} src={audio} preload='auto'></audio>
                                  <div className="message__audio-progress" style={{width: `${audioProgress}%`}}></div>
                                  <div className="message__audio-info">
                                      <div className="message__audio-btn">
                                          <button onClick={togglePlayAudio}>
                                              {isPlaying
                                                  ? <img src={pauseSvg} alt="Pause"/>
                                                  : <img src={playSvg} alt="Play"/>
                                              }
                                          </button>
                                      </div>
                                      <div className="message__audio-wave">
                                          <img src={wavesSvg} alt="Wave"/>
                                          <img src={wavesSvg} alt="Wave"/>
                                          <img src={wavesSvg} alt="Wave"/>
                                      </div>
                                      <span className="message__audio-duration">
                                          {convertCurrentTime(audioCurrentTime)}
                                      </span>
                                  </div>
                              </div>
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
