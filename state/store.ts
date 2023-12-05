import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { giphyReducer } from './reducers/giphySearch'
import { giphyApi } from '../apis/giphy'

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
    giphySearchTerm: giphyReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(giphyApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
