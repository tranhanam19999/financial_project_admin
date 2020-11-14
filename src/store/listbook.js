import {createSlice} from '@reduxjs/toolkit'
import {getAllBook} from '../api/'
const slice = createSlice({
    name:'listbook',
    initialState: [],
    reducers: {
        getItemBook: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer
const {getItemBook} = slice.actions
export const getBook = () => async dispatch => {
    try {
        const res = await getAllBook()
        dispatch(getItemBook(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}