import React from 'react'
import './Home.scss'
import {Dialogs, Messages} from '../../components'

const Home = () => {
    return (
        <section className='home'>
            <Dialogs
                currentUserId={0}
                items={[
                    {
                        _id: Math.random(),
                        user: {
                            fullName: 'Камиль Файзрахманов',
                            avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                            isOnline: true
                        },
                        message: {
                            owner: 1,
                            lastMessage: 'Дарова братан, че как дела?',
                            isRead: false,
                            unreadMessagesCount: 0,
                            createdAt: new Date('2020, 06, 15')
                        }
                    },
                    {
                        _id: Math.random(),
                        user: {
                            fullName: 'Рустам Шакуров',
                            avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                            isOnline: false
                        },
                        message: {
                            owner: 2,
                            lastMessage: 'Дарова братан, че как дела?',
                            isRead: true,
                            unreadMessagesCount: 0,
                            createdAt: new Date()
                        }
                    }
                ]}
            />
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
                    }
                ]}
            />
            {/*<Messages*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    text='Дарова братан, че как дела?🤗'*/}
            {/*    date={new Date('2020, 6, 13')}*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/50x50/?random=1&nature,water'*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/50x50/?random=2&nature,water'*/}
            {/*        },*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/50x50/?random=3&nature,water'*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Messages*/}
            {/*    avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'*/}
            {/*    text='Все отлично, как сам?🤗'*/}
            {/*    date={new Date('2020, 6, 12')}*/}
            {/*    isMe*/}
            {/*    isReaded*/}
            {/*/>*/}
            {/*<Messages*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    text='Отлично)))'*/}
            {/*    date={new Date('2020, 6, 13')}*/}
            {/*/>*/}
            {/*<Messages*/}
            {/*    avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'*/}
            {/*    text='Ну и хорошо)'*/}
            {/*    date={new Date('2020, 6, 12')}*/}
            {/*    isMe*/}
            {/*    isReaded={false}*/}
            {/*/>*/}
            {/*<Messages*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    isTyping*/}
            {/*/>*/}
            {/*<Messages*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    attachments={[*/}
            {/*        {*/}
            {/*            filename: 'image.jpg',*/}
            {/*            url: 'https://source.unsplash.com/50x50/?random=4&nature,water'*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
        </section>
    )
}

export default Home