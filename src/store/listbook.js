import {createSlice} from '@reduxjs/toolkit'
import {getAllBook, createNewBook} from '../api/'
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
export const createBook = (book) => async dispatch => {
    try {
        const res = await createNewBook(book)
        if(res != null) {
            const allBooks = await getAllBook()
            dispatch(getItemBook(allBooks))
        }
    }
    catch (e) {
        console.log('Error while creating user ', e.message)
    }
}