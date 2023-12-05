import { createAction } from "@reduxjs/toolkit";

export const setSearch = createAction<string, "SET_SEARCH">("SET_SEARCH")
