import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from './pokemonSlice';

export interface Favorite {
    pokemon: Pokemon;
    isFavorite: boolean;
}

interface FavoriteState {
    favorites: Favorite[];
}

const initialState: FavoriteState = {
    favorites: [],
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Favorite>) => {
            const favoriteExists = state.favorites.find(f => f.pokemon.id === action.payload.pokemon.id);

            if (favoriteExists) return;

            state.favorites.push(action.payload);
        },

        removeFavorite: (state, action: PayloadAction<Favorite>) => {
            state.favorites = state.favorites.filter(favorite => favorite.pokemon.id !== action.payload.pokemon.id);
        }
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;