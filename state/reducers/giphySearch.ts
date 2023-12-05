import { createReducer } from "@reduxjs/toolkit"
import { setSearch } from "../actions"

export const giphyReducer = createReducer('', (builder) => {
    builder
        .addCase(setSearch, (state, action) => {
            state = action.payload
            return state
        })
})

