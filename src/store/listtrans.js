import {createSlice} from '@reduxjs/toolkit'
import {getAllTrans} from '../api/'
const slice = createSlice({
    name:'listtrans',
    initialState: [],
    reducers: {
        getItemTrans: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer
const {getItemTrans} = slice.actions
export const getTrans = () => async dispatch => {
    try {
        console.log('E Chuong!')
        const res = await getAllTrans()
        dispatch(getItemTrans(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}