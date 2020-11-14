import {createSlice} from '@reduxjs/toolkit'
import {getAdmin} from '../api'
const initialAdmin = localStorage.getItem('admin') ? 
    JSON.parse(localStorage.getItem('admin')) : null

const slice = createSlice({
    name: 'user',
    initialState: initialAdmin,
    reducers: {
        loginSuccess: (state,action) => {
            state = action.payload
            return state
        },
        logoutSuccess: (state,action) => {
            state = null
            return state
        }
    }
})
export default slice.reducer
const {loginSuccess, logoutSuccess} = slice.actions
export const login = (username, password) => async dispatch => {
    try {
        const res = await getAdmin(username,password)
        if(res[0] != null)
        {
            if(res[0]._id != null)
            {
                dispatch(loginSuccess(res[0]))
                localStorage.setItem('admin', JSON.stringify(res[0]))
            }
        }
    }
    catch (e) {
        return console.log('Error ', e.message)
    }
}
export const logout = () => async dispatch => {
    try {
        dispatch(logoutSuccess())
    }
    catch (e) {
        return console.log('Error ', e.message)
    }
}