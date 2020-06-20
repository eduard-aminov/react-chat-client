import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import FormOutlined from '@ant-design/icons/lib/icons/FormOutlined'
import TeamOutlined from '@ant-design/icons/lib/icons/TeamOutlined'
import React from 'react'
import {Button, Input} from 'antd'
import './Home.scss'
import {Dialogs, Messages, OnlineStatus, WritingArea} from '../../components'

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
                        <Dialogs
                            currentUserId={0}
                            items={[
                                {
                                    "_id": "5eec4db3f732baa6afada8a7",
                                    "user": {
                                        "fullName": "Walters Huffman",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 8,
                                        "lastMessage": "Aliqua proident incididunt reprehenderit sit excepteur.",
                                        "isRead": true,
                                        "unreadMessagesCount": 8,
                                        "createdAt": "Tue Jan 12 1993 00:53:05 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3325da75971c25245",
                                    "user": {
                                        "fullName": "Chambers Mccarthy",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 1,
                                        "lastMessage": "Nisi enim consequat eu cillum.",
                                        "isRead": false,
                                        "unreadMessagesCount": 2,
                                        "createdAt": "Sat Aug 23 2014 22:59:20 GMT+0400 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3f618117bb38fb481",
                                    "user": {
                                        "fullName": "Marie Ruiz",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 7,
                                        "lastMessage": "Deserunt pariatur aute aute veniam ut culpa et.",
                                        "isRead": false,
                                        "unreadMessagesCount": 9,
                                        "createdAt": "Mon Nov 09 1970 00:40:35 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db352c8debc3cae3180",
                                    "user": {
                                        "fullName": "Mai Roman",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 3,
                                        "lastMessage": "Cillum et deserunt in mollit.",
                                        "isRead": true,
                                        "unreadMessagesCount": 2,
                                        "createdAt": "Sat Jul 31 1976 12:51:01 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db36c05a00ffe0948f3",
                                    "user": {
                                        "fullName": "Cathryn Harrell",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 5,
                                        "lastMessage": "Consequat ipsum in culpa elit aliqua enim.",
                                        "isRead": true,
                                        "unreadMessagesCount": 8,
                                        "createdAt": "Fri Mar 27 2009 14:18:52 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3354b7edf7cf99fba",
                                    "user": {
                                        "fullName": "Keller Santos",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 1,
                                        "lastMessage": "Cupidatat laborum laboris quis anim deserunt tempor elit proident ea quis sit esse dolor occaecat.",
                                        "isRead": true,
                                        "unreadMessagesCount": 5,
                                        "createdAt": "Mon Oct 05 1970 09:48:21 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3a46a597d37d7c503",
                                    "user": {
                                        "fullName": "Hahn Sims",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 5,
                                        "lastMessage": "Mollit cupidatat eu ea eiusmod ad magna sit amet esse.",
                                        "isRead": true,
                                        "unreadMessagesCount": 4,
                                        "createdAt": "Fri Sep 03 1993 13:42:51 GMT+0400 (Москва, летнее время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3c68ababd47739381",
                                    "user": {
                                        "fullName": "Dickson Wilkerson",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 0,
                                        "lastMessage": "Id veniam irure duis id velit voluptate et aliqua aliquip aute excepteur cupidatat consequat.",
                                        "isRead": true,
                                        "unreadMessagesCount": 0,
                                        "createdAt": "Wed Nov 28 1990 21:16:38 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db389ef8934911fd432",
                                    "user": {
                                        "fullName": "Carole Nicholson",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 6,
                                        "lastMessage": "Ipsum enim officia laboris ipsum.",
                                        "isRead": true,
                                        "unreadMessagesCount": 8,
                                        "createdAt": "Thu Nov 29 1990 16:16:21 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3faa2f13db8cf2d54",
                                    "user": {
                                        "fullName": "Gonzales Gentry",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 8,
                                        "lastMessage": "Aute esse incididunt do enim.",
                                        "isRead": true,
                                        "unreadMessagesCount": 2,
                                        "createdAt": "Fri Dec 14 1990 00:26:44 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db31f55a057df54e41c",
                                    "user": {
                                        "fullName": "Rachel Mckee",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 9,
                                        "lastMessage": "Cupidatat consequat irure eiusmod consectetur ex anim commodo excepteur aliqua nostrud officia in pariatur.",
                                        "isRead": false,
                                        "unreadMessagesCount": 4,
                                        "createdAt": "Fri Aug 31 2012 19:05:40 GMT+0400 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3c6fdc908e4416e3c",
                                    "user": {
                                        "fullName": "Betsy Sharpe",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 9,
                                        "lastMessage": "Id occaecat quis non et tempor pariatur dolore quis occaecat quis exercitation eiusmod.",
                                        "isRead": false,
                                        "unreadMessagesCount": 9,
                                        "createdAt": "Thu Feb 05 1981 08:39:01 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db36a5a457f7f41103d",
                                    "user": {
                                        "fullName": "Jacklyn Hansen",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 9,
                                        "lastMessage": "Duis excepteur cillum duis cupidatat occaecat tempor ut aliquip nulla ipsum.",
                                        "isRead": true,
                                        "unreadMessagesCount": 6,
                                        "createdAt": "Thu Apr 25 1991 12:38:05 GMT+0300 (Москва, летнее время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db348d728ee0a9a90e1",
                                    "user": {
                                        "fullName": "Stone Rodgers",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 2,
                                        "lastMessage": "Et elit duis laboris et duis ipsum deserunt cupidatat do eu officia sint cupidatat.",
                                        "isRead": true,
                                        "unreadMessagesCount": 0,
                                        "createdAt": "Fri Nov 01 2002 07:14:05 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db36ef71e2080a962c6",
                                    "user": {
                                        "fullName": "Penelope Webster",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 10,
                                        "lastMessage": "Adipisicing consequat ea ut in minim.",
                                        "isRead": false,
                                        "unreadMessagesCount": 0,
                                        "createdAt": "Wed Aug 03 2011 16:33:53 GMT+0400 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3b470a45cb2b81010",
                                    "user": {
                                        "fullName": "Bond Buckley",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 6,
                                        "lastMessage": "Velit fugiat tempor nisi Lorem labore tempor fugiat ullamco esse consectetur id.",
                                        "isRead": false,
                                        "unreadMessagesCount": 8,
                                        "createdAt": "Wed May 23 2018 04:34:22 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3051bcab15b15b680",
                                    "user": {
                                        "fullName": "Mcmillan Walter",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 6,
                                        "lastMessage": "Officia consectetur id elit dolor veniam anim sint eu anim do.",
                                        "isRead": true,
                                        "unreadMessagesCount": 6,
                                        "createdAt": "Mon Sep 13 1993 23:51:32 GMT+0400 (Москва, летнее время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db33f8b563c9cf3e8d6",
                                    "user": {
                                        "fullName": "Floyd Gross",
                                        "avatar": null,
                                        "isOnline": true
                                    },
                                    "message": {
                                        "owner": 4,
                                        "lastMessage": "Ut laboris consequat reprehenderit commodo nulla excepteur pariatur qui elit.",
                                        "isRead": true,
                                        "unreadMessagesCount": 1,
                                        "createdAt": "Sat Aug 09 1975 20:28:56 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db3fdca599f6ab7490c",
                                    "user": {
                                        "fullName": "Jocelyn Rush",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 4,
                                        "lastMessage": "Exercitation culpa reprehenderit et consequat aute ipsum adipisicing sint amet et.",
                                        "isRead": false,
                                        "unreadMessagesCount": 9,
                                        "createdAt": "Mon Nov 12 2007 07:06:49 GMT+0300 (Москва, стандартное время)"
                                    }
                                },
                                {
                                    "_id": "5eec4db31e14d12c6727128d",
                                    "user": {
                                        "fullName": "Byrd Goodman",
                                        "avatar": null,
                                        "isOnline": false
                                    },
                                    "message": {
                                        "owner": 1,
                                        "lastMessage": "Tempor in id aute tempor ipsum consectetur deserunt irure aliqua irure sint fugiat adipisicing.",
                                        "isRead": true,
                                        "unreadMessagesCount": 3,
                                        "createdAt": "Sat Jan 21 1989 17:15:23 GMT+0300 (Москва, стандартное время)"
                                    }
                                }
                                // {
                                //     _id: Math.random(),
                                //     user: {
                                //         fullName: 'Камиль Файзрахманов',
                                //         avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                //         isOnline: true
                                //     },
                                //     message: {
                                //         owner: 1,
                                //         lastMessage: 'Дарова братан, че как дела?',
                                //         isRead: false,
                                //         unreadMessagesCount: 0,
                                //         createdAt: new Date('2020, 06, 15')
                                //     }
                                // },
                                // {
                                //     _id: Math.random(),
                                //     user: {
                                //         fullName: 'Рустам Шакуров',
                                //         avatar: 'https://sun9-66.userapi.com/c855036/v855036084/23d7fc/IKHLGx8ruYU.jpg?ava=1',
                                //         isOnline: false
                                //     },
                                //     message: {
                                //         owner: 2,
                                //         lastMessage: 'Дарова братан, че как дела?',
                                //         isRead: true,
                                //         unreadMessagesCount: 0,
                                //         createdAt: new Date()
                                //     }
                                // }
                            ]}
                        />
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