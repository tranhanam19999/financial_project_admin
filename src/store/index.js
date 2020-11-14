import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import user from './user'
import listbook from './listbook'
import listuser from './listuser'
import listtrans from './listtrans'

const reducer = combineReducers({
    user,
    listbook,
    listuser,
    listtrans,
})

const store = configureStore({
    reducer,
})
export default store