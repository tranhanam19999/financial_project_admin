import {createSlice} from '@reduxjs/toolkit'
import {getAllUser} from '../api/'
const slice = createSlice({
    name:'listuser',
    initialState: [],
    reducers: {
        getItemUser: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer
const {getItemUser} = slice.actions
export const getUser = () => async dispatch => {
    try {
        const res = await getAllUser()
        dispatch(getItemUser(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}