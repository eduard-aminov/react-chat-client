import {Empty, Input} from 'antd'
import {orderBy} from 'lodash'
import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import './Dialogs.scss'
import {DialogItem} from '../index'

const Dialogs = ({items, currentUserId}) => {
    const [value, setValue] = useState('')
    const [filteredItems, setFilteredItems] = useState(Array.from(items))

    const onChange = (val) => {
        setFilteredItems(
            items.filter(
                dialog => dialog.user.fullName.toLowerCase().indexOf(val.toLowerCase()) >= 0
            )
        )
        setValue(val)
    }

    return (
        <div className="dialogs">
            <div className="dialogs-search">
                <Input.Search
                    onChange={e => onChange(e.target.value)}
                    value={value}
                    placeholder='Поиск среди контактов'
                />
            </div>
            {filteredItems.length ? (
                orderBy(filteredItems, ['message.createdAt'], ['desc']).map(item => (
                    <DialogItem
                        key={item._id}
                        isMe={currentUserId === item.message.owner}
                        fullName={item.user.fullName}
                        avatar={item.user.avatar}
                        isOnline={item.user.isOnline}
                        lastMessage={item.message.lastMessage}
                        createdAt={item.message.createdAt}
                        unreadMessagesCount={item.message.unreadMessagesCount}
                        isRead={item.message.isRead}
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
