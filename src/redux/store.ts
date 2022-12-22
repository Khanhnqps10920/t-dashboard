import { configureStore } from "@reduxjs/toolkit";
import samplePageSlice from "../components/SamplePage/samplePageSlice";
//import your slice 

const store = configureStore({
    reducer: {
        samplePageSlice,
        //and then put slice here
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;