import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/userAip";
import LocalStorageKey from "../../../constants/localStorageKey";

const initialState = {
    current: JSON.parse(localStorage.getItem(LocalStorageKey.USER)) || {},
    settings: {},
}

export const registerUser = createAsyncThunk('user/register', async (payload) => {
    const response = await userApi.register(payload)

    if (response?.jwt) {
        localStorage.setItem(LocalStorageKey.TOKEN, response.jwt)
        localStorage.setItem(LocalStorageKey.USER, JSON.stringify(response.user))
    }

    return response.user;
})

export const loginUser = createAsyncThunk('user/login', async (payload) => {
    const response = await userApi.login(payload)

    if (response?.jwt) {
        localStorage.setItem(LocalStorageKey.TOKEN, response.jwt)
        localStorage.setItem(LocalStorageKey.USER, JSON.stringify(response.user))
    }

    return response.user;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            // localStorage.removeItem(LocalStorageKey.TOKEN)
            // localStorage.removeItem(LocalStorageKey.USER)
            state.current = {}
        },
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, action) => {
            state.current = action.payload
        },

        [loginUser.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }
})

const { actions, reducer } = userSlice
export const { logout } = actions
export default reducer