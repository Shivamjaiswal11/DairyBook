import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../actions/Reset'



const initialState = {
    language: "en"
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, actions) => {
            state.language = actions.payload
        },
    },
    extraReducers(builder){
        builder.addCase(reset.toString(),(state, action) =>{
            return initialState;
        })
    }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer