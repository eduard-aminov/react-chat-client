import React from 'react'
import './Home.scss'
import {DialogItem} from '../../components'

const Home = () => {
    return (
        <section className='home'>
            <div className="dialogs">
                <DialogItem
                    user={{
                            fullname: 'Камиль Файзрахманов',
                            isOnline: true
                        }}
                    unreadMessagesCount={999}
                />
                <DialogItem
                    user={{
                        fullname: 'Камиль Файзрахманов',
                        isOnline: true
                    }}
                    unreadMessagesCount={0}
                />
                <DialogItem
                    user={{
                        fullname: 'Камиль Файзрахманов',
                        isOnline: true
                    }}
                    unreadMessagesCount={0}
                />
                <DialogItem
                    user={{
                        fullname: 'Камиль Файзрахманов',
                        isOnline: true
                    }}
                    unreadMessagesCount={0}
                />
                <DialogItem
                    user={{
                        fullname: 'Камиль Файзрахманов',
                        isOnline: true
                    }}
                    unreadMessagesCount={0}
                />
            </div>
            {/*<Dialogs*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            user: {*/}
            {/*                fullname: 'Камиль Файзрахманов',*/}
            {/*                avatar: null,*/}
            {/*            },*/}
            {/*            message: {*/}
            {/*                text: 'Дарова братан, че как дела?',*/}
            {/*                isReaded: false,*/}
            {/*                createdAt: new Date()*/}
            {/*            }*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            {/*<Message*/}
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
            {/*<Message*/}
            {/*    avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'*/}
            {/*    text='Все отлично, как сам?🤗'*/}
            {/*    date={new Date('2020, 6, 12')}*/}
            {/*    isMe*/}
            {/*    isReaded*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    text='Отлично)))'*/}
            {/*    date={new Date('2020, 6, 13')}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'*/}
            {/*    text='Ну и хорошо)'*/}
            {/*    date={new Date('2020, 6, 12')}*/}
            {/*    isMe*/}
            {/*    isReaded={false}*/}
            {/*/>*/}
            {/*<Message*/}
            {/*    avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'*/}
            {/*    isTyping*/}
            {/*/>*/}
            {/*<Message*/}
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