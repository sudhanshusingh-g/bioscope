import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        loading:false,
        isAuthenticated:false,
        error:null
    },
    reducers:{
        loginSuccess:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
        },
        loginFailure:(state,action)=>{
            state.error=action.payload;
        },
        loginpending:(state)=>{
            state.loading=true;
        },
        logout:(state)=>{
            state.user=null;
        }
    }
})

export const {loginFailure,loginSuccess,loginpending,logout}=userSlice.actions;
export default userSlice.reducer;