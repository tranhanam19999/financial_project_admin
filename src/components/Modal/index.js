import React from 'react'
import TransModal from './TransModal'
import UserModal from './UserModal'
import BookModal from './BookModal'
const ModalInit = (props) => {
    switch (props.collection) {
        case 'user':
            return <UserModal {...props} />
        case 'tran':
            return <TransModal {...props} />
        case 'book':
            return <BookModal {...props} /> 
    }
}
export default ModalInit