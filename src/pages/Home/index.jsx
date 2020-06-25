import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import FormOutlined from '@ant-design/icons/lib/icons/FormOutlined'
import TeamOutlined from '@ant-design/icons/lib/icons/TeamOutlined'
import React from 'react'
import {Button} from 'antd'
import './Home.scss'
import {OnlineStatus, WritingArea} from '../../components'
import {DialogsContainer, MessagesContainer} from '../../containers'

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
                        <MessagesContainer/>
                        <div className="chat__dialog-input">
                            <WritingArea />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home