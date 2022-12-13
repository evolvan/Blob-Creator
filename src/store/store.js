import { configureStore } from "@reduxjs/toolkit"
import canvasSlice from "./slices/canvasSlice"

const store = configureStore({
    reducer: {
        canvasState: canvasSlice
    }
})

export default store