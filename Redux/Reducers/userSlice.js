import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataAPI } from "../../Services/Operations/UserAPI";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        token:null,
        refreshToken:null,
        error:null,
        loading:false,
        success:false,
        message:null,
    },
    reducers:{
        setUser:(state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUserThroughToken.fulfilled, (state, action)=> {
            state.user = action.payload
        })
    }
})

export const getUserThroughToken = createAsyncThunk('user/token', async()=>{
    return await UserDataAPI()
})

export default userSlice.reducer
export const {} = userSlice.actions