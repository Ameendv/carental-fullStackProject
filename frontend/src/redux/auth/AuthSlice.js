import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './AuthService'

const vendor = JSON.parse(localStorage.getItem('vendor'))


const initialState = {
    vendor: vendor ? vendor : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Login

export const login = createAsyncThunk('auth/login', async (vendor, thunkAPI) => {
    try {
        return await authService.login(vendor)
    }
    catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
          state.isLoading = false
                state.isError = false
                state.isSuccess = false
                state.message = ''

        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
               
                 state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload

            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                    state.user = null
            })

    }
})


export const { reset } = authSlice.actions
export default authSlice.reducer