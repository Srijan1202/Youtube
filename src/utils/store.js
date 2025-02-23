import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import serchresReducer from "./serchresSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        serchres: serchresReducer,
        chat: chatReducer,
    },
});

export default store;