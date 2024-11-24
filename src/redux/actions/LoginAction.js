import { createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../../services/ApiCalls"


const Login_User_Actions = "LoginUserActions"

export const LoginAction = createAsyncThunk(
    Login_User_Actions,
    async (data) => {
        console.log(data, "dataaction")
        try {
            const response = await login(data)
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    },
)