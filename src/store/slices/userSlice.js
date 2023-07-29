import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        id: "",
    },
    reducers: {
        addUser(state, action) {
            state.email = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase();
        builder.addCase();
        builder.addCase();
    },
});

export const { userReducer } = userSlice.reducer;
