import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        activeUser:(state,action)=>{
            state.user=action.payload;
        },
        logoutUser:(state)=>{
            state.user=null
        }
        
    }
})

export const {activeUser,logoutUser}=userSlice.actions;
export default userSlice.reducer;