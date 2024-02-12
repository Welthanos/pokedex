import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface Type {
    type: { name: string };
}

interface Sprite {
    front_default: string;
    back_default: string;
}
export interface Pokemon {
    id: string;
    name: string;
    sprites: Sprite;
    types: Type[];
}

interface PokemonState {
    pokemons: Pokemon[];
}

const initialState: PokemonState = {
    pokemons: [],
};

export const fetchPokemons = createAsyncThunk('pokemon/fetch', async () => {
    const endpoints = [];

    for (let i = 1; i <= 60; i++) endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);

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