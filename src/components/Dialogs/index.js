import {Empty, Input} from 'antd'
import {orderBy} from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import './Dialogs.scss'
import {DialogItem} from '../index'

const Dialogs = ({items, value, onChange, onSelectDialog}) => {
    const currentUserId = 0

    return (
        <div className="dialogs">
            <div className="dialogs-search">
                <Input.Search
                    onChange={e => onChange(e.target.value)}
                    value={value}
                    placeholder='Поиск среди контактов'
                />
            </div>
            {items.length ? (
                orderBy(items, ['message.createdAt'], ['desc']).map(item => (
                    <DialogItem
                        key={item._id}
                        id={item._id}
                        isMe={currentUserId === item.authorId}
                        fullName={item.authorFullName}
                        avatar={item.authorAvatar}
                        isOnline={item.authorIsOnline}
                        lastMessage={item.lastMessage}
                        createdAt={item.createdAt}
                        unreadMessagesCount={item.unreadMessagesCount}
                        isRead={item.isRead}
                        onSelectDialog={onSelectDialog}
                    />
                ))
            ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description='Ничего не найдено'
                />
            )}
        </div>
    )
}

Dialogs.propTypes = {
    currentUserId: PropTypes.number,
    items: PropTypes.array
}

export default Dialogs
