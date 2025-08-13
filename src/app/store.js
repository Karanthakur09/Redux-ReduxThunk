import { configureStore } from '@reduxjs/toolkit'
// import todoReducer from '../features/todo/todoSlice.js'
import logoutSlice from '../features/logout.js'
import jokeSlice from '../features/joke.js'

export const store = configureStore({
    reducer: {
        // user:userReducer,
        // admin:adminReducer
        logout: logoutSlice,
        joke: jokeSlice,
    }
});

