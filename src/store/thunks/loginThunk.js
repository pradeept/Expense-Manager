import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk("/user/login", async () => {
    const response = await axios.get('https://64c4b54567cfdca3b660e9e4.mockapi.io/users');
    return response;
});

export { loginThunk };
