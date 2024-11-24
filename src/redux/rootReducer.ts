import { combineReducers } from "redux";
import themeReducer from "./reducer/themeSlice";
import languageReducer from "./reducer/LanguageReducer";
import loginReducer from "./reducer/loginReducer";
import otpVerifyReducer from "./reducer/otpVerifyReducer";
import LoginUserDataReducer from "./reducer/LoginUserDataReducer";

const rootReducer = combineReducers({
    languageReducer: languageReducer,
    loginReducer: loginReducer,
    otpVerifyReducer: otpVerifyReducer,
    LoginUserDataReducer: LoginUserDataReducer,
    theme: themeReducer,

})

export default rootReducer;