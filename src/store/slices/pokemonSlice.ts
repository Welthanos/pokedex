import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pokemon {
    id: string;
    name: string;
}

interface PokemonState {
    pokemons: Pokemon[];
}

const initialState: PokemonState = {
    pokemons: [],
};

export const fetchPokemons = createAsyncThunk('pokemon/fetch', async () => {
    const endpoints = [];

    for (let i = 1; i <= 50; i++) endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);

    try {
        const pokemons = await axios.all(endpoints.map(endpoint => axios.get(endpoint).then(res => res.data)));

        return pokemons;
    } catch (error) {
        throw error;
    }


});

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload;
        });
    },
});

export const { } = pokemonSlice.actions;
export default pokemonSlice.reducer;