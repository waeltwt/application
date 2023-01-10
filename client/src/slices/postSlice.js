import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { token } from 'morgan';


//ADD Post 
export const addNewPost = createAsyncThunk(
    'post/addnewpost',
    async (info, { rejectWithValue, dispatch }) => {
        console.log(info);
          const formData = new FormData();
        //  formData.append('file', info.file)
         formData.append('info', JSON.stringify(info.postInfo))
        try {
            const res = await axios.post('http://localhost:5000/api/post/addpost', formData,
                {
                    headers: { token: localStorage.getItem('token') },
                }
            );
            dispatch(getPosts());
            return res.data

        } catch (error) {
            return rejectWithValue(
                error.response.data.message
                    ? error.response.data.message
                    : error.response.data.errors.password.msg

            );
        }

    }
);

// // GET POST LISTE
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (info, { rejectWithValue }) => {

        try {
            const res = await axios.get('http://localhost:5000/api/post')
            return res.data

        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }

    });




const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        postErrors: null,
        postsErrors: null,
        post: {},
    },

    extraReducer: {

        [addNewPost.pending]: (state) => {
            state.loading = true
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.loading = false
            state.postList = action.payload
            state.postErrors = null
        },
        [addNewPost.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.payload
        },
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.postList = action.payload
            state.postsErrors = null
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.payload
        }

    },
})

export default postSlice.reducer;
