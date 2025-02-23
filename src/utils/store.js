import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import serchresReducer from "./serchresSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        serchres: serchresReducer,
    },
});

export default store;