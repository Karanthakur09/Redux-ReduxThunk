import { configureStore} from '@reduxjs/toolkit'
// import todoReducer from '../features/todo/todoSlice.js'
import adminReducer from '../features/admin/adminSlice.js'
import userReducer from '../features/user/userSlice.js'

export const store=configureStore({
    reducer:{
        user:userReducer,
        admin:adminReducer
    }
});

