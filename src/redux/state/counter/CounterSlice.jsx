import { createSlice } from "@reduxjs/toolkit";
export const counterslice = createSlice({
    name: 'My Counter App',
    initialState: {
        value: 0,
        alertness:'',
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
            state.alertness=''
        },
        decrement: (state) => {
            if (state.value == 0) {
                state.value = 0
                state.alertness = "Invalid Value";
            }
            else {
                state.value = state.value - 1;
            }
           
        }
    }
})
export const { increment, decrement } = counterslice.actions;
export default counterslice.reducer