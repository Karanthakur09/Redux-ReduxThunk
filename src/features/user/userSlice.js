import { createSlice } from '@reduxjs/toolkit';
import {promoteToAdmin} from '../admin/adminSlice.js'

const userSlice=createSlice({
    name:'user',
    initialState:['Alice','Bob'],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(promoteToAdmin,(state,action)=>{
             // remove promoted user from users list
            return state.filter((user)=>user!==action.payload)
        })
    }
})


export default userSlice.reducer;