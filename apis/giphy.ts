import { GIPHY_API_KEY } from "@env"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=`

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getGifsBySearch: builder.query<any, string>({
            query: (term) => term,
        }),
    }),
})

export const { useGetGifsBySearchQuery } = giphyApi
