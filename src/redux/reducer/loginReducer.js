import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../action/getProductsAction';
import { LoginAction } from '../actions/LoginAction';
import { reset } from '../actions/Reset'; // Import the reset action

const initialState = {
    data: null,
    isLoading: "",
    error: null,
}

const loginReducerSlice = createSlice({
    name: 'loginReducer',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoginAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(LoginAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Login failed';
            })
            // Add a case to handle reset action
            .addCase(reset, (state) => {
                return initialState; // Reset to the initial state
            });
    },
});

export default loginReducerSlice.reducer;
