import { createSlice } from '@reduxjs/toolkit'

const serchresSlice = createSlice({
    name: 'serchres',
    initialState: {
        
    },
    reducers: {
        setSearchResults: (state, action) => {
            state= Object.assign(state, action.payload)
        },
    },
})

export const { setSearchResults } = serchresSlice.actions

export default serchresSlice.reducer