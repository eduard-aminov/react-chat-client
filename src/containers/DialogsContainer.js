import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {setCurrentDialog} from '../store/actions'
import {getDialogs} from '../store/reducers/dialogsReducer'
import {Dialogs} from '../components/'

const DialogsContainer = ({ items, getDialogs, setCurrentDialog, currentDialog}) => {
    const [value, setValue] = useState('')
    const [filteredItems, setFilteredItems] = useState(items)

    // useEffect(() => {
    //     if (!items) {
    //         getDialogs()
    //     } else {
    //         setFilteredItems(items)
    //     }
    // },[getDialogs, setFilteredItems, items])

    const onSelectDialog = (id) => {
        setCurrentDialog(id)
    }

    const onChange = (val) => {
        setFilteredItems(
            items.filter(
                dialog => dialog.authorFullName.toLowerCase().indexOf(val.toLowerCase()) >= 0
            )
        )
        setValue(val)
    }

    return (
        <Dialogs
            items={filteredItems}
            value={value}
            onChange={onChange}
            getDialogs={getDialogs}
            onSelectDialog={onSelectDialog}
            currentDialog={currentDialog}
        />
    )
}

const mapStateToProps = (state) => ({
    items: state.dialogs.items,
    currentDialog: state.dialogs.currentDialog
})

export default connect(mapStateToProps, {getDialogs, setCurrentDialog})(DialogsContainer)
