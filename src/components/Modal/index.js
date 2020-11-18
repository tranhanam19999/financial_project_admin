import React from 'react'
import TransModal from './TransModal'
import UserModal from './UserModal'
import BookModal from './BookModal'
import ApproveModal from './ApproveModal'
const ModalInit = (props) => {
    switch (props.collection) {
        case 'user':
            return <UserModal {...props} />
        case 'tran':
            return <TransModal {...props} />
        case 'book':
            return <BookModal {...props} /> 
        case 'approve':
            return <ApproveModal {...props} />
    }
}
export default ModalInit