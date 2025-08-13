import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: ['Karan'],
    reducers: {
        promoteToAdmin: (state, action) => {
            state.push(action.payload)
        }
    },
})

export const { promoteToAdmin } = adminSlice.actions;
export default adminSlice.reducer;