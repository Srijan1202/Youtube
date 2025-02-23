import { createSlice } from "@reduxjs/toolkit";
import { chat_limit } from "./constants";

const chatSlice= createSlice({
    name: "chat",
    initialState:{
        messages:[],
    },
    reducers:{ 
        addMessage: (state, action)=>{
            
            state.messages.splice(chat_limit,1)
            state.messages.unshift(action.payload)
    }
}
})

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

