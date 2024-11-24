import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions/Reset';

const UserDatas = {
    LoginNumber: {},
    PersonalDetails: {},
    DocumentUpload: {},
    BankDetails: {},
    EmergencyContactDetails: {},
    userData: {},
}



export const LoginUserDataSlice = createSlice({
    name: 'LoginUserData',
    initialState: UserDatas,
    reducers: {
        saveUserData: (state, action) => {
            console.log('userData:', action.payload);
            state.userData = action.payload;
           },
        AddLoginData: (state, action) => {
            console.log('AddLoginData:', action.payload);
            state.LoginNumber = action.payload;
        },
        AddPersonalDetailsData: (state, action) => {
            console.log('AddPersonalDetailsData:', action.payload);
            state.PersonalDetails = action.payload;
        },
        AddDocumentUploadData: (state, action) => {
            console.log('AddDocumentUploadData:', action.payload);
            state.DocumentUpload = action.payload;
        },
        AddBankDetailsData: (state, action) => {
            console.log('AddBankDetailsData:', action.payload);
            state.BankDetails = action.payload;
        },
        AddEmergencyContactDetailsData: (state, action) => {
            console.log('AddEmergencyContactDetailsData:', action.payload);
            state.EmergencyContactDetails = action.payload;
        },
    },
    extraReducers(builder){
        builder.addCase(reset.toString(),(state, action) =>{
            return UserDatas;
        })
    }
});

export const {
    AddLoginData,
    AddPersonalDetailsData,
    AddDocumentUploadData,
    AddBankDetailsData,
    AddEmergencyContactDetailsData,
    saveUserData
} = LoginUserDataSlice.actions;

export default LoginUserDataSlice.reducer;
