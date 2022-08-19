import { createSlice } from "@reduxjs/toolkit";


export const userLogged=createSlice({
    name:"logged",
    initialState:false,
    reducers:{
        logged:(state)=>{
           return state=true
        }
    }
})

export const {logged}=userLogged.actions
export default userLogged.reducer;
