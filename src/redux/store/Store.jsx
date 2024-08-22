import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../state/counter/CounterSlice";
export default configureStore({
    reducer: {
        counter:CounterSlice
    }
})