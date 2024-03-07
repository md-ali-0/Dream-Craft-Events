import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const userLogin = createAsyncThunk(
    'user/login',
    async (data) => {
        const axios = useAxiosPublic();
        const request = await axios.post("/login-user", data);
        //console.log(request);
        const response = await request.data
        localStorage.setItem('user', JSON.stringify(response))
        return response
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true,
                state.user = null,
                state.error = null
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false,
                    state.user = action.payload,
                    state.error = null
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false,
                    state.user = null,
            //console.log(action.error.message)
            if (action.error.message === 'Request failed with status code 500') {
                    state.error = 'Access Denied'
                } else {
                    state.error = action.error.message
                }
            })
    }
});

export default userSlice.reducer;
