import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import FormOutlined from '@ant-design/icons/lib/icons/FormOutlined'
import TeamOutlined from '@ant-design/icons/lib/icons/TeamOutlined'
import React from 'react'
import {Button} from 'antd'
import './Home.scss'
import {Messages, OnlineStatus, WritingArea} from '../../components'
import DialogsContainer from '../../containers/DialogsContainer'

const Home = () => {
    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Button type='text' icon={<TeamOutlined />}/>
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <DialogsContainer />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-fullname">
                                Камиль Файзрахманов
                            </b>
                            <div className="chat__dialog-header-status">
                                <OnlineStatus online />
                            </div>
                        </div>
                        <Button type='text' icon={<EllipsisOutlined style={{fontSize: '20px'}} />}/>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages
                            currentUserId={0}
                            items={[
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 0,
                                        text: 'Дарова братан, че как дела?',
                                        attachments: [
                                            {
                                                filename: 'image.jpg',
                                                url: 'https://source.unsplash.com/50x50/?random=1&nature,water'
                                            },
                                            {
                                                filename: 'image.jpg',
                                                url: 'https://source.unsplash.com/50x50/?random=2&nature,water'
                                            },
                                            {
                                                filename: 'image.jpg',
                                                url: 'https://source.unsplash.com/50x50/?random=3&nature,water'
                                            }
                                        ],
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'audio',
                                        ownerId: 2,
                                        text: null,
                                        audio: 'https://freesound.org/data/previews/522/522594_1648170-lq.mp3',
                                        attachments: null,
                                        isRead: false,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'image',
                                        ownerId: 2,
                                        text: null,
                                        attachments:
                                            [{
                                                filename: 'image.jpg',
                                                url: 'https://source.unsplash.com/50x50/?random=3&nature,water'
                                            }],
                                        isRead: false,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                                {
                                    _id: Math.random(),
                                    user: {
                                        fullName: 'Рустам Шакуров',
                                        avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                    },
                                    message: {
                                        type: 'text',
                                        ownerId: 2,
                                        message: 'Дарова братан, че как дела?',
                                        attachments: null,
                                        isRead: true,
                                        createdAt: new Date()
                                    }
                                },
                            ]}
                        />
                    </div>
                    <div className="chat__dialog-input">
                        <WritingArea />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home