import { createAction, createSlice } from '@reduxjs/toolkit';
// Step 1: Create a synchronous action
export const logoutUser = createAction('user/logout');

const logoutSlice = createSlice({
    name: 'logout',
    initialState: { users: ['Alice', 'Bob'] },
    reducers: {},
    extraReducers: (builder) => {
        // This runs when logoutUser() is dispatched
        builder.addCase(logoutUser, (state) => {
            state.users = []; // clear all users
        });
    },
});

export default logoutSlice.reducer;