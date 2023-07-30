import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/loginThunk";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        id: "",
        showFailure:false,
        showLoading:false
    },
    reducers: {
        addUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        setshowFailure(state,action){
            state.showFailure = !state.showFailure;
        }
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.pending,(state,action)=>{
            state.showLoading = true
        })
        builder.addCase(loginThunk.fulfilled,(state,action)=>{
            state.showLoading = false
        })
        builder.addCase(loginThunk.rejected,(state,action)=>{
            state.showFailure = true;
        })
    },
});

export const userReducer = userSlice.reducer;
