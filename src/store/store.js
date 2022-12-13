import { configureStore } from "@reduxjs/toolkit"
import svgSlice from "./slices/svgSlice"


const store = configureStore({
    reducer: {
        svg: svgSlice
    }
})

export default store