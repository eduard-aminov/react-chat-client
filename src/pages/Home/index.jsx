import React from 'react'
import './Home.scss'
import { Message } from '../../components'

const Home = () => {
    return (
        <section className='home'>
            <Message
                avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'
                text='Дарова братан, че как дела?🤗'
                date={new Date('2020, 6, 13')}
                attachments={[
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
                ]}
            />
            <Message
                isMe={true}
                isReaded={true}
                avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'
                text='Все отлично, как сам?🤗'
                date={new Date('2020, 6, 12')}
            />
            <Message
                avatar='https://sun9-21.userapi.com/c855632/v855632293/123b1a/T3MtZPp64bQ.jpg?ava=1'
                text='Отлично)))'
                date={new Date('2020, 6, 13')}
            />
            <Message
                isMe={true}
                isReaded={false}
                avatar='https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1'
                text='Ну и хорошо)'
                date={new Date('2020, 6, 12')}
            />
        </section>
    )
}

export default Home