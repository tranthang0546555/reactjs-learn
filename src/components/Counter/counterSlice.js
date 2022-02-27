import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 5,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, payload) => { return { value: state.value + 1 } },
        decrease(state, payload) { return { value: state.value - 1 } },
    }

})

const { actions, reducer } = counterSlice
export const { increase, decrease } = actions
export default reducer