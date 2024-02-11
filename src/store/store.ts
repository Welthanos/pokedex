import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice,
        favorite: favoriteSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;