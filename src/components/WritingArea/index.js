import {AudioOutlined, CameraOutlined, SmileOutlined, SendOutlined} from '@ant-design/icons'
import {Button, Input} from 'antd'
import React, {useState} from 'react'

import { UploadField } from '@navjobs/upload'
import './WritingArea.scss'

const WritingArea = () => {
    const [isTyping, setIsTyping] = useState('')

    return (
        <div className="writing-area">
            <div className="writing-area__smile-btn">
                <Button type='text' icon={<SmileOutlined />}/>
            </div>
            <Input
                onChange={e => setIsTyping(e.target.value)}
                size='large'
                placeholder='Введите текст'
            />
            <div className="writing-area__actions">
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: 'photos'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png,.bmp,.gif,.webp',
                        multiple: 'multiple'
                    }}
                >
                    <Button type='text' icon={<CameraOutlined />}/>
                </UploadField>
                {!isTyping
                    ? <Button type='text' icon={<AudioOutlined />}/>
                    : <Button type='text' icon={<SendOutlined />}/>
                }
            </div>
        </div>
    )
}

export default WritingArea
