import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk("/user/login", async (data) => {
    const response = await axios.get(`${process.env.REACT_APP_MOCK_USER_BASE_URL}/?email=${data.email}`);
    console.log(response.data);
    console.log(response.data[0].password);
    console.log(response.data[0].email);
    if(response.data[0].email===data.email && response.data[0].password === data.password){
        console.log("success");
        localStorage.setItem('name',response.data[0].name);
        return response.data;
    }else{
        console.log("failed");
        return response.data;
    }
});

export { loginThunk };
