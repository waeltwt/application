import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


//register a new user
export const register = createAsyncThunk(
    'user/register',
    async (userInput, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/api/user/register', userInput)

            return data

        } catch (errors) {
            return rejectWithValue(errors)
        }

    }
)
//login as  a user
export const login = createAsyncThunk(
    'user/login',
    async (userInput, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/api/user/login', userInput)
            return data

        } catch (errors) {
            return rejectWithValue(errors.response.data)
        }

    }
)
//load user information
export const loadUser = createAsyncThunk(
    'user/loadUser',
    async (info, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/api/user/loaduser',
                { headers: { token: localStorage.getItem('token') } });
            return data;
        } catch (errors) {
            return rejectWithValue(errors.response.data)

        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {},
        isAuth: Boolean(localStorage.getItem('isAuth')) || false,
        loading: false,
        token: localStorage.getItem('token') || null,
        errors: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
            state.isAuth = false
            state.token = null
            state.userInfo = {}

        }

    },
    extraReducer: {
        // ! register handler
        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('isAuth', true)
            state.isAuth = true
            state.errors = null
        },
        [register.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.payload

        },
        // ! login handler
        [login.pending]: (state) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.errors = null
            state.token = action.payload.token
            state.isAuth = true
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('isAuth', true)
        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.payload
        },
        // ! load user info  handler
        [loadUser.pending]: (state) => {
            state.loading = true
        },
        [loadUser.fulfilled]: (state, action) => {
            state.loading = false
            state.errors = null
            state.userInfo = action.payload
        },
        [loadUser.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.payload
        },
    },
})

export default userSlice.reducer
export const { logout } = userSlice.actions