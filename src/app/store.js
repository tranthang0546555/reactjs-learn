// import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../components/Counter/counterSlice"
import userReducer from "../features/Auth/components/userSlide"
const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {
    count: counterReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store