import React, {useEffect, useRef, useState} from 'react'
import wavesSvg from '../../assets/img/audioWaves.svg'
import pauseSvg from '../../assets/img/pause.svg'
import playSvg from '../../assets/img/play.svg'
import {convertCurrentTime} from '../../utils'

const AudioMessage = ({audio}) => {
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
            const duration = audioElem.current.duration || 0
            setAudioCurrentTime(audioElem.current.currentTime)
            setAudioProgress((audioElem.current.currentTime / duration) * 100)
        },false)
    },[])

    const togglePlayAudio = () => {
        !isPlaying
            ? audioElem.current.play()
            : audioElem.current.pause()
    }

    return (
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
    )
}

export default AudioMessage